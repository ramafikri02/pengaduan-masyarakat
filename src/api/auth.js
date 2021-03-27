import axios from "axios";

export const login = (payload) => {
  return axios.post("login", payload);
};
