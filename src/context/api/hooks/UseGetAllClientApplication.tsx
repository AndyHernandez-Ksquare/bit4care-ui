import { GetAllApplicationRequests } from "@/services/applicationRequestServices/ApplicationRequestServices";
import { GetAllApplication } from "@/ts/types/api/applicationRequest";
import { useState, useEffect } from "react";

export const useGetAllApplications = () => {
  const [applications, setApplications] = useState<GetAllApplication[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        const data = await GetAllApplicationRequests();
        setApplications(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return { applications, isLoading, error };
};
