import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from './user.service';
import { map, toArray } from 'rxjs';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}
  @Get('/api/v1/users')
  public listUsers() {
    return this.appService.getUsers();
  }
}