import axios from "axios";
import { API_SERVER } from "./constant/Apis";

const instance = axios.create({
  baseURL: API_SERVER,
});

instance.interceptors.request.use(
  (config) => {
    // const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
    const localData = JSON.parse(sessionStorage.getItem("resortic_localstorage"));
    let token = localData != null ? localData.token : "";
    config.headers.authorization = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
