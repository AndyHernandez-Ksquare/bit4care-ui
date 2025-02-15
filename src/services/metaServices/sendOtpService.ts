import { AxiosResponse } from "axios";
import axios from "../metaService"
import { SendOtpBodyRequest } from "@/ts/types/api/metaRequest/SendOtp.type";
import { WelcomeMessageResponse } from "@/ts/types/api/metaRequest/WelcomeMessage.type";

interface SendCodeResponse {
  OTP: string;
}



export const SendValidationCode = async (requestBody: SendOtpBodyRequest) => {
  const Entity = "send-otp";
  const response: AxiosResponse<SendCodeResponse> =
    await axios.post(`/${Entity}`, requestBody);

  return response.data;

};

export const SendWelcomeMessage = async (requestBody: SendOtpBodyRequest) => {
  const Entity = "welcome-message";
  const response: AxiosResponse<WelcomeMessageResponse> =
    await axios.post(`/${Entity}`, requestBody);

  return response.data;

};

