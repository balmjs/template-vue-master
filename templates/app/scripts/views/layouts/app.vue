<template>
  <div v-show="!$newWindow.show" class="container">
    <header class="hero">
      <img :src="logo" />
      <hello></hello>
    </header>
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
  name: 'App',
  components: {
    Hello,
    MyMenu
  },
  data() {
    return {
      logo,
      isLoading: false
    };
  },
  created() {
    this.$bus.$on('on-loading', () => {
      this.isLoading = true;
    });

    this.$bus.$on('off-loading', () => {
      this.isLoading = false;
    });

    this.$bus.$on('error', message => {
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
