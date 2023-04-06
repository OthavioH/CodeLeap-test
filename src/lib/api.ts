import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APIURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});

export default api;
