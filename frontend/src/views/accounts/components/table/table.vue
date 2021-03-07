<template>
  <ec-table
    class="tw-p-16"
    :data="items"
    :columns="columns"
    @row-click="(event) => $emit('row-click', event)"
  >
    <template v-slot:col1="{ content }">
      <div>{{ content.name }}</div>
    </template>
    <template v-slot:col4="{ content }">
      <div :class="getClassesForFlash(content, 'balanceFlash')">
        <div>{{ content.btcBalance }}</div>
        <div>{{ content.usdBalance }}</div>
      </div>
    </template>
    <template v-slot:col5="{ content }">
      <div :class="getClassesForFlash(content, 'availableBalanceFlash')">
        <div>{{ content.btcAvailableBalance }}</div>
        <div>{{ content.usdAvailableBalance }}</div>
      </div>
    </template>
  </ec-table>
</template>

<script>
import { EcTable } from '@ebury/chameleon-components';
import * as FlashBalanceType from '../../../../enums/flash-balance-type';

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
  methods: {
    getClassesForFlash(item, propWhereApplyFlash) {
      // TODO.- Apply a class with transition to look like a flash
      let colorClass = '';
      if (item[propWhereApplyFlash] === FlashBalanceType.RED_FLASH_BALANCE) {
        colorClass = 'tw-bg-error-light';
      } else if (item[propWhereApplyFlash] === FlashBalanceType.GREEN_FLASH_BALANCE) {
        colorClass = 'tw-bg-success-light';
      }
      return colorClass;
    },
  },
};
</script>
