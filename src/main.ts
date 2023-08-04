/*
 * @Author: zhanglitao@zuoyebang.com
 * @Date: 2023-07-03 20:15:50
 * @LastEditors: zhanglitao@zuoyebang.com
 * @LastEditTime: 2023-08-04 14:22:22
 * @FilePath: /nestjs-demo/src/main.ts
 * @Description: 
 */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import helmet from "helmet"; // 
import * as csurf from 'csurf'; // csrf
import rateLimit from 'express-rate-limit'; // 限速


import { AppModule } from './app.module';
import { TransformInterceptor } from './Interceptors/transform.interceptor';

const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const options = new DocumentBuilder()
    .setTitle('nestjs api docs')
    .setDescription('nestjs api docs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 是否过滤掉不存在dto上的属性
      forbidNonWhitelisted: true, // 传递有非dto属性时，是否严格报错
      transform: true, // dto 类型置换
      transformOptions: {
        enableImplicitConversion: true, // dto 隐式类型转换
      },
    }),
  );

  app.useGlobalInterceptors(new TransformInterceptor());

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.use(helmet());
  app.use(csurf());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  await app.listen(3000);
}
bootstrap();
