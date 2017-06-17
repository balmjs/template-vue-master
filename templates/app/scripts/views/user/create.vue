<template>
  <div class="page--user user-create">
    <h3>Create a new user</h3>
    <p>
      <input type="text" v-model="formData.name" @keyup.enter="onCreate">
    </p>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      formData: {
        name: ''
      }
    };
  },
  methods: {
    ...mapActions([
      'addUser'
    ]),
    async onCreate() {
      if (this.formData.name) {
        // add
        await this.addUser(this.formData);
        // clear
        this.formData.name = '';
        // back
        this.$router.push('/user/list');
      }
    }
  }
};
</script>
