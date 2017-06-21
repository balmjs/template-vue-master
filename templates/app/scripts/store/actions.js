import * as types from './mutation-types';
import axios from 'axios';
import api from '../config/api';

const actions = {
  async getMenu({ commit }) {
    console.info('get menu');

    let response = await axios.get(api.global.getMenu);
    let menu = response.data;

    commit(types.MENUS, menu);
  }
};

export default actions;
