import * as types from './mutation-types';
import axios from 'axios';
import api from '../config/api';

const actions = {
  async getMenu({ commit }) {
    console.info('get menus');

    let response = await axios.get(api.global.getMenu);
    let menus = response.data;
    commit(types.MENUS, { menus });
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
  },
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
  }
};

export default actions;
