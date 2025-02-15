import { useState } from "react";
import {
  CreateAppReq,
  GetAllApplication,
} from "@/ts/types/api/applicationRequest";
import { CreateApplicationRequest } from "@/services/applicationRequestServices/ApplicationRequestServices";

export const useCreateApplicationRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [application, setApplication] = useState<GetAllApplication | null>(
    null,
  );

  const createApplication = async (bodyRequest: CreateAppReq) => {
    setLoading(true);
    try {
      const response = await CreateApplicationRequest(bodyRequest);
      setApplication(response); // Retornar el resultado, si es necesario
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { createApplication, loading, error, application };
};
