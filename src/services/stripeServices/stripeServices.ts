import { AxiosResponse } from "axios";
import axios from "../baseService";
import {
  CreatePaymentIntent,
  StripeAccountLink,
  StripePublisheableKey,
} from "@/ts/types/api/stripe";

const Entity = "stripe";

export const StripePublisheableKeyService = async () => {
  const Controller = "stripe-publishable-key";
  try {
    const response: AxiosResponse<StripePublisheableKey> = await axios.get(
      `/${Entity}/${Controller}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const CreateConnectedAccount = async () => {
  const Controller = "create-connected-account";
  try {
    const response: AxiosResponse<StripeAccountLink> = await axios.post(
      `/${Entity}/${Controller}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const CreateCustomer = async () => {
  const Controller = "create-customer";
  try {
    const response: AxiosResponse<unknown> = await axios.post(
      `/${Entity}/${Controller}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const CreatePaymentIntentService = async (appRequestId: number) => {
  const Controller = `create-payment-intent`;
  try {
    const response: AxiosResponse<CreatePaymentIntent> = await axios.post(
      `/${Entity}/${Controller}/${appRequestId}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const BeginCaptureAndTransfer = async (appRequestId: number) => {
  const Controller = `begin-capture-and-transfer`;
  try {
    const response: AxiosResponse<unknown> = await axios.post(
      `/${Entity}/${Controller}/${appRequestId}`,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};
