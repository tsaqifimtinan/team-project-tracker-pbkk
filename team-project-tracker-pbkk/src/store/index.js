import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const user = await response.json();
        commit('setUser', user);
      }
    },
    async logout({ commit }) {
      await fetch('/api/logout');
      commit('clearUser');
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
  },
});