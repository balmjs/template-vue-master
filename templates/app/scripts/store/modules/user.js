import * as types from '../mutation-types';
import axios from 'axios';
import api from '../../config/api';

const state = {
  users: [],
  currentUser: null
};

const getters = {
  getAllUsers(state) {
    return state.users;
  },
  getUser(state) {
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

    commit(types.ALL_USERS, { users });
  },
  addUser({ commit }, user) {
    console.info('add user', user);

    commit(types.ADD_USER, { user });
  },
  deleteUser({ commit }, user) {
    console.info('delete user', user);

    commit(types.DELETE_USER, { user });
  },
  editUser({ commit }, { user, name }) {
    console.info('edit user', user, name);

    commit(types.EDIT_USER, { user, name });
  },
  getUser({ commit }, id) {
    console.info('one user', id);

    commit(types.ONE_USER, { id });
  }
};

const mutations = {
  [types.ALL_USERS](state, { users }) {
    state.users = users;
  },
  [types.ADD_USER](state, { user }) {
    // mock data
    user.id = state.users[state.users.length - 1].id + 1;

    state.users.push(user);
  },
  [types.DELETE_USER](state, { user }) {
    state.users.splice(state.users.indexOf(user), 1);
  },
  [types.EDIT_USER](state, { user, name }) {
    user.name = name;
  },
  [types.ONE_USER](state, { id }) {
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
