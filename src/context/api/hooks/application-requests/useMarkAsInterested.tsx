import { useState } from "react";
import { MarkAsInterested } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { AxiosError } from "axios";
import { GetAllApplication } from "@/ts/types/api/applicationRequest";

export const useMarkAsInterested = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applicationInterest, setApplicationInterest] =
    useState<GetAllApplication | null>(null);

  const markAsInterested = async (appRequestId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await MarkAsInterested(appRequestId);
      console.log(response);
      setApplicationInterest(response);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return { markAsInterested, loading, error, applicationInterest };
};
