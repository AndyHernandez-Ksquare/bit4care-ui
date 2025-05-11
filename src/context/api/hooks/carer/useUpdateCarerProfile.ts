import { useState } from "react";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { UpdateCarerProfileDto } from "@/ts/types/api/carer/UpdateCarerProfileDto.type";
import { UpdateSelfCarerProfile } from "@/services/careerServices/CareerServices";

export function useUpdateCarerProfile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateProfile = async (
    body: UpdateCarerProfileDto,
  ): Promise<GetOneCarer | null> => {
    setLoading(true);
    setError(null);
    try {
      const updated = await UpdateSelfCarerProfile(body);
      return updated;
    } catch (e) {
      setError(e as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateProfile, loading, error };
}
