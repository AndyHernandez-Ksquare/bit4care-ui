import { CreateClientService } from "@/services/clientServices/ClientServices";
import { CreateClient } from "@/ts/types/api/client";
import { useState } from "react"; // Asegúrate de ajustar la ruta según tu estructura

export const useCreateClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [client, setClient] = useState<CreateClient | null>(null);

  const createClient = async (requestBody: CreateClient) => {
    setLoading(true);
    setError(null);
    try {
      const response = await CreateClientService(requestBody);
      setClient(response);
      return response; // Retornar el cliente creado, si es necesario
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred");
      throw err; // Relanzar el error si quieres manejarlo fuera del hook
    } finally {
      setLoading(false);
    }
  };

  return { createClient, loading, error, client };
};
