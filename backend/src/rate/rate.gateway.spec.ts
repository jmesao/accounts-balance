import { Test, TestingModule } from '@nestjs/testing';
import { RateGateway } from './rate.gateway';
import { RateService } from './rate.service';

describe('RateGateway', () => {
  let gateway: RateGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateGateway, RateService],
    }).compile();

    gateway = module.get<RateGateway>(RateGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
