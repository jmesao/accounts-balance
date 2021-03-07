<template>
  <div>
    <top-bar />
    <router-view />
  </div>
</template>
<script>

import TopBar from './components/top-bar';

export default {
  name: 'App',
  components: {
    TopBar,
  },
};
</script>

<style>
@import './assets/styles/theme.css';
@import './assets/styles/components/accounts-balance.css';
</style>
