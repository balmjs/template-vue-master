<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt="">
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
const hello = () => import('../components/hello');
const myMenu = () => import('../components/my-menu');
import logo from '../../../images/logo.png';

export default {
  name: 'app',
  components: {
    hello,
    myMenu
  },
  data() {
    return {
      logo
    };
  }
};
</script>
