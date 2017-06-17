<template>
  <nav>
    <ul class="site-menu">
      <li v-for="menu in menus">
        <router-link :to="menu.url">{{ menu.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'my-menu',
  computed: {
    ...mapGetters({
      menus: 'getMenu'
    })
  },
  methods: {
    ...mapActions([
      'getMenu'
    ])
  },
  created() {
    if (!this.menus.length) {
      this.getMenu();
    }
  }
};
</script>
