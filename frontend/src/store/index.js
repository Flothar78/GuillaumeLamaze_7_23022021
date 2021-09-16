import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    username: "",
    userId: "",
    email: "",
    isAdmin: false,
  },

  mutations: {
    LOGIN_SUCCESS(state, response) {
      (state.token = response.token),
        (state.username = response.username),
        (state.userId = response.userId),
        (state.email = response.email),
        (state.isAdmin = response.isAdmin);
    },
    LOGOUT_SUCCESS(state) {
      (state.token = ""),
        (state.username = ""),
        (state.userId = ""),
        (state.email = ""),
        (state.isAdmin = false);
    },
  },
  getters: {
    token: (state) => state.token,
    username: (state) => state.username,
    userId: (state) => state.userId,
    email: (state) => state.email,
    isAdmin: (state) => state.isAdmin,
  },
  actions: {},
  modules: {},
});
