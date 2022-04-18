<template>
  <div class="container">
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
      logo
    };
  }
};
</script>
