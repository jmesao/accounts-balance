import { Injectable } from '@nestjs/common';
import { generateRandomIntegerBetweenMinAndMax } from '../helpers/random-characters';

@Injectable()
export class RateService {
  getRate(): number {
    return generateRandomIntegerBetweenMinAndMax(5000, 12000);
  }
}
