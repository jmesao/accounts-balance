import { Module } from '@nestjs/common';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';
import { RateController } from './rate/rate.controller';
import { RateService} from './rate/rate.service';

@Module({
  imports: [],
  controllers: [AccountsController, RateController],
  providers: [AccountsService, RateService],
})
export class AppModule {}
