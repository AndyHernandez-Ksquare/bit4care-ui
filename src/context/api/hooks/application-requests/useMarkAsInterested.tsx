import { useState } from "react";
import { MarkAsInterested } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { AxiosError } from "axios";
import { GetAllApplication } from "@/ts/types/api/applicationRequest";

export const useNotInterested = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applicationInterest, setApplicationInterest] =
    useState<GetAllApplication | null>(null);

  const useMarkAsInterested = async (appRequestId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await MarkAsInterested(appRequestId);
      setApplicationInterest(response);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return { useMarkAsInterested, loading, error, applicationInterest };
};
