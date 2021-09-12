import Vue from "vue";
import VueRouter from "vue-router";
import Forum from "../views/Forum.vue";
import Accueil from "../views/Accueil.vue";
import UserId from "../views/UserId.vue";
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
  {
    path: "/users/:id",
    name: "UserId",
    component: UserId,
    props: (route) => {
      const id = Number.parseInt(route.params.id);
      return { id };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
