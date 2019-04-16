<template>
  <div v-show="!$newWindow.show" class="container">
    <header class="hero">
      <img :src="logo" alt>
      <hello></hello>
    </header>
    <hr>
    <div class="content">
      <my-menu></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const Hello = () => import('@/views/components/hello');
const MyMenu = () => import('@/views/components/my-menu');
import logo from '@/assets/logo.png';

export default {
  name: 'app',
  components: {
    Hello,
    MyMenu
  },
  data() {
    return {
      logo
    };
  },
  created() {
    this.$bus.$on('message', message => {
      // You need BalmUI (https://material.balmjs.com/)
      if (this.$alert) {
        // For desktop
        this.$alert(message);
      } else if (this.$toast) {
        // For mobile
        this.$toast(message);
      } else {
        alert(message);
      }
    });
  }
};
</script>
