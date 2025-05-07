import { useState, useEffect, useCallback } from "react";
import { FileUploadResponse } from "@/ts/types/api/file";
import { GetPresignedUrlByUser } from "@/services/fileServices/FileServices";

export function useFileUrlsByUser(carerId: number | null) {
  const [data, setData] = useState<FileUploadResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUrls = useCallback(async () => {
    if (carerId === null) {
      setData(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const urls = await GetPresignedUrlByUser(carerId);
      setData(urls);
    } catch (err: any) {
      setError(err.message || "Error fetching file URLs");
    } finally {
      setLoading(false);
    }
  }, [carerId]);

  useEffect(() => {
    fetchUrls();
  }, [fetchUrls]);

  return { data, loading, error, refetch: fetchUrls };
}
