<template>
  <div>
    <button type="button" @click="openNewWindow()">Open New Window</button>
    <button type="button" @click="openNewWindow('Hello', 'page-a')">Open A Window</button>
    <button type="button" @click="openNewWindow('World', 'page-b')">Open B Window</button>
  </div>
</template>

<script>
export default {
  methods: {
    openNewWindow(msg = '', page = '') {
      this.$newWindow.open({
        msg
      }, page);
    }
  }
};
</script>
