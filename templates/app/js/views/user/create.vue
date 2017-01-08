<template>
  <div class="user-create">
    <h3>Create a new user</h3>
    <p>
      <input type="text" v-model.trim="name" @keyup.enter="onCreate">
    </p>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      name: ''
    };
  },
  methods: {
    ...mapActions([
      'addUser'
    ]),
    async onCreate() {
      if (this.name) {
        // add
        await this.addUser({
          name: this.name
        });
        // clear
        this.name = '';
        // back
        this.$router.push('/user/list');
      }
    }
  }
};
</script>
