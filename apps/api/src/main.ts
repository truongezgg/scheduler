import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { initSwaggerForAPI } from '@app/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  initSwaggerForAPI(app);

  await app.listen(3001);
}
bootstrap();
