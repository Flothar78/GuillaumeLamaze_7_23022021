import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";
import "@babel/polyfill";
import store from "./store";

Vue.use(VueSimpleAlert);
Vue.use(router);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
