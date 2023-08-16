import { createStore } from 'vuex';

export default createStore({
  state: {
    _isVisibleStars: true,
  },

  getters: {
    getVisibleStars: (state) => state._isVisibleStars,
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
