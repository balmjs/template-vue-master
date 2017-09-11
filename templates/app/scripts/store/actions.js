import * as types from './mutation-types';
import API from '../api';

const actions = {
  async getMenu({ commit }) {
    console.info('get menu');

    let menu = await API.getMenu();

    commit(types.MENUS, menu);
  }
};

export default actions;
