<template>
  <div class="container">
    <header>
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
import Hello from '../components/hello';
import MyMenu from '../components/menu';

export default {
  name: 'app',
  components: {
    Hello,
    MyMenu
  },
  data() {
    return {
      logo: require('../../../images/logo.png')
    };
  }
};
</script>
