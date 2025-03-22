import { GetPendingToAproveCarers } from "@/services/careerServices/CareerServices";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { useState, useEffect } from "react";

export const pendingToAproveCarers = () => {
  const [pendingCarers, setPendingCarers] = useState<GetOneCarer[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        const data = await GetPendingToAproveCarers();
        setPendingCarers(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return { pendingCarers, isLoading, error };
};
