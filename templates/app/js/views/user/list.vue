<template>
  <div class="user-list">
    <h2>User list</h2>
    <p>
      <router-link to="/user/create">Add new user</router-link>
    </p>
    <table v-if="users.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <router-link class="fa fa-edit" :to="`/user/detail/${user.id}`">Detail</router-link>
            <i class="fa fa-remove" @click="onDelete(user)">Delete</i>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="no-data" v-else>No data</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      users: 'getAllUsers'
    })
  },
  methods: {
    ...mapActions([
      'getAllUsers',
      'deleteUser'
    ]),
    async onDelete(user) {
      if (confirm(`Are your sure to delete ${user.name}`)) {
        await this.deleteUser(user);
      }
    }
  },
  created() {
    if (!this.users.length) {
      this.getAllUsers();
    }
  }
};
</script>
