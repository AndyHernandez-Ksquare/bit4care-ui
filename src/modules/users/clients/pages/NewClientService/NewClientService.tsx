import { useEffect, useState } from "react";
import { B4CColaboradorDetail } from "../ClientsCollaboratorDetail/B4CColaboradorDetail";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { MockGetAllCarerRequests } from "@/services/careerServices/CareerMockData";
import { ClientsReservationDetail } from "../ClientsReservationDetail";

export const NewClientService = () => {
  const [serviceStep, setServiceStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [provider, setProvider] = useState<GetOneCarer | null>(null);

  // Simula la obtención de datos
  const fetchProvider = async (providerId: number) => {
    const data = await MockGetAllCarerRequests();
    const singleProvider = data.find((provider) => provider.id === providerId);
    if (singleProvider) {
      setProvider(singleProvider);
    } else {
      setProvider(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const careerId = queryParams.get("careerId");
    if (careerId) {
      fetchProvider(parseInt(careerId));
    }
  }, [location.search]);

  return (
    <>
      {serviceStep === 0 && (
        <B4CColaboradorDetail
          provider={provider}
          loading={loading}
          setServiceStep={setServiceStep}
        />
      )}
      {serviceStep === 1 && (
        <ClientsReservationDetail
          setServiceStep={setServiceStep}
          provider={provider}
        />
      )}
    </>
  );
};
