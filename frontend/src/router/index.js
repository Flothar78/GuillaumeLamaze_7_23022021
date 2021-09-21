import Vue from "vue";
import VueRouter from "vue-router";
import Forum from "../views/Forum.vue";
import Accueil from "../views/Accueil.vue";
import store from "../store";
Vue.use(VueRouter);
////// routes de chacune des views //////

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/forum",
    name: "Forum",
    beforeEnter(to, from, next) {
      if (store.state.token) {
        next();
        return;
      }
      next("/");
    },
    component: Forum,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
