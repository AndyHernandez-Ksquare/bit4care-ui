import { AxiosResponse } from "axios";
import axios from "../baseService"
import { CreateAppReq, GetAllApplication } from "@/ts/types/api/applicationRequest";

const Entity = "application-request";

export const GetAllApplicationRequests = async () => {
  try {
    const response: AxiosResponse<GetAllApplication> =
      await axios.get(`/${Entity}`);
    if (response.data) {

      return response.data
    }
  } catch (error: unknown) {
    console.log(error);
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
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};