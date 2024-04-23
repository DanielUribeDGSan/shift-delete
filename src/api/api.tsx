import axios from "axios";

const shiftApi = axios.create({
  // baseURL: "http://localhost:1337",
  // baseURL: "https://shift-cms-dev.ironbit.net",
  baseURL: "https://cms.shiftmexico.com",
});

export default shiftApi;
