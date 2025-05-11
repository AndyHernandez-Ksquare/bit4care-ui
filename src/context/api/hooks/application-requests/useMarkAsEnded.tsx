import { useState } from "react";
import { AxiosError } from "axios";
import { MarkAsEnded } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { GetOneApplication } from "@/ts/types/api/applicationRequest";

export const useMarkAsEnded = () => {
  const [application, setApplication] = useState<GetOneApplication | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const markAsEnded = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await MarkAsEnded(id);
      setApplication(data);
    } catch (err: unknown) {
      let errorMessage = "Error realizando la negociación";
      if (err instanceof AxiosError && err.response) {
        errorMessage = err.response.data.message || errorMessage;
      }
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    application,
    isLoading,
    error,
    markAsEnded,
  };
};
