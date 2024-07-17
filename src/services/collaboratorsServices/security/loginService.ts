import { AxiosResponse } from "axios";
import axios from "../../baseService";

interface LoginResponseData {
  userId: number;
  name: string;
  name_full: string;
  token: string;
}

const Entity = "Auth";

export const login = async (usuario: string, contrasena: string) => {
  const Controller = "login";

  try {
    const response: AxiosResponse<LoginResponseData> =
      await axios.post(`/${Entity}/${Controller}`, {
        usuario: usuario,
        password: contrasena,
      });
    if (response.data) {
      // Login exitoso, puedes manejar la respuesta según tus necesidades
      const userData = response.data;
      return userData;
    }
  } catch (error) {
    console.log(error);
    throw error
  }
};