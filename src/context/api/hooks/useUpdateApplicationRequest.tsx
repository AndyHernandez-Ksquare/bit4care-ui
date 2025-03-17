import { useState } from "react";
import {
  CreateAppReq,
  GetAllApplication,
} from "@/ts/types/api/applicationRequest";
import { UpdateApplicationRequest } from "@/services/applicationRequestServices/ApplicationRequestServices";

export const useUpdateApplicationRequest = () => {
  const [updateAppLoading, setUpdateAppLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [application, setApplication] = useState<GetAllApplication | null>(
    null,
  );

  const updateApplication = async (
    applicationId: string,
    bodyRequest: CreateAppReq,
  ) => {
    setUpdateAppLoading(true);
    try {
      const response = await UpdateApplicationRequest(
        applicationId,
        bodyRequest,
      );
      console.log(response);
      setApplication(response); // Retornar el resultado, si es necesario
    } catch (err) {
      console.log(err);
      setError((err as Error).message || "An unexpected error occurred");
      throw error;
    } finally {
      setUpdateAppLoading(false);
    }
  };

  return { updateApplication, updateAppLoading, error, application };
};
