import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

function setupSwagger(app: INestApplication) {
  const SWAGGER_PATH = 'api/swagger';

  const config = new DocumentBuilder()
    .setTitle('Water Jug Riddle')
    .setDescription('API description')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(SWAGGER_PATH, app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
