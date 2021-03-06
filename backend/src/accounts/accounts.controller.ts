import { Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import {Account} from "../interfaces/Account";

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  getAccounts(): Account[] {
    return this.accountsService.getAccounts();
  }
}
