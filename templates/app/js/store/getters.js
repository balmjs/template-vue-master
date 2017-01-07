const getters = {
  getMenu(state) {
    return state.menus;
  },

  allUsers(state) {
    return state.users;
  },
  getUser(state) {
    return state.currentUser;
  }
};

export default getters;
