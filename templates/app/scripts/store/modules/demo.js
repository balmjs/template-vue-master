import services from '@/services';
import { isProd } from '@/config';

const TYPES = {
  CREATE_USER: 'CREATE_USER',
  DELETE_USER: 'DELETE_USER',
  UPDATE_USER: 'UPDATE_USER',
  ONE_USER: 'ONE_USER',
  ALL_USERS: 'ALL_USERS',
  RESET_USER: 'RESET_USER'
};

const state = {
  users: [],
  currentUser: {}
};

const getters = {
  allUsers: (state) => state.users,
  currentUser: (state) => Object.assign({}, state.currentUser)
};

const mutations = {
  [TYPES.ALL_USERS](state, users) {
    state.users = users;
  },
  [TYPES.CREATE_USER](state, user) {
    state.users.push(user);
  },
  [TYPES.DELETE_USER](state, id) {
    const index = state.users.findIndex((user) => user.id === id);
    state.users.splice(index, 1);
  },
  [TYPES.UPDATE_USER](state, updatedUser) {
    const index = state.users.findIndex((user) => user.id === updatedUser.id);
    state.users[index] = updatedUser;
  },
  [TYPES.ONE_USER](state, user) {
    state.currentUser = user;
  },
  [TYPES.RESET_USER]() {
    state.currentUser = {};
  }
};

const actions = {
  async getAllUsers({ commit }, params = {}) {
    console.info('all users');

    const users = isProd ? await services.demo.getAll() : state.users;

    commit(TYPES.ALL_USERS, users);
  },
  async addUser({ commit }, formData) {
    const user = Object.assign({}, formData);
    console.info('create user', user);

    user.id = isProd
      ? await services.demo.create(user)
      : state.users.length
      ? Math.max(...state.users.map((user) => user.id)) + 1
      : 1;

    commit(TYPES.CREATE_USER, user);
  },
  async removeUser({ commit }, id) {
    console.info('delete user', id);

    isProd && (await services.demo.delete(id));

    commit(TYPES.DELETE_USER, id);
  },
  async editUser({ commit }, formData) {
    const user = Object.assign({}, formData);
    console.info('update user', user);

    if (isProd) {
      const { id, name } = user;
      await services.demo.update(id, {
        name
      });
    }

    commit(TYPES.UPDATE_USER, user);
  },
  async getUser({ commit }, id) {
    console.info('one user', id);

    const user = isProd
      ? await services.demo.getOne(id)
      : state.users.find((user) => user.id === id);

    commit(TYPES.ONE_USER, user);
  },
  resetUser({ commit }) {
    console.info('clear user');

    commit(TYPES.RESET_USER);
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
};
