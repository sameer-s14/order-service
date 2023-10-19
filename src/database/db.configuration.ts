import { ConfigService } from '@nestjs/config';
import { ENV_VARIABLES } from 'src/constants';

const { DATABASE } = ENV_VARIABLES;
export const knexConfigFactory = (configService: ConfigService) => ({
  config: {
    client: configService.get<string>(DATABASE.CLIENT),
    connection: {
      host: configService.get<string>(DATABASE.HOST),
      user: configService.get<string>(DATABASE.USER),
      password: configService.get<string>(DATABASE.PASSWORD),
      database: configService.get<string>(DATABASE.NAME),
      port: configService.get<number>(DATABASE.PORT),
    },
  },
});
