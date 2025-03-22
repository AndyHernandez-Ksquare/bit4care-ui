import { AxiosResponse } from "axios";
import axios from "../baseService";
import { UserSelf } from "@/ts/types/api/user";

const Entity = "user";

export const UserSelfService = async (token: string) => {
  const Controller = "self";

  try {
    const response: AxiosResponse<UserSelf> = await axios.get(
      `/${Entity}/${Controller}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.data) {
      // Login exitoso, puedes manejar la respuesta según tus necesidades
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};
