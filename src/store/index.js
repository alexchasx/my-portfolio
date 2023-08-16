import { createStore } from 'vuex';

export default createStore({
  state: {
    _isVisibleStars: true,
    _menu: [
      { route: 'home', text: 'Home' },
      { route: 'skills', text: 'Skills' },
      { route: 'portfolio', text: 'Portfolio' },
      { route: 'contacts', text: 'Contacts' },
    ],
  },

  getters: {
    getVisibleStars: (state) => state._isVisibleStars,
    getMenu: (state) => state._menu,
  },

  mutations: {
    setVisibleStars(state, isVisibleStars) {
      state._isVisibleStars = isVisibleStars;
    },
  },

  actions: {
    toggleStars({ commit, getters }) {
      commit('setVisibleStars', !getters.getVisibleStars);
    },
  },
});
