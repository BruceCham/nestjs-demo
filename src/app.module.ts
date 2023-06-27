import {
  Module,
  Dependencies,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/entities/post.entity';

@Dependencies(DataSource)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'test',
      entities: [Post],
      synchronize: true,
    }),
    PostsModule,
  ],
})
export class AppModule implements NestModule {
  dataSource: any;
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('posts');
  }
}
