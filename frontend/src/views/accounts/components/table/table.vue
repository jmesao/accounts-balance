<template>
  <ec-table
    class="tw-p-16"
    :data="tableData"
    :columns="columns"
  >
    <template v-slot:col4="{ content }">
      <div>{{content.btcBalance}}</div>
      <div>{{content.usdBalance}}</div>
    </template>
    <template v-slot:col5="{ content }">
      <div>{{content.btcAvailableBalance}}</div>
      <div>{{content.usdAvailableBalance}}</div>
    </template>
  </ec-table>
</template>

<script>
import { EcTable } from '@ebury/chameleon-components';
import { getAccounts } from '../../../../services/accounts';

export default {
  name: 'AccountsBalanceTable',
  components: {
    EcTable,
  },
  data() {
    return {
      columns: [
        { title: 'Account name' },
        { title: 'Category' },
        {
          title: 'Tags',
        },
        {
          title: 'Balance',
          type: 'currency',
        },
        {
          title: 'Available balance',
          type: 'currency',
        },
      ],
      accounts: [],
    };
  },
  computed: {
    tableData() {
      let accounts = [];
      if (this.accounts.length) {
        accounts = this.accounts.map(account => [
          account.name,
          account.category,
          account.tags,
          {
            btcBalance: `${account.balance} BTC`,
            usdBalance: '$0.00',
          },
          {
            btcAvailableBalance: `${account.available_balance} BTC`,
            usdAvailableBalance: '$0.00',
          },
        ]);
      }
      return accounts;
    },
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
