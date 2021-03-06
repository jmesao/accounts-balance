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

  describe('getAccount', () => {
    it('should return accounts', () => {
      const accounts = accountsController.getAccounts();
      expect(accounts).toBeDefined();
      expect(accounts.length).toBe(15);
    });
  });
});
