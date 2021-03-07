<template>
  <ec-table
    class="tw-p-16"
    :data="items"
    :columns="columns"
  >
    <template v-slot:col1="{ content }">
      <div>{{ content.confirmedDate }}</div>
    </template>
    <template v-slot:col6="{ content }">
      <div>
        <div>{{ content.btcCredit }}</div>
        <div>{{ content.usdCredit }}</div>
      </div>
    </template>
    <template v-slot:col7="{ content }">
      <div>
        <div>{{ content.btcBalance }}</div>
        <div>{{ content.usdBalance }}</div>
      </div>
    </template>
  </ec-table>
</template>

<script>
import { EcTable } from '@ebury/chameleon-components';

export default {
  name: 'AccountStatementsTable',
  components: {
    EcTable,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      columns: [
        { title: 'Confirmed date' },
        { title: 'Order ID' },
        {
          title: 'Order code',
        },
        {
          title: 'Transaction type',
        },
        {
          title: 'Debit',
          type: 'currency',
        },
        {
          title: 'Credit',
          type: 'currency',
        },
        {
          title: 'Balance',
          type: 'currency',
        },
      ],
    };
  },
};
</script>
