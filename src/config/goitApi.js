import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  goitApi.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  goitApi.defaults.headers.Authorization = "";
};