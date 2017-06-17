<template>
  <div class="container">
    <my-menu></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '../components/menu';

export default {
  name: 'app',
  components: {
    MyMenu
  }
};
</script>
