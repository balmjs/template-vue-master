<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt="">
      <my-hello></my-hello>
    </header>
    <hr>
    <div class="content">
      <my-menu></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const MyHello = () => import('../components/hello');
const MyMenu = () => import('../components/menu');
import logo from '../../../images/logo.png';

export default {
  name: 'app',
  components: {
    MyHello,
    MyMenu
  },
  data() {
    return {
      logo
    };
  }
};
</script>
