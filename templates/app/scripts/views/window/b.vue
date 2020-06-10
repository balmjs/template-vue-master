<template>
  <div class="page--b">
    <h2>Page B</h2>
    {{ options }}
  </div>
</template>

<script>
export default {
  name: 'PageB',
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
.page--b {
  background: blue;
}
</style>
