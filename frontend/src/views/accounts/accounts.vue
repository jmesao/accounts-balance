<template>
<div>
  <header-container>
    <div>Home / <span class="tw-body-strong">Accounts</span></div>
  </header-container>
  <accounts-balance-table />
</div>
</template>
<script>

import AccountsBalanceTable from './components/table';
import HeaderContainer from '../../components/header-container';

export default {
  name: 'AccountsView',
  components: {
    AccountsBalanceTable,
    HeaderContainer,
  },
};
</script>
