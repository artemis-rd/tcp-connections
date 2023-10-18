import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SERVICE_TWO') private client: ClientProxy,
  ) {}

  @Get()
  async getHello() {
    this.client.emit('ping', {
      code: 'ping',
      message: 'Hope you get this ST:' + Math.floor(Math.random() * 10000),
    });
    return this.appService.getHello();
  }

  @EventPattern('ping')
  async handlePingEvent(data: any) {
    console.log('*** Received Ping Event ***');
    console.log(data);
    return true;
  }
}
