import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { GetSelfCareer } from "@/services/careerServices/CareerServices";

export const useGetSelfCareer = () => {
  const [data, setData] = useState<GetOneCarer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSelf = async () => {
      setLoading(true);
      try {
        const result = await GetSelfCareer();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as AxiosError);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSelf();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
};
