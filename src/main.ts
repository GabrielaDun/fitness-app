import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('app');
  app.enableCors();
  await app.enableShutdownHooks();
  await app.listen(8000, '0.0.0.0');
}
bootstrap();
