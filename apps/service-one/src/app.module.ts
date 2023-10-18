import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from 'config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        name: 'SERVICE_TWO',
        useFactory: (config: ConfigService) => ({
          transport: Transport.TCP,
          options: config.get('serviceTwo.tcp'),
        }),
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
