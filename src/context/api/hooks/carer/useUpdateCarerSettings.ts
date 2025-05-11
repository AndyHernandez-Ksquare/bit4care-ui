import { useState } from "react";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { UpdateCarerProfileSettingsDto } from "@/ts/types/api/carer/UpdateCarerProfileSettingsDto.type";
import { UpdateSelfCarerSettings } from "@/services/careerServices/CareerServices";

export function useUpdateCarerSettings() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateSettings = async (
    body: UpdateCarerProfileSettingsDto,
  ): Promise<GetOneCarer | null> => {
    setLoading(true);
    setError(null);
    try {
      const updated = await UpdateSelfCarerSettings(body);
      return updated;
    } catch (e) {
      setError(e as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateSettings, loading, error };
}
