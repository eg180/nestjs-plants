import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsController } from './plants/plants.controller';
import { PlantsService } from './plants/plants.service';
import { PlantsModule } from './plants/plants.module';
import { LoggerMiddleware } from './plants/logger.middleware';

@Module({
  imports: [PlantsModule],
  controllers: [AppController, PlantsController],
  providers: [AppService, PlantsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'plants', method: RequestMethod.GET });
  }
}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes(PlantsController);
//   }
// }

// consumer
//   .apply(LoggerMiddleware)
//   .exclude(
//     { path: 'cats', method: RequestMethod.GET },
//     { path: 'cats', method: RequestMethod.POST },
//     'cats/(.*)',
//   )
//   .forRoutes(CatsController);

// consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
