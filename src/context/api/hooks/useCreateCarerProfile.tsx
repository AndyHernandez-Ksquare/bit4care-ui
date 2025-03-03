import { CreateCarerProfile } from "@/services/careerServices/CareerServices";
import {
  NewCareProfileRequest,
  NewCarerProfileResponse,
} from "@/ts/types/api/carer/CreateCarerProfile.type";
import { useState } from "react"; // Asegúrate de ajustar la ruta según tu estructura

export const useCreateCarerProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [carer, setCarer] = useState<NewCarerProfileResponse | null>(null);

  const createCarerProfile = async (requestBody: NewCareProfileRequest) => {
    setLoading(true);
    try {
      const response = await CreateCarerProfile(requestBody);
      if (response) {
        setCarer(response);
      }

      return response; // Retornar el cliente creado, si es necesario
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred");
      throw err; // Relanzar el error si quieres manejarlo fuera del hook
    } finally {
      setLoading(false);
    }
  };

  return { createCarerProfile, loading, error, carer };
};
