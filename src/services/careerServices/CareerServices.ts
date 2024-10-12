import { AxiosResponse } from "axios";
import axios from "../baseService"
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";

const Entity = "carer-profile";

export const GetOneCarerRequest = async (carerId: number) => {
  const controller = "test"
  try {
    const response: AxiosResponse<GetOneCarer> =
      await axios.get(`/${Entity}/${controller}/${carerId}`);
    if (response.data) {

      return response.data
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};

export const GetAllCarerProfiles = async () => {
  try {
    const response: AxiosResponse<GetOneCarer[]> =
      await axios.get(`/${Entity}`);
    if (response.data) {
      return response.data
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};