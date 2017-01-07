<template>
  <div class="container">
    <nav>
      <ul>
        <li v-for="menu in menus">
          <router-link :to="menu.url">{{ menu.name }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      menus: 'getMenu'
    })
  },
  async created() {
    if (!this.$store.state.menus.length) {
      await this.$store.dispatch('getMenu');
    }
  }
};
</script>
