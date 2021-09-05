import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";
import TestAxios from "../views/TestAxios.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/TestAxios",
    name: "TestAxios",
    component: TestAxios,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
