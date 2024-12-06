import axios from "axios";

//En desarrollo esta variable tendra la URL de la API, pero en produccion vendra de un .env
// const REMOTE_API_URL = "http://bid4care-dev.us-east-1.elasticbeanstalk.com";

const REMOTE_API_URL = "https://bid4care-notifications-production.up.railway.app/"

// const REMOTE_API_URL = "http://localhost:3000/"


export const BASE_HEADERS = {
  "Content-Type": "application/json",
  "Accept": "*/*",
};

if (!REMOTE_API_URL) {
  console.warn("Tu url no está definida");
}

const apiMeta = axios.create({
  baseURL: REMOTE_API_URL,
  headers: BASE_HEADERS,
});

export default apiMeta;