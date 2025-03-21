import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import "reflect-metadata";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  await app.listen(3000);
}
bootstrap();