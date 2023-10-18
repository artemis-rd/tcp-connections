import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceTwoService {
  getHello(): string {
    return 'Hello World!';
  }
}
