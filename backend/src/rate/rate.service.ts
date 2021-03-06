import { Injectable } from '@nestjs/common';

@Injectable()
export class RateService {

  getRate(): Number {
    return Math.floor(Math.random() * (12000 - 5000) + 5000);
  }
}
