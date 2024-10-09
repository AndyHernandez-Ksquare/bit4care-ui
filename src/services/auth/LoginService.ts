import { AxiosResponse } from "axios";
import axios from "../baseService"
import { LoginResponse } from "@/ts/types/api/auth";

const Entity = "auth";

export const LoginService = async (email: string, password: string) => {
  const Controller = "login";

  try {
    const response: AxiosResponse<LoginResponse> =
      await axios.post(`/${Entity}/${Controller}`, {
        email: email,
        password: password,
      });
    if (response.data) {
      // Login exitoso, puedes manejar la respuesta según tus necesidades
      const token = response.data;
      return token;
    }
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};