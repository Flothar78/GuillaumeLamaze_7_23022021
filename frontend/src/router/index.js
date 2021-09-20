import Vue from "vue";
import VueRouter from "vue-router";
import Forum from "../views/Forum.vue";
import Accueil from "../views/Accueil.vue";

Vue.use(VueRouter);
////// routes de chacune des views //////

function guardMyroute(to, from, next) {
  var isAuthenticated = false;

  if (this.$store.state.token !== null) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/Accueil");
  }
}
const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/forum",
    name: "Forum",
    beforeEnter: guardMyroute,
    component: Forum,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
