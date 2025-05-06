import { CreatePaymentIntentService } from "@/services/stripeServices/stripeServices";
import { CreatePaymentIntent } from "@/ts/types/api/stripe";
import { useState } from "react";

export const useCreatePaymentIntent = (appRequestId: number) => {
  const [paymentIntent, setPaymentIntent] =
    useState<CreatePaymentIntent | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createPaymentIntent = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await CreatePaymentIntentService(appRequestId);
      if (response) {
        console.log("Payment Intent Response:", response);
        setPaymentIntent(response);
      }
    } catch (err) {
      setError("Error creating payment intent");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { paymentIntent, createPaymentIntent, loading, error };
};
