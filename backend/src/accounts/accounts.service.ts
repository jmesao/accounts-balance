import { Injectable } from '@nestjs/common';

import { Account, AccountDetails } from '../interfaces/Account'

import { generateRandomBalance, generateRandomOrderId, generateRandomOrderCode, generateRandomIntegerBetweenMinAndMax } from '../helpers/random-characters'

@Injectable()
export class AccountsService {

  getAccounts(maxAccounts=14): Account[] {
    let accounts = [];
    for (let i = 0; i < maxAccounts; i++) {
      accounts.push({
        id: i,
        name: 'Testing account_' + i,
        category: 'affiliates',
        tags: 'test',
        balance: generateRandomBalance(),
        available_balance: generateRandomBalance()
      });
    }

    return accounts;
  }

  getAccountById(id): AccountDetails[] {
    let statements = [];
    for (let i = 0; i <5; i++) {
      statements.push({
        id: id,
        confirmed_date: '02/11/2020 14:45',
        order_id: generateRandomOrderId(),
        order_code: generateRandomOrderCode(),
        transaction_type: 'Payment received',
        debit: 0,
        credit: generateRandomBalance(),
        balance: generateRandomBalance()
      });
    }

    return statements;
  }
}
