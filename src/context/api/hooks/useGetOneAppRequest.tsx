import { useState, useEffect } from "react";
import { GetOneApplication } from "@/ts/types/api/applicationRequest";
import { GetOneAppRequest } from "@/services/applicationRequestServices/ApplicationRequestServices";

export const useGetOneAppRequest = (appRequestId: string | undefined) => {
  const [data, setData] = useState<GetOneApplication | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!appRequestId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await GetOneAppRequest(appRequestId);
        setData(result);
      } catch (err) {
        setError("Error al obtener la solicitud");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [appRequestId]); // Se ejecuta cuando cambia el ID

  return { data, loading, error };
};
