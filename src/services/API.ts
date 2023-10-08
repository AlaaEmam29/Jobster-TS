import axios from "axios";
import { URL_BASE } from "../utils/constant";
import { getUser } from "../utils/localStorageUser";

const API = axios.create({
  baseURL: `${URL_BASE}`,
});
API.interceptors.request.use(
  (config) => {
    const token = getUser()?.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default API;
