import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Assignment3Controller } from './assignment3/assignment3.controller';

@Module({
  imports: [],
  controllers: [AppController, Assignment3Controller],
  providers: [AppService],
})
export class AppModule {}
