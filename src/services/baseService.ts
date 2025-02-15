import axios from "axios";

//En desarrollo esta variable tendra la URL de la API, pero en produccion vendra de un .env

const REMOTE_API_URL = import.meta.env.VITE_DEV_API_URL;

// const REMOTE_API_URL = "http://localhost:3000/"

export const BASE_HEADERS = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

if (!REMOTE_API_URL) {
  console.warn("Tu url no está definida");
}

const api = axios.create({
  baseURL: REMOTE_API_URL,
  headers: BASE_HEADERS,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("clientToken"); // Token guardado en localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
