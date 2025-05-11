import { useState } from "react";
import { AxiosError } from "axios";
import { NewCarerReviewReq } from "@/ts/types/api/carer/NewCarerReviewReq.type";
import { NewCarerReview } from "@/services/careerServices/CareerServices";
// Ajusta la ruta de tu tipo

export const useNewCarerReview = () => {
  const [result, setResult] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createReview = async (bodyRequest: NewCarerReviewReq) => {
    setLoading(true);
    setError(null);
    try {
      const response = await NewCarerReview(bodyRequest);
      setResult(response);
      return response;
    } catch (err: unknown) {
      const axiosErr = err as AxiosError;
      const message = axiosErr.message;
      ("Error al enviar la reseña");
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createReview, result, loading, error };
};
