import { AxiosResponse } from "axios";
import axios from "../baseService"
import { ClientSelf, CreateClient } from "@/ts/types/api/client";

const Entity = "client";

export const CreateClientService = async (requestBody: CreateClient) => {

  try {
    const response: AxiosResponse<CreateClient> =
      await axios.post(`/${Entity}`, requestBody);
    console.log("Client created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create client:", error);
    throw error;
  }
};

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