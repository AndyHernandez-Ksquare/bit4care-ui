import { AxiosResponse } from "axios";
import axios from "../baseService"
import { CreateAppReq, GetAllApplication } from "@/ts/types/api/applicationRequest";

const Entity = "application-request";

export const GetAllApplicationRequests = async (status: string) => {
  try {
    const response: AxiosResponse<GetAllApplication[]> =
      await axios.get(`/${Entity}?status=${status}`);
    if (response.data) {

      console.log(response.data)
      return response.data
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};

export const CreateApplicationRequest = async (bodyRequest: CreateAppReq) => {
  try {
    const response: AxiosResponse<GetAllApplication> =
      await axios.post(`/${Entity}`, bodyRequest);
    if (response.data) {
      return response.data
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};