import axios from "axios";
import { API_SERVER } from "./constant/Apis";
const instance = axios.create({
  baseURL: API_SERVER,
});
// const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
// let token = localData != null ? localData.token : "";
// console.log("token", token);
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWVzdElkIjoiMjEyd3NkZnNkZnNkZiIsImlhdCI6MTYzOTI1MjI1OCwiZXhwIjoxNjM5MjU1ODU4fQ.QE485j5p2LxkBHsN7LDR8YaCFlwqzN6UoKXCOpf73rk";
instance.defaults.headers.common["Authorization"] = "Bearer " + token;
export default instance;
