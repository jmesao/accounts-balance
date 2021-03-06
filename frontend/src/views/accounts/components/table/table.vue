<template>
  <ec-table
    class="tw-p-16"
    :data="tableData"
    :columns="columns"
  >
    <template v-slot:col4="{ content }">
      <div>{{ content.btcBalance }}</div>
      <div>{{ content.usdBalance }}</div>
    </template>
    <template v-slot:col5="{ content }">
      <div>{{ content.btcAvailableBalance }}</div>
      <div>{{ content.usdAvailableBalance }}</div>
    </template>
  </ec-table>
</template>

<script>
import { EcTable } from '@ebury/chameleon-components';
import { mapState } from 'vuex';

export default {
  name: 'AccountsBalanceTable',
  components: {
    EcTable,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    totalItems: {
      type: Number,
    },
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
    };
  },
  computed: {
    ...mapState({
      rate: state => state.rate,
    }),
    tableData() {
      let accounts = [];
      if (this.items.length) {
        accounts = this.items.map(item => [
          item.name,
          item.category,
          item.tags,
          {
            btcBalance: `${item.balance} BTC`,
            usdBalance: `$${item.balance * this.rate}`,
          },
          {
            btcAvailableBalance: `${item.available_balance} BTC`,
            usdAvailableBalance: `$${item.available_balance * this.rate}`,
          },
        ]);
      }
      return accounts;
    },
  },
};
</script>
