import services from '@/services';

const TYPES = {
  MENU: 'menu'
};

export const state = {
  menu: []
};

export const getters = {
  menu: (state) => state.menu
};

export const mutations = {
  [TYPES.MENU](state, menu) {
    state.menu = menu;
  }
};

export const actions = {
  async getMenu({ commit }) {
    const menu = await services.getMenu();

    commit(TYPES.MENU, menu);
  }
};
