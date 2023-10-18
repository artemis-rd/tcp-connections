import { Controller, Get } from '@nestjs/common';
import { ServiceTwoService } from './service-two.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ServiceTwoController {
  constructor(private readonly serviceTwoService: ServiceTwoService) {}

  @Get()
  getHello(): string {
    return this.serviceTwoService.getHello();
  }

  @EventPattern('ping')
  async handlePingEvent(data: any) {
    console.log('*** Received Ping Event ***');
    console.log(data);

    return true;
  }
}
