import { Test, TestingModule } from '@nestjs/testing';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

describe('AccountsController', () => {
  let accountsController: AccountsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [AccountsService],
    }).compile();

    accountsController = app.get<AccountsController>(AccountsController);
  });

  describe('getAccounts', () => {
    it('should return accounts', () => {
      const accounts = accountsController.getAccounts();
      expect(accounts).toBeDefined();
      expect(accounts.length).toBe(15);
    });
  });

  describe('getAccountDetailsById', () => {
    it('should return accounts', () => {
      const accountDetails = accountsController.getAccountDetailsById(0);
      expect(accountDetails).toBeDefined();
      expect(accountDetails.length).toBe(5);
    });
  });
});
