import axios from "axios";
import { API_SERVER } from "./constant/Apis";

const instance = axios.create({
  baseURL: API_SERVER,
});

const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
console.log("localData", localData);
let token = localData != null ? localData.token : "";
console.log("token", token);

instance.defaults.headers.common["Authorization"] = "Bearer " + token;

export default instance;
