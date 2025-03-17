import { useEffect, useState } from "react";
import { B4CColaboradorDetail } from "../ClientsCollaboratorDetail/B4CColaboradorDetail";
import { ClientsReservationDetail } from "../ClientsReservationDetail";
import { useGetOneCareer } from "@/context/api/hooks/useGetOneCareer";
import { useServiceData } from "../../context/NewServiceContext";

export const NewClientService = () => {
  const [serviceStep, setServiceStep] = useState<number>(0);

  const queryParams = new URLSearchParams(location.search);
  const careerId = queryParams.get("careerId");

  const { data, isLoading } = useGetOneCareer(parseInt(careerId as string));
  const { setProvider } = useServiceData();

  useEffect(() => {
    setProvider(data);
  }, [data, setProvider]);

  return (
    <>
      {serviceStep === 0 && (
        <B4CColaboradorDetail
          loading={isLoading}
          setServiceStep={setServiceStep}
        />
      )}
      {serviceStep === 1 && (
        <ClientsReservationDetail setServiceStep={setServiceStep} />
      )}
    </>
  );
};
