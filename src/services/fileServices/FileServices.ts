import { AxiosResponse } from "axios";
import axios from "../baseService";
import { FileUploadMetadata, FileUploadResponse } from "@/ts/types/api/file";

const Entity = "files";

export const PostPresignedUrl = async (bodyRequest: FileUploadMetadata) => {
  const controller = "presigned-url";
  try {
    const response: AxiosResponse<FileUploadResponse> = await axios.post(
      `/${Entity}/${controller}`,
      bodyRequest,
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

export const GetPresignedUrl = async (fileId: number) => {
  const controller = "presigned-url";
  try {
    const response: AxiosResponse<FileUploadResponse> = await axios.get(
      `/${Entity}/${controller}/${fileId}`,
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

export const GetPresignedUrlByUser = async (carerId: number) => {
  const controller = "presigned-url";
  try {
    const response: AxiosResponse<FileUploadResponse[]> = await axios.get(
      `/${Entity}/user/${controller}/${carerId}`,
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
