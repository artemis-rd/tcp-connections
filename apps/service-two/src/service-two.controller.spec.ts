import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTwoController } from './service-two.controller';
import { ServiceTwoService } from './service-two.service';

describe('ServiceTwoController', () => {
  let serviceTwoController: ServiceTwoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceTwoController],
      providers: [ServiceTwoService],
    }).compile();

    serviceTwoController = app.get<ServiceTwoController>(ServiceTwoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceTwoController.getHello()).toBe('Hello World!');
    });
  });
});
