import * as types from './mutation-types';

const mutations = {
  [types.MENUS](state, { menus }) {
    state.menus = menus;
  }
};

export default mutations;
