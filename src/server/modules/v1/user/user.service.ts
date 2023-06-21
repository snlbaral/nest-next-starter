import { Injectable } from '@nestjs/common';
import { from, toArray } from 'rxjs';

const USERS = [
    { name: 'John Doe', id: 1 },
    { name: 'Rihanna', id: 2 },
    { name: 'Amilia', id: 3 },
];


@Injectable()
export class UserService {
    getUsers() {
        return from(USERS).pipe(toArray());
    }
}