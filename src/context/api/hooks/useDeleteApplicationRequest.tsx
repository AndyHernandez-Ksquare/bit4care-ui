import { DeleteApplicationRequest } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { ApiClientContext } from "../apiClientContext";

export const useDeleteApplicationRequest = () => {
  const context = useContext(ApiClientContext);
  if (!context)
    throw new Error(
      "useDeleteApplicationRequest must be used within a ClientApiProvider",
    );

  const { setLoading } = context; // Usamos el loading global
  const [error, setError] = useState<string | null>(null);

  const deleteApplicationRequest = async (appRequestId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await DeleteApplicationRequest(appRequestId);
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message);
      throw axiosError;
    } finally {
      setLoading(false);
    }
  };

  return { deleteApplicationRequest, error };
};
