import {
  Module,
  Dependencies,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { PostsModule } from './posts/posts.module';
import { MySQL } from './config/db.config';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [TypeOrmModule.forRoot(MySQL), PostsModule, CoffeesModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('posts');
  }
}
