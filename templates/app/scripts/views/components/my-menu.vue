<template>
  <nav class="menu-container">
    <ul class="my-menu">
      <template v-for="(item, index) in menu">
        <li :key="index">
          <router-link :to="item.url">
            {{ item.name }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MyMenu',
  computed: {
    ...mapGetters(['menu'])
  },
  created() {
    if (!this.menu.length) {
      this.getMenu();
    }
  },
  methods: {
    ...mapActions(['getMenu'])
  }
};
</script>
