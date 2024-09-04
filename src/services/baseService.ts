import axios from "axios";

//En desarrollo esta variable tendra la URL de la API, pero en produccion vendra de un .env
const REMOTE_API_URL = "http://bid4care-dev.us-east-1.elasticbeanstalk.com";

export const BASE_HEADERS = {
  "Content-Type": "application/json",
  "Content-Length": "<calculated when request is sent>",
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Connection": "keep-alive"
};

if (!REMOTE_API_URL) {
  console.warn("Tu url no está definida");
}

export default axios.create({
  baseURL: REMOTE_API_URL,
  headers: BASE_HEADERS,
});