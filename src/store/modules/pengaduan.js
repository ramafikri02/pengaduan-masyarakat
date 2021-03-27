import axios from "axios";

const state = {
  resp: null,
  pengaduan: [],
  pengaduanById: [],
};

const getters = {};

const actions = {
  async loadPengaduan({ commit }) {
    axios.get("pengaduan").then((response) => {
      commit("GET_PENGADUAN", response.data.data);
    });
  },
  async loadPengaduanID({ commit }, id) {
    axios.get("pengaduan" + id).then((response) => {
      commit("GET_PENGADUAN_ID", response.data.data);
    });
  },
  async createPengaduan({ commit }, payload) {
    axios.post("pengaduan", payload).then((response) => {
      commit("SET_RESP", response.data.data);
    });
  },
  async deletePengaduan({ commit }, id) {
    axios.delete("pengaduan" + id).then((response) => {
      commit("SET_RESP", response.data.data);
    });
  },
};
const mutations = {
  GET_PENGADUAN(state, payload) {
    state.pengaduan = payload;
  },
  GET_PENGADUAN_ID(state, payload) {
    state.pengaduanById = payload;
  },
  SET_RESP: (states, payload) => {
    states.resp = payload;
  },
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
};
