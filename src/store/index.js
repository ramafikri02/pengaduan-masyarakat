import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "@/store/modules/auth";
import pengaduan from "@/store/modules/pengaduan";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    pengaduan,
  },
  plugins: [
    createPersistedState({
      key: "token",
      reducer: (state) => ({
        auth: state.auth,
      }),
    }),
  ],
});
