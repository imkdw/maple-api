import axios from "axios";
import myConfig from "../config/myConfig";

const api = axios.create({
  baseURL: "https://open.api.nexon.com",
  headers: {
    "x-nxopen-api-key": myConfig.nexonOpenApi.apiKey,
  },
});

export default api;
