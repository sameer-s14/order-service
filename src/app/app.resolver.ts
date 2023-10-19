import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query('checkHealth')
  checkHealth() {
    return {
      message: '🚀 ~ Order service running fine!',
    };
  }
}
