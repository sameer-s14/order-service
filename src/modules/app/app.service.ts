import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  async checkHealth(): Promise<string> {
    return '🚀 ~ Order service running fine !';
  }
}
