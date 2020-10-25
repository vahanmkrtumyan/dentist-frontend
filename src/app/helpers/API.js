import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:1122/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
  },
});

export default api;
