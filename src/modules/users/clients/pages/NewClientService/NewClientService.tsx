import { useEffect, useState } from "react";
import { B4CColaboradorDetail } from "../ClientsCollaboratorDetail/B4CColaboradorDetail";
import { MockGetAllCarerRequests } from "@/services/careerServices/CareerMockData";
import { ClientsReservationDetail } from "../ClientsReservationDetail";
import { useServiceData } from "../../context/NewServiceContext";

export const NewClientService = () => {
  const [serviceStep, setServiceStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const { setProvider } = useServiceData();

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
          loading={loading}
          setServiceStep={setServiceStep}
        />
      )}
      {serviceStep === 1 && (
        <ClientsReservationDetail setServiceStep={setServiceStep} />
      )}
    </>
  );
};
