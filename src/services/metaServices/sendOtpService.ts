import { AxiosResponse } from "axios";
import axios from "../baseService";
import { SendOtpBodyRequest } from "@/ts/types/api/metaRequest/SendOtp.type";
import { WelcomeMessageResponse } from "@/ts/types/api/metaRequest/WelcomeMessage.type";

const Entity = "auth";

export const SendValidationCode = async (requestBody: SendOtpBodyRequest) => {
  const response: AxiosResponse<void> = await axios.post(
    `/${Entity}/client/send-code`,
    requestBody,
  );
  return response.status;
};

export const VerifyValidationCode = async (
  body: SendOtpBodyRequest & { code: string },
) => {
  // no devolvemos solo .data, así podemos inspeccionar el status
  const response = await axios.put<void>(`/${Entity}/client/verify-code`, body);
  return response;
};

export const SendWelcomeMessage = async (requestBody: {
  clientPhoneNumber: string;
}) => {
  const response: AxiosResponse<WelcomeMessageResponse> = await axios.post(
    `/${Entity}/welcome-message`,
    requestBody,
  );

  return response.data;
};
