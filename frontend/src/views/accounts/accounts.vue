<template>
  <div>
    <header-container title="Accounts">
      <div>Home / <span class="tw-body-strong">Accounts</span></div>
    </header-container>
    <accounts-balance-table
      :items="tableData"
      @row-click="showAccountDetails"
    />
  </div>
</template>
<script>

import { mapState } from 'vuex';
import AccountsBalanceTable from './components/table';
import HeaderContainer from '../../components/header-container';
import { getAccounts } from '../../services/accounts';
import * as FlashBalanceType from '../../enums/flash-balance-type';

export default {
  name: 'AccountsView',
  components: {
    AccountsBalanceTable,
    HeaderContainer,
  },
  data() {
    return {
      accounts: [],
      newAccountsBalance: [],
    };
  },
  computed: {
    ...mapState({
      rate: state => state.rate,
    }),
    tableData() {
      let accounts = [];
      if (this.accounts.length) {
        accounts = this.accounts.map(item => [
          {
            id: item.id,
            name: item.name,
          },
          item.category,
          item.tags,
          {
            btcBalance: `${item.balance} BTC`,
            usdBalance: `$${item.balance * this.rate}`,
            balanceFlash: item.balance_flash,
          },
          {
            btcAvailableBalance: `${item.available_balance} BTC`,
            usdAvailableBalance: `$${item.available_balance * this.rate}`,
            availableBalanceFlash: item.available_balance_flash,
          },
        ]);
      }
      return accounts;
    },
  },
  watch: {
    newAccountsBalance() {
      this.setBalancesFlash();
    },
  },
  async created() {
    this.listenBalanceEventFromServer();
    try {
      const { data } = await getAccounts();
      this.accounts = data;
    } catch (err) {
      console.log(err);
    }
  },
  beforeDestroy() {
    this.sockets.unsubscribe('msgToClientForAccountsBalance');
  },
  methods: {
    listenBalanceEventFromServer() {
      this.sockets.subscribe('msgToClientForAccountsBalance', (newAccountsBalance) => {
        this.newAccountsBalance = newAccountsBalance;
      });
    },

    showAccountDetails(event) {
      const name = 'account-details';
      const account = event.data;
      const { id } = account[0];
      this.$router.push({ name, params: { id, account } });
    },

    compareAndUpdateAccountBalances(account, newAccount, propToCompare, newPropToDefine) {
      if (newAccount[propToCompare] < account[propToCompare]) {
        // New balance lower than the previous then set red flash
        account[newPropToDefine] = FlashBalanceType.RED_FLASH_BALANCE;
      } else if (newAccount[propToCompare] > account[propToCompare]) {
        // New balance greater than the previous then set green flash
        account[newPropToDefine] = FlashBalanceType.GREEN_FLASH_BALANCE;
      } else {
        // If they have the same balances then set no flash
        account[newPropToDefine] = FlashBalanceType.NO_FLASH_BALANCE;
      }
      account[propToCompare] = newAccount[propToCompare];
    },

    setBalancesFlash() {
      for (const newAccountBalance of this.newAccountsBalance) {
        const accountFound = this.accounts.find(account => newAccountBalance.id === account.id);
        this.compareAndUpdateAccountBalances(accountFound, newAccountBalance, 'balance', 'balance_flash');
        this.compareAndUpdateAccountBalances(accountFound, newAccountBalance, 'available_balance', 'available_balance_flash');
      }
    },
  },
};
</script>
