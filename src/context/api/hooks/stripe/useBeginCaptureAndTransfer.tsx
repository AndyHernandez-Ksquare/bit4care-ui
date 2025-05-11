import { BeginCaptureAndTransfer } from "@/services/stripeServices/stripeServices";
import { useState } from "react";

export const useBeginCaptureAndTransfer = (appRequestId: number) => {
  const [result, setResult] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const beginCaptureAndTransfer = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await BeginCaptureAndTransfer(appRequestId);
      if (response) {
        setResult(response);
      }
    } catch (err) {
      setError("Error beginning capture and transfer");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { result, beginCaptureAndTransfer, loading, error };
};
