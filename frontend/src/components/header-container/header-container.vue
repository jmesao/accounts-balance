<template>
  <div class="header-container">
    <div class="tw-grid">
      <div class="tw-col-full">
        <h2>Accounts</h2>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContainer',
};
</script>

<style>
.header-container {
  @apply tw-p-24 tw-flex tw-flex-col;

  background: white;
  border-top: 1px solid #dedfe1;
  border-bottom: 1px solid #dedfe1;
}
</style>
