import { useState } from "react";
import { MarkAsNotInterested } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { AxiosError } from "axios";

export const useNotInterested = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const markAsNotInterested = async (appRequestId: string) => {
    setLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await MarkAsNotInterested(appRequestId);
      setIsSuccess(true);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return { markAsNotInterested, loading, error, isSuccess };
};
