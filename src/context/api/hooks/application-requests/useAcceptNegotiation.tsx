import { useState } from "react";
import { AxiosError } from "axios";
import { AcceptNegotiation } from "@/services/applicationRequestServices/ApplicationRequestServices"; // Ajusta la ruta según corresponda
import { Negotiation } from "@/ts/types/api/applicationRequest";

export const useAcceptNegotiation = () => {
  const [acceptedNegotiation, setAcceptedNegotiation] =
    useState<Negotiation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const acceptNegotiation = async (id: string): Promise<Negotiation | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await AcceptNegotiation(id);
      setAcceptedNegotiation(result);
      return result;
    } catch (err: unknown) {
      let errorMessage = "Error al aceptar la negociación";
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
    acceptedNegotiation,
    isLoading,
    error,
    acceptNegotiation,
  };
};
