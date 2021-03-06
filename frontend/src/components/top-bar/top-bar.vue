<template>
  <div class="top-bar">
    <div class="top-bar__menu">
      <span class="top-bar__menu__icon material-icons">menu</span>
    </div>
    <div class="top-bar__balance">
      <span class="top-bar__balance__symbol">฿</span> : $ {{rate}}
    </div>
    <div class="top-bar__notification">
      <span class="material-icons top-bar__notification__icon">notifications_none</span>
    </div>
  </div>
</template>

<script>
import store from '../../store';
import { getRate } from '../../services/rate';

export default {
  name: 'top-bar',
  data() {
    return {
      rate: '-',
    };
  },
  async created() {
    try {
      const { data } = await getRate();
      this.rate = data;
      store.commit('setRate', this.rate);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
.top-bar {
  @apply tw-flex tw-flex-row tw-flex-no-wrap;
  @apply tw-h-48;
  @apply tw-items-center tw-p-16;

  &__menu {
    @apply tw-flex-auto;
    @apply tw-cursor-pointer;

    &__icon {
      @apply tw-py-1 tw-px-4;

      background-color: #00b591;
      color: white;
    }
  }

  &__balance {
    @apply tw-text-center;

    flex: 5 1 auto;

    &__symbol {
      @apply tw-py-0 tw-px-4;
      @apply tw-rounded-1/2;

      background-color: #8d96a2;
      color: white;
    }
  }

  &__notification {
    @apply tw-flex-auto;
    @apply tw-text-right;

    &__icon {
      color: #959ca6;
    }
  }
}
</style>
