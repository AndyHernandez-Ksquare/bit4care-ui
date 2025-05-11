import { CreateConnectedAccount } from "@/services/stripeServices/stripeServices";
import { useState } from "react";

export const useCreateConnectedAccount = () => {
  const [accountLink, setAccountLink] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createAccount = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await CreateConnectedAccount();
      if (response) {
        setAccountLink(response.url); // Asumiendo que la respuesta contiene una URL
      }
    } catch (err) {
      setError("Error creating connected account");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { accountLink, createAccount, loading, error };
};
