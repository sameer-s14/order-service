import { ENV_VARIABLES } from './constants/config.constant';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>(ENV_VARIABLES.APP_PORT);
  await app.listen(port);
}
bootstrap();
