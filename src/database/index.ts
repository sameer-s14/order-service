import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import dbConfig from 'db.config';
import { KnexModuleOptions } from 'nest-knexjs';

export const databaseConfigProvider: FactoryProvider<KnexModuleOptions> = {
  provide: 'DATABASE_CONFIG',
  useFactory: () => ({
    config: dbConfig,
  }),
  inject: [ConfigService],
};
