import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";
import VueGoodTablePlugin from "vue-good-table";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue-good-table/dist/vue-good-table.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.use(VueGoodTablePlugin);

axios.defaults.baseURL = "http://localhost:8000/api/";

Vue.config.productionTip = false;

const user = store.getters["auth/user"];
const isLoggedIn = store.getters["auth/isLoggedIn"];

if (user && isLoggedIn) {
  window.axios.defaults.headers.common.Authorization = user.token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
