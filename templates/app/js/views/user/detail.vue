<template>
  <div class="user-detail">
    <h3>User Detail</h3>
    <div v-if="user">
      <p>ID：{{ user.id }}</p>
      <p>Name: <input type="text" v-model.trim="user.name" @keyup.enter="onUpdate"></p>
    </div>
    <p class="no-data" v-else>No data</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions([
      'editUser'
    ]),
    async onUpdate() {
      if (this.user.name) {
        let user = this.user;
        let name = this.user.name
        // update
        await this.editUser({ user, name });
        // back
        this.$router.push('/user/list');
      }
    }
  },
  async created() {
    let userId = this.$route.params.id;
    await this.$store.dispatch('getUser', userId);

    if (!this.$store.state.currentUser) {
      this.$router.push('/user/list');
    }
  }
}
</script>
