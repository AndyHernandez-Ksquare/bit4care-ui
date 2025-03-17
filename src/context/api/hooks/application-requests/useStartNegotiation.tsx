import { StartNegotiation } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { Negotiation } from "@/ts/types/api/applicationRequest";
import { NegotiationRequestBody } from "@/ts/types/api/applicationRequest/Negotiation.type";
import { useState, useCallback } from "react";

export const useStartNegotiation = () => {
  const [loading, setLoading] = useState(false);
  const [negotiation, setNegotiation] = useState<Negotiation | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const startNegotiationHook = useCallback(
    async (
      requestBody: NegotiationRequestBody,
    ): Promise<Negotiation | null> => {
      setLoading(true);
      setError(null);
      try {
        const data = await StartNegotiation(requestBody);
        setNegotiation(data);
        return data;
      } catch (err: unknown) {
        console.error("Error starting negotiation:", err);
        setError(err as Error);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    startNegotiation: startNegotiationHook,
    negotiation,
    loading,
    error,
  };
};
