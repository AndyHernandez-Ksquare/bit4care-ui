/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axios from "../baseService"

interface AdminLoginApiResponse {
  token: string;
}

const Entity = "auth";

export const AdminLoginService = async (email: string, password: string) => {
  const Controller = "login";

  try {
    const response: AxiosResponse<AdminLoginApiResponse> =
      await axios.post(`/${Entity}/${Controller}`, {
        email: email,
        password: password,
      });
    if (response.data) {
      // Login exitoso, puedes manejar la respuesta según tus necesidades
      const token = response.data;
      return token;
    }
  } catch (error: any) {
    console.log(error.response.data);
    throw error.response.data;
  }
};