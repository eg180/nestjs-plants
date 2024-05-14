import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsController } from './plants/plants.controller';
import { PlantsService } from './plants/plants.service';

@Module({
  imports: [],
  controllers: [AppController, PlantsController],
  providers: [AppService, PlantsService],
})
export class AppModule {}
