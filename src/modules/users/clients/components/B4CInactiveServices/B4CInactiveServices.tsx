import { B4CNoFinishedServices } from "@/assets/images/B4CNoFinishedServices";
import { Status } from "@/ts/types/components";
import { Box, CircularProgress, Typography } from "@mui/material";
import { B4CClientServiceCard } from "../B4CClientServiceCard/B4CClientServiceCard";
import { GetAllApplication } from "@/ts/types/api/applicationRequest";
import { useEffect, useState } from "react";
import { MockGetAllApplicationRequests } from "@/services/applicationRequestServices/ApplicationRequestMockData";

export const B4CInactiveServices = () => {
  const [applications, setApplications] = useState<GetAllApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simula la obtención de datos
  const fetchApplications = async () => {
    const data = await MockGetAllApplicationRequests();
    setApplications(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApplications();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "2rem",
        gap: "2rem",
      }}
    >
      {applications.length > 0 ? (
        applications.map(
          (
            { id, address, time_range, status, description, patient_name },
            index,
          ) => (
            <B4CClientServiceCard
              key={`${id}-${index}`}
              id={id}
              name={patient_name}
              schedule={time_range}
              address={address}
              service={description}
              status={status as Status}
            />
          ),
        )
      ) : loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 32 }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h4">
            Aun no tienes servicios finalizados
          </Typography>
          <Typography variant="body1">
            Completa tu primer Servicio para que pueda aparecer en tu archivo de
            Servicios. Estos se eliminarán después de un año.
          </Typography>
          <B4CNoFinishedServices />)
        </>
      )}
      ;
    </Box>
  );
};
