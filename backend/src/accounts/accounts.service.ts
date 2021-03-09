import { Injectable } from '@nestjs/common';

import { Account, AccountDetails } from '../interfaces/Account';

import {
  generateRandomBalance,
  generateRandomOrderId,
  generateRandomOrderCode,
} from '../helpers/random-characters';

@Injectable()
export class AccountsService {
  getAccounts(maxAccounts = 15): Account[] {
    const accounts = [];
    for (let i = 0; i < maxAccounts; i++) {
      accounts.push({
        id: i,
        name: 'Testing account_' + i,
        category: 'affiliates',
        tags: 'test',
        balance: generateRandomBalance(),
        available_balance: generateRandomBalance(),
      });
    }

    return accounts;
  }

  getAccountById(id): AccountDetails[] {
    const statements = [];
    for (let i = 0; i < 5; i++) {
      statements.push({
        id: id,
        // TODO.- Generate Date instance and format it on the frontend based on the locale
        confirmed_date: '02/11/2020 14:45',
        order_id: generateRandomOrderId(),
        order_code: generateRandomOrderCode(),
        transaction_type: 'Payment received',
        debit: 0,
        credit: generateRandomBalance(),
        balance: generateRandomBalance(),
      });
    }

    return statements;
  }
}
