import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({credentials: true, origin: [process.env.CLIENT_URL, process.env.MOBILE_URL]});
  await app.listen(8080);
}
bootstrap();
