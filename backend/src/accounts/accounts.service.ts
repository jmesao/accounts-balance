import { Injectable } from '@nestjs/common';

import { Account } from '../interfaces/Account'

@Injectable()
export class AccountsService {

  getRandomNumber(): Number {
    return Math.floor(Math.random() * 5000)/100;
  }

  getAccounts(): Account[] {
    let accounts = [];
    for (let i = 0; i <15; i++) {
      accounts.push({
        name: 'Testing account_' + i,
        category: 'affiliates',
        tags: 'test',
        balance: this.getRandomNumber(),
        available_balance: this.getRandomNumber()
      });
    }

    return accounts;
  }
}
