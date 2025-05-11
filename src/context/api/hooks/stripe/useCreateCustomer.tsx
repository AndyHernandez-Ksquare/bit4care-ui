import { CreateCustomer } from "@/services/stripeServices/stripeServices";
import { useState } from "react";

export const useCreateCustomer = () => {
  const [customer, setCustomer] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createCustomer = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await CreateCustomer();
      if (response) {
        setCustomer(response);
      }
    } catch (err) {
      setError("Error creating customer");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { customer, createCustomer, loading, error };
};
