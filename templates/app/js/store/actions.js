import * as types from './mutation-types';
import axios from 'axios';
import api from '../config/api';

const actions = {
  async getMenu({ commit }) {
    console.info('get menus');

    let response = await axios.get(api.global.getMenu);
    let menus = response.data;
    commit(types.MENUS, { menus });
  }
};

export default actions;
