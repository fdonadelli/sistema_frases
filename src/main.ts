import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createSwaggerDoc } from '#configs/createSwaggerDoc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await createSwaggerDoc(app);
  await app.listen(3001);
}
bootstrap();
