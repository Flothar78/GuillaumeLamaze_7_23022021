import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import "@babel/polyfill";

Vue.use(VueRouter);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount("#app");
