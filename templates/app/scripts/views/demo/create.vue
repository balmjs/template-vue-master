<template>
  <div class="page-user-create">
    <fieldset>
      <legend>Create a new user</legend>
      <p>
        <input v-model.trim="user.name" type="text" @keyup.enter="onCreate" />
      </p>
      <p>
        <button type="button" @click="$router.back()">Back</button>
        <button type="button" @click="onCreate">Save</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        name: ''
      }
    };
  },
  methods: {
    ...mapActions(['addUser']),
    async onCreate() {
      if (this.user.name) {
        // add
        await this.addUser(this.user);
        // clear
        this.user.name = '';
        // back
        this.$router.push({ name: 'demo.list' });
      }
    }
  }
};
</script>
