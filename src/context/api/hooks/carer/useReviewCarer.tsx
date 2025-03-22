import { useState } from "react";
import { AxiosError } from "axios";
import { ReviewCarer } from "@/services/careerServices/CareerServices";
import {
  EvaluateCarerRequest,
  NewCarerProfileResponse,
} from "@/ts/types/api/carer/CreateCarerProfile.type";

export const useReviewCarer = () => {
  const [data, setData] = useState<NewCarerProfileResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const reviewCarer = async (
    bodyRequest: EvaluateCarerRequest,
    carerId: number,
  ): Promise<NewCarerProfileResponse | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await ReviewCarer(bodyRequest, carerId);
      setData(response);
      return response;
    } catch (err: unknown) {
      let errorMessage = "Ocurrió un error al revisar el carer.";
      if (err instanceof AxiosError && err.response) {
        // Si el error viene de Axios, se extrae el mensaje del servidor
        errorMessage =
          (err.response.data as { message?: string }).message || errorMessage;
      }
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { reviewCarer, data, isLoading, error };
};
