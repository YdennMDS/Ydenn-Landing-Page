import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://api.ydenn.fr:3000/",
  // baseURL: API_YDENN_URL,
});

export default instance;
