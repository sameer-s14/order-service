import { AppResolver } from './app/app.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { KnexModule } from 'nest-knexjs';
import { ConfigModule } from '@nestjs/config';
import { databaseConfigProvider } from 'src/database';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    KnexModule.forRootAsync(databaseConfigProvider),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
