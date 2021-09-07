import Vue from "vue";
import VueRouter from "vue-router";

import Forum from "../views/Forum.vue";
import Accueil from "../views/Accueil.vue";
import Message from "../views/Message.vue";

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
    path: "/forum/message",
    name: "Message",
    component: Message,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
