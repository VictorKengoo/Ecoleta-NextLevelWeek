import axios from "axios";

const api = axios.create({
  baseURL: "IP:3333",
});

export default api;
