import { useState, useEffect, useCallback } from "react";
import { AdminClientList } from "@/ts/types/api/client/AdminClientList.type"; // ← ajusta la ruta
import { AdminGetClientService } from "@/services/clientServices/ClientServices";

export function useAdminClientList() {
  const [data, setData] = useState<AdminClientList[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await AdminGetClientService();
      setData(result);
    } catch (err: any) {
      setError(err.message || "Error fetching client list");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  return {
    data,
    loading,
    error,
    refetch: fetchClients,
  };
}
