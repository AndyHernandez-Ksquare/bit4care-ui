import { useState } from "react";
import {
  CreateAppReq,
  GetAllApplication,
} from "@/ts/types/api/applicationRequest";
import { CreateApplicationRequest } from "@/services/applicationRequestServices/ApplicationRequestServices";

export const useCreateApplicationRequest = () => {
  const [createAppLoading, setCreateAppLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [application, setApplication] = useState<GetAllApplication | null>(
    null,
  );

  const createApplication = async (bodyRequest: CreateAppReq) => {
    setCreateAppLoading(true);
    try {
      const response = await CreateApplicationRequest(bodyRequest);
      console.log(response);
      setApplication(response); // Retornar el resultado, si es necesario
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred");
      throw error;
    } finally {
      setCreateAppLoading(false);
    }
  };

  return { createApplication, createAppLoading, error, application };
};
