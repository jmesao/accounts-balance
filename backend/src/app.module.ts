import { Module } from '@nestjs/common';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';
import { RateController } from './rate/rate.controller';
import { RateService} from './rate/rate.service';
import { RateGateway } from './rate/rate.gateway';
import { AccountsGateway } from './accounts/accounts.gateway';

@Module({
  imports: [],
  controllers: [AccountsController, RateController],
  providers: [AccountsService, RateService, RateGateway, AccountsGateway],
})
export class AppModule {}
