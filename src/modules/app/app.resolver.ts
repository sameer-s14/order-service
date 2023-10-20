import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query('checkHealth')
  checkHealth() {
    return {
      message: 'orderService',
      status: true,
    };
  }
}
