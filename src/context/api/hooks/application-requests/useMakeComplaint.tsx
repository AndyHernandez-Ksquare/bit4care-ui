import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import { MakeComplaint } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { MakeComplaintReq } from "@/ts/types/api/applicationRequest/MakeComplaint.type";

export const useMakeComplaint = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [complaintResult, setComplaintResult] = useState<unknown>(null);

  const makeComplaint = useCallback(async (body: MakeComplaintReq) => {
    setLoading(true);
    setError(null);
    try {
      const response = await MakeComplaint(body);
      setComplaintResult(response);
      return response;
    } catch (err) {
      const axiosErr = err as AxiosError;
      const message = axiosErr.message || "Error submitting complaint";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    makeComplaint,
    complaintResult,
    loading,
    error,
  };
};
