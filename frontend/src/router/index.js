import Vue from "vue";
import VueRouter from "vue-router";

import Forum from "../views/Forum.vue";
import Accueil from "../views/Accueil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/forum",
    name: "Forum",
    component: Forum,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
