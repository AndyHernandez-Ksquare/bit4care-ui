import { AxiosResponse } from "axios";
import axios from "../../baseService";
import { CollaboratorRequest } from "@/ts/types/api/collaborator/registerCollaborator";

const Entity = "carer-profile";

export const collaboratorsRegisterService = async (
  data: CollaboratorRequest,
) => {
  try {
    const response: AxiosResponse = await axios.post(`/${Entity}`, data);
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error registering collaborator:", error);
    throw error;
  }
};
