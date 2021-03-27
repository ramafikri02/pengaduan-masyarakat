import axios from "axios";

export function setHeaderToken(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

export function removeHeaderToken() {
  delete axios.defaults.headers.common["Authorization"];
}

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
  // async loginUser({ commit, dispatch, resolve, reject }, payload) {
  //   axios
  //     .post("http://localhost:8000/api/login/", payload)
  //     .then((response) => {
  //       const token = response.data.access_token;
  //       localStorage.setItem("token", token);
  //       setHeaderToken(token);
  //       dispatch("get_user");
  //       resolve(response);
  //     })
  //     .catch((err) => {
  //       commit("reset_user");
  //       localStorage.removeItem("token");
  //       reject(err);
  //     });
  // },
  async loginUser({ commit }, payload) {
    axios.post("http://localhost:8000/api/login/", payload).then((response) => {
      commit("SET_RESP", response.data.data);
    });
  },

  async get_user({ commit }) {
    if (!localStorage.getItem("token")) {
      return;
    }
    try {
      let response = await axios.get("user");
      commit("set_user", response.data.data);
    } catch (error) {
      commit("reset_user");
      removeHeaderToken();
      localStorage.removeItem("token");
      return error;
    }
  },
};
const mutations = {
  SET_STATUS: (states, payload) => {
    state.user = payload;
    state.isLoggedIn = true;
  },
  set_user(state, data) {
    state.user = data;
    state.isLoggedIn = true;
  },
  reset_user(state) {
    state.user = null;
    state.isLoggedIn = false;
  },
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
};
