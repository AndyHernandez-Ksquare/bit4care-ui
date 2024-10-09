import { AxiosResponse } from "axios";
import axios from "../baseService"
import { ClientSelf } from "@/ts/types/api/client";

const Entity = "client";

export const ClientSelfService = async (token: string) => {
  const Controller = "self";

  try {
    const response: AxiosResponse<ClientSelf> =
      await axios.get(`/${Entity}/${Controller}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    if (response.data) {
      // Login exitoso, puedes manejar la respuesta según tus necesidades
      return response.data
    }
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};