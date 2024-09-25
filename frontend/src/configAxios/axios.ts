import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.ydenn.fr:3000/",
});

export default instance;
