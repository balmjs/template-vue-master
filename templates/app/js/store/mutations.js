import * as types from './mutation-types';

const mutations = {
  [types.MENUS](state, { menus }) {
    state.menus = menus;
  },

  [types.ADD_USER](state, { user }) {
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
  },
  [types.ALL_USERS](state, { users }) {
    state.users = users;
  }
};

export default mutations;
