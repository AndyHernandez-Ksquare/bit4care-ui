import { StripePublisheableKeyService } from "@/services/stripeServices/stripeServices";
import { useState, useEffect } from "react";

export const useStripePublishableKey = () => {
  const [publishableKey, setPublishableKey] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublishableKey = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await StripePublisheableKeyService();
        if (response) {
          setPublishableKey(response.publishableKey); // Asumiendo que la respuesta contiene el campo "key"
        }
      } catch (err) {
        setError("Error fetching publishable key");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishableKey();
  }, []);

  return { publishableKey, loading, error };
};
