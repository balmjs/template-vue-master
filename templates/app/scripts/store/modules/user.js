import * as types from '../mutation-types';
import axios from 'axios';
import api from '../../config/api';

const state = {
  users: [],
  currentUser: null
};

const getters = {
  allUsers(state) {
    return state.users;
  },
  currentUser(state) {
    return state.currentUser;
  }
};

const actions = {
  async getAllUsers({ commit }) {
    console.info('all users');

    let response = await axios.get(api.user.getList);
    let data = response.data;
    let users = data.map(user => {
      return {
        id: user.id,
        name: user.name
      };
    });

    commit(types.ALL_USERS, users);
  },
  addUser({ commit }, formData) {
    let user = Object.assign({}, formData);
    console.info('create user', user);

    commit(types.CREATE_USER, user);
  },
  removeUser({ commit }, id) {
    console.info('delete user', id);

    commit(types.DELETE_USER, id);
  },
  editUser({ commit }, formData) {
    let user = Object.assign({}, formData);
    console.info('update user', user);

    commit(types.UPDATE_USER, user);
  },
  getUser({ commit }, id) {
    console.info('one user', id);

    commit(types.ONE_USER, id);
  }
};

const mutations = {
  [types.ALL_USERS](state, users) {
    state.users = users;
  },
  [types.CREATE_USER](state, user) {
    // mock data
    user.id = state.users.length
      ? state.users[state.users.length - 1].id + 1
      : 1;

    state.users.push(user);
  },
  [types.DELETE_USER](state, id) {
    if (state.users) {
      let index = state.users.findIndex(user => user.id === +id);
      state.users.splice(index, 1);
    }
  },
  [types.UPDATE_USER](state, user) {
    if (state.users) {
      let index = state.users.findIndex(_user => _user.id === +user.id);
      state.users[index] = user;
    }
  },
  [types.ONE_USER](state, id) {
    if (state.users) {
      let user = state.users.find(user => user.id === +id);
      state.currentUser = user;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
