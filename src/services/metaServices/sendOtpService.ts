import { AxiosResponse } from "axios";
import axios from "../metaService"
import { SendOtpBodyRequest } from "@/ts/types/api/metaRequest/SendOtp.type";

interface SendCodeResponse {
  OTP: string;
}

const Entity = "send-opt";

export const SendValidationCode = async (requestBody: SendOtpBodyRequest) => {
  const response: AxiosResponse<SendCodeResponse> =
    await axios.post(`/${Entity}`, requestBody);

  return response.data;

};

