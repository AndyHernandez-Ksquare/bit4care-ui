import { useState, useEffect } from "react";
import { GetOneApplication } from "@/ts/types/api/applicationRequest";
import { GetCarerRequests } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { AxiosError } from "axios";

export const useGetCarerApplications = () => {
  const [carerApplications, setCarerApplications] = useState<
    GetOneApplication[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPendingRequests = async () => {
      setLoading(true);
      try {
        const data = await GetCarerRequests();
        console.log(data);
        setCarerApplications(data || []);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || "Error al obtener las solicitudes");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingRequests();
  }, []);

  return { carerApplications, loading, error };
};
