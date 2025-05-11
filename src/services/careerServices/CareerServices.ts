import { AxiosResponse } from "axios";
import axios from "../baseService";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import {
  EvaluateCarerRequest,
  NewCareProfileRequest,
  NewCarerProfileResponse,
} from "@/ts/types/api/carer/CreateCarerProfile.type";
import { NewCarerReviewReq } from "@/ts/types/api/carer/NewCarerReviewReq.type";
import { NewCarerReviewResp } from "@/ts/types/api/carer/NewCarerReviewResp.type";
import { UpdateCarerProfileDto } from "@/ts/types/api/carer/UpdateCarerProfileDto.type";
import { UpdateCarerProfileSettingsDto } from "@/ts/types/api/carer/UpdateCarerProfileSettingsDto.type";

const Entity = "carer-profile";

export const GetOneCarerRequest = async (carerId: number) => {
  const controller = "test";
  try {
    const response: AxiosResponse<GetOneCarer> = await axios.get(
      `/${Entity}/${controller}/${carerId}`,
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

export const GetAllCarerProfiles = async () => {
  try {
    const response: AxiosResponse<GetOneCarer[]> = await axios.get(
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

export const GetSelfCollab = async (token: string) => {
  try {
    const response: AxiosResponse<GetOneCarer> = await axios.get(
      `/${Entity}/self`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
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

export const GetSelfCareer = async () => {
  try {
    const response: AxiosResponse<GetOneCarer> = await axios.get(
      `/${Entity}/self`,
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

export const GetPendingToAproveCarers = async () => {
  try {
    const response: AxiosResponse<GetOneCarer[]> = await axios.get(
      `/${Entity}/admin/list-carers-pending-to-approve`,
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

export const CreateCarerProfile = async (
  bodyRequest: NewCareProfileRequest,
) => {
  try {
    const response: AxiosResponse<NewCarerProfileResponse> = await axios.post(
      `/${Entity}`,
      bodyRequest,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating new carer profile:", error);
    throw error;
  }
};

export const ReviewCarer = async (
  bodyRequest: EvaluateCarerRequest,
  carerId: number,
) => {
  try {
    const response: AxiosResponse<NewCarerProfileResponse> = await axios.patch(
      `/${Entity}/admin/review-carer/${carerId}`,
      bodyRequest,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating new carer profile:", error);
    throw error;
  }
};

export const NewCarerReview = async (bodyRequest: NewCarerReviewReq) => {
  try {
    const response: AxiosResponse<NewCarerReviewResp> = await axios.post(
      `/${Entity}/review`,
      bodyRequest,
    );
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Error creating new carer profile:", error);
    throw error;
  }
};

export const UpdateSelfCarerProfile = async (
  bodyRequest: UpdateCarerProfileDto,
): Promise<GetOneCarer | null> => {
  try {
    const response: AxiosResponse<GetOneCarer> = await axios.patch(
      `/${Entity}/self`,
      bodyRequest,
    );
    return response.data ?? null;
  } catch (error: unknown) {
    console.error("Error updating self carer profile:", error);
    throw error;
  }
};

/**
 * PATCH /carer-profile/self/settings
 * Actualiza solo la parte de settings del perfil
 */
export const UpdateSelfCarerSettings = async (
  bodyRequest: UpdateCarerProfileSettingsDto,
): Promise<GetOneCarer | null> => {
  try {
    const response: AxiosResponse<GetOneCarer> = await axios.patch(
      `/${Entity}/self/settings`,
      bodyRequest,
    );
    return response.data ?? null;
  } catch (error: unknown) {
    console.error("Error updating self carer settings:", error);
    throw error;
  }
};
