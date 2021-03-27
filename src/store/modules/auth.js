import axios from "axios";
import { login } from "../../api/auth";

const state = {
  resp: null,
  user: null,
  isLoggedIn: false,
};

const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  user(state) {
    return state.user;
  },
};

const actions = {
  login: ({ commit }, payload) => {
    return login(payload)
      .then((res) => {
        let data = res.data.user;
        commit("SET_USER", data);
        return true;
      })
      .catch((err) => {
        console.log("Error while login", err);
        localStorage.removeItem("token");
        commit("SET_RESP", err.response);
        return true;
      });
  },

  logout({ commit }) {
    commit("SET_LOGOUT");
    return true;
  },

  // async get_user({ commit }) {
  //   if (!localStorage.getItem("token")) {
  //     return;
  //   }
  //   try {
  //     let res = await axios.get("user");
  //     commit("set_user", res.data.data);
  //   } catch (error) {
  //     commit("reset_user");
  //     removeHeaderToken();
  //     localStorage.removeItem("token");
  //     return error;
  //   }
  // },
};
const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
    state.isLoggedIn = true;
    axios.defaults.headers.common["Authorization"] = payload.data.token;
  },
  SET_LOGOUT(state) {
    state.user = null;
    state.isLoggedIn = false;
    axios.defaults.headers.common["Authorization"] = null;
  },
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
};
