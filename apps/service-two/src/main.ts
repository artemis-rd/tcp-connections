import { NestFactory } from '@nestjs/core';
import { ServiceTwoModule } from './service-two.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ServiceTwoModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('serviceTwo.port');

  const tcpOptions = {
    host: config.get('serviceTwo.tcp.host'),
    port: config.get('serviceTwo.tcp.port'),
  };

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: tcpOptions,
  });
  app.startAllMicroservices();

  await app.listen(port, async () => {
    console.log('Service Two started');
    console.log('Http Server on', await app.getUrl());
    console.log('TCP Server on', tcpOptions.host, tcpOptions.port);
  });
}
bootstrap();
