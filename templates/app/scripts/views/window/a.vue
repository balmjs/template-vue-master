<template>
  <div class="page--a">
    <h2>Page A</h2>
    {{ options }}
  </div>
</template>

<script>
export default {
  name: 'PageA',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.page--a {
  background: red;
}
</style>
