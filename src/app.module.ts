import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Assignment2Controller } from './assignment2/assignment2.controller';

@Module({
  imports: [],
  controllers: [AppController, Assignment2Controller],
  providers: [AppService],
})
export class AppModule {}
