import { AxiosResponse } from "axios";
import axios from "../baseService";
import {
  CreateAppReq,
  GetAllApplication,
  GetOneApplication,
} from "@/ts/types/api/applicationRequest";
import {
  MakeNegotiationRequestBody,
  Negotiation,
  NegotiationRequestBody,
} from "@/ts/types/api/applicationRequest/Negotiation.type";
import { id } from "date-fns/locale";

const Entity = "application-request";

export const GetAllApplicationRequests = async (status: string) => {
  try {
    const response: AxiosResponse<GetAllApplication[]> = await axios.get(
      `/${Entity}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};

export const GetOneAppRequest = async (appRequestId: string) => {
  try {
    const response: AxiosResponse<GetOneApplication> = await axios.get(
      `/${Entity}/${appRequestId}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    throw error;
  }
};

export const GetCarerRequests = async () => {
  try {
    const response: AxiosResponse<GetOneApplication[]> = await axios.get(
      `/${Entity}/carer`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error getting application request:", error);
    throw error;
  }
};

export const GetPendingRequests = async () => {
  try {
    const response: AxiosResponse<GetOneApplication[]> = await axios.get(
      `/${Entity}/carer/pendingRequests`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error getting application request:", error);
    throw error;
  }
};

export const CreateApplicationRequest = async (bodyRequest: CreateAppReq) => {
  try {
    const response: AxiosResponse<GetAllApplication> = await axios.post(
      `/${Entity}`,
      bodyRequest,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    throw error;
  }
};

export const UpdateApplicationRequest = async (
  appRequestId: string,
  bodyRequest: CreateAppReq,
) => {
  try {
    const response: AxiosResponse<GetAllApplication> = await axios.put(
      `/${Entity}/${appRequestId}`,
      bodyRequest,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    throw error;
  }
};

export const MarkAsInterested = async (appRequestId: string) => {
  try {
    const response: AxiosResponse<GetAllApplication> = await axios.put(
      `/${Entity}/markAsInterested/${appRequestId}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};

export const ProceedWithPayment = async (appRequestId: string) => {
  try {
    const response: AxiosResponse<GetAllApplication> = await axios.put(
      `/${Entity}/proceedWithPayment/${appRequestId}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};

export const StartNegotiation = async (requestBody: NegotiationRequestBody) => {
  try {
    const response: AxiosResponse<Negotiation> = await axios.post(
      `/${Entity}/negotiationOnNewRequest`,
      requestBody,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error starting:", error);
    throw error;
  }
};

export const MakeNegotiation = async (
  id: string,
  requestBody: MakeNegotiationRequestBody,
) => {
  try {
    const response: AxiosResponse<Negotiation> = await axios.patch(
      `/${Entity}/negotiation/${id}`,
      requestBody,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error making negotiation:", error);
    throw error;
  }
};

export const MarkAsNotInterested = async (appRequestId: string) => {
  try {
    const response: AxiosResponse<unknown> = await axios.put(
      `/${Entity}/markAsNotInterested/${appRequestId}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};

export const DeleteApplicationRequest = async (appRequestId: string) => {
  try {
    const response: AxiosResponse<unknown> = await axios.delete(
      `/${Entity}/${appRequestId}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating application request:", error);
    throw error;
  }
};
