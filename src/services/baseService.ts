import axios from "axios";

//En desarrollo esta variable tendra la URL de la API, pero en produccion vendra de un .env
const LOCAL_API_URL = "https://localhost:64901/api/v1";

export const BASE_HEADERS = {
  "Content-Type": "application/json",
};

if (!LOCAL_API_URL) {
  console.warn("Tu url no está definida");
}

export default axios.create({
  baseURL: LOCAL_API_URL,
  headers: BASE_HEADERS,
});