import { Module } from '@nestjs/common';
import { ServiceTwoController } from './service-two.controller';
import { ServiceTwoService } from './service-two.service';
import { ConfigModule } from '@nestjs/config';
import config from 'config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  controllers: [ServiceTwoController],
  providers: [ServiceTwoService],
})
export class ServiceTwoModule {}
