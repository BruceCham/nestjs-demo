import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// import { CatsModule } from './cats/cats.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('posts');
  }
}
