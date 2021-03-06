<template>
  <div>
    <header-container>
      <div>Home / <span class="tw-body-strong">Accounts</span></div>
    </header-container>
    <accounts-balance-table :items="accounts" />
  </div>
</template>
<script>

import AccountsBalanceTable from './components/table';
import HeaderContainer from '../../components/header-container';
import { getAccounts } from '../../services/accounts';

export default {
  name: 'AccountsView',
  components: {
    AccountsBalanceTable,
    HeaderContainer,
  },
  data() {
    return {
      accounts: [],
    };
  },
  async created() {
    try {
      const { data } = await getAccounts();
      this.accounts = data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
