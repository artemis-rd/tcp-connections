import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('serviceOne.port');

  const tcpOptions = {
    host: config.get('serviceOne.tcp.host'),
    port: config.get('serviceOne.tcp.port'),
  };

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: tcpOptions,
  });
  app.startAllMicroservices();

  await app.listen(port, async () => {
    console.log('Service One started');
    console.log('Http Server on', await app.getUrl());
    console.log('TCP Server on', tcpOptions.host, tcpOptions.port);
  });
}
bootstrap();
