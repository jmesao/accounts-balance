<template>
  <div>
    <header-container title="Account detail">
      <div>Home / Accounts / <span class="tw-body-strong">Details</span></div>
    </header-container>
    <div
      class="ec-card tw-flex tw-flex-col tw-min-h-full tw-mt-16"
    >
      <h4
        class="tw-h4 tw-mb-24"
      >Management account status</h4>
    </div>
  </div>
</template>
<script>

import HeaderContainer from '../../components/header-container';
import { getAccountDetailsById } from '../../services/accounts';

export default {
  name: 'AccountsView',
  components: {
    HeaderContainer,
  },
  data() {
    return {
      statements: [],
    };
  },
  async created() {
    try {
      const accountId = this.$route.params.id;
      const { data } = await getAccountDetailsById(accountId);
      this.statements = data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
