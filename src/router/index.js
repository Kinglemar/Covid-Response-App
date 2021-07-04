import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    params: "Close"
  },

  {
    path: "/gethelp",
    name: "GetHelp",
    component: () =>
      import("../views/GetHelp.vue"),
  },

  {
    path: "/guidelines",
    name: "Guidelines",
    component: () =>
      import("../views/Guidelines.vue"),
  },

  {
    path: "/checkup",
    name: "Checkup",
    component: () =>
      import("../views/Checkup.vue"),
  },

  {
    path: "/helplines",
    name: "Helplines",
    component: () =>
      import("../views/Helplines.vue"),
  },

  {
    path: "/thanks",
    name: "Thanks",
    component: () =>
      import("../views/Thanks.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
