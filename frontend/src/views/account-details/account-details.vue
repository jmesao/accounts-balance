<template>
  <div>
    <header-container title="Account detail">
      <div>Home / Accounts / <span class="tw-body-strong">Details</span></div>
    </header-container>
    <div class="card-container ec-card">
      <div v-if="account">
        <div class="tw-h4">{{ account[0].name }}</div>
        <div class="tw-small-text">Treasury account</div>
        <div class="tw-mt-24">
          <span class="card-container__btc-balance">{{ account[3].btcBalance }} </span>
          <span class="card-container__usd-balance">({{ account[3].usdBalance }})</span>
        </div>
        <div class="tw-small-text">(includes 0 BTC ($0.00) of unconfirmed funds)</div>
        <div class="tw-body-text tw-mt-16">
          Available balance: {{ account[4].btcAvailableBalance }} ({{ account[4].usdAvailableBalance }})
        </div>
      </div>
      <div v-else>
        <div class="tw-h4">Dummy Test Name</div>
        <div class="tw-small-text">Treasury account</div>
      </div>
    </div>
    <account-statements-table
      :items="tableData"
    />
  </div>
</template>
<script>

import { mapState } from 'vuex';
import HeaderContainer from '../../components/header-container';
import { getAccountDetailsById } from '../../services/accounts';
import AccountStatementsTable from './components/table';

export default {
  name: 'AccountsView',
  components: {
    AccountStatementsTable,
    HeaderContainer,
  },
  data() {
    return {
      account: null,
      statements: [],
    };
  },
  computed: {
    ...mapState({
      rate: state => state.rate,
    }),
    tableData() {
      let statements = [];
      if (this.statements.length) {
        statements = this.statements.map(item => [
          {
            id: item.id,
            confirmedDate: item.confirmed_date,
          },
          item.order_id,
          item.order_code,
          item.transaction_type,
          item.debit,
          {
            btcCredit: `${item.credit} BTC`,
            usdCredit: `$${item.credit * this.rate}`,
          },
          {
            btcBalance: `${item.balance} BTC`,
            usdBalance: `$${item.balance * this.rate}`,
          },
        ]);
      }
      return statements;
    },
  },
  async created() {
    try {
      const accountId = this.$route.params.id;
      this.account = this.$route.params.account;
      const { data } = await getAccountDetailsById(accountId);
      this.statements = data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
  .card-container {
    @apply tw-flex tw-flex-col;
    @apply tw-min-h-full tw-mt-16;

    &__btc-balance,
    &__usd-balance {
      @apply tw-h1;

      color: #00b591;
    }

    &__usd-balance {
      font-weight: 300;
    }
  }
</style>
