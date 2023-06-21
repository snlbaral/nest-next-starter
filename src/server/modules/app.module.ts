import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/v1.module';

@Module({
    imports: [RenderModule.forRootAsync(Next({dev:true}),{viewsDir:null}),V1Module],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}