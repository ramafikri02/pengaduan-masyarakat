import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";

import Home from "../views/Home.vue";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import CreatePengaduan from "../views/pengaduan/Create";
import ReadPengaduan from "../views/pengaduan/Read";
import ShowPengaduan from "../views/pengaduan/Show";

Vue.use(VueRouter);

const cekLogin = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    return next();
  }
  return next("/login");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/pengaduan",
    name: "ReadPengaduan",
    component: ReadPengaduan,
    beforeEnter: cekLogin,
  },
  {
    path: "/pengaduan/:id",
    name: "ShowPengaduan",
    component: ShowPengaduan,
    beforeEnter: cekLogin,
  },
  {
    path: "/pengaduan/create",
    name: "CreatePengaduan",
    component: CreatePengaduan,
    beforeEnter: cekLogin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.auth)) {
//     if (store.getters.isLoggedIn && store.getters.user) {
//       next();
//       return;
//     }
//     next("/login");
//   }

//   if (to.matched.some((record) => record.meta.guest)) {
//     if (!store.getters.isLoggedIn) {
//       next();
//       return;
//     }
//     next("/pengaduan");
//   }

//   next();
// });

export default router;
