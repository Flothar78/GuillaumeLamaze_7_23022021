import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },

  mutations: {
    LOGIN_SUCCESS(state, response) {
      state.token = response.token;
    },
  },
  getters: { token: (state) => state.token },
  actions: {},
  modules: {},
});
