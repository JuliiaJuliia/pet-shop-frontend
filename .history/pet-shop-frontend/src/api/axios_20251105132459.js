import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3333", // бекенд
  headers: { "Content-Type": "application/json" },
});

export default API;