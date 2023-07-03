import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { TransformInterceptor } from './Interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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

  await app.listen(3000);
}
bootstrap();
