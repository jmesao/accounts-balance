import {Controller, Get} from '@nestjs/common';
import {RateService} from "./rate.service";

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get()
  getRate(): Number {
    return this.rateService.getRate();
  }
}
