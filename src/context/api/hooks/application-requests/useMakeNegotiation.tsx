import { useState } from "react";
import { AxiosError } from "axios";
import { MakeNegotiation } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { Negotiation } from "@/ts/types/api/applicationRequest";
import { MakeNegotiationRequestBody } from "@/ts/types/api/applicationRequest/Negotiation.type";

export const useMakeNegotiation = () => {
  const [negotiation, setNegotiation] = useState<Negotiation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const makeNegotiationHandler = async (
    id: string,
    requestBody: MakeNegotiationRequestBody,
  ): Promise<Negotiation | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await MakeNegotiation(id, requestBody);
      setNegotiation(data);
      return data;
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
    negotiation,
    isLoading,
    error,
    makeNegotiation: makeNegotiationHandler,
  };
};
