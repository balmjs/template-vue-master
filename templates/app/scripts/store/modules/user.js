import * as types from '@/store/mutation-types';
import API from '@/api';

const state = {
  users: [],
  currentUser: {}
};

const getters = {
  allUsers(state) {
    return state.users;
  },
  currentUser(state) {
    return Object.assign({}, state.currentUser);
  }
};

const mutations = {
  [types.ALL_USERS](state, users) {
    state.users = users;
  },
  [types.CREATE_USER](state, user) {
    state.users.push(user);
  },
  [types.DELETE_USER](state, id) {
    const index = state.users.findIndex(user => user.id === id);
    state.users.splice(index, 1);
  },
  [types.UPDATE_USER](state, updatedUser) {
    const index = state.users.findIndex(user => user.id === updatedUser.id);
    state.users[index] = updatedUser;
  },
  [types.ONE_USER](state, user) {
    state.currentUser = user;
  },
  [types.RESET_USER]() {
    state.currentUser = {};
  }
};

const actions = {
  async getAllUsers({ commit }, params = {}) {
    console.info('all users');

    let users = await API.user.getAll();

    commit(types.ALL_USERS, users);
  },
  async addUser({ commit }, formData) {
    let user = Object.assign({}, formData);
    console.info('create user', user);

    user.id = await API.user.create(user);

    commit(types.CREATE_USER, user);
  },
  async removeUser({ commit }, id) {
    console.info('delete user', id);

    await API.user.delete(id);

    commit(types.DELETE_USER, id);
  },
  async editUser({ commit }, formData) {
    let user = Object.assign({}, formData);
    console.info('update user', user);

    let { id, name } = user;
    await API.user.update(id, {
      name
    });

    commit(types.UPDATE_USER, user);
  },
  async getUser({ commit }, id) {
    console.info('one user', id);

    let user = await API.user.getOne(id);

    commit(types.ONE_USER, user);
  },
  resetUser({ commit }) {
    console.info('clear user');

    commit(types.RESET_USER);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
