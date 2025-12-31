import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(),
    // new FastifyAdapter(),
  );
  (app as any).set('trust proxy', true);
  await app.listen(3000);
}
bootstrap();
