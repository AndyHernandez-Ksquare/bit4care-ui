import { B4CNoFinishedServices } from "@/assets/images/B4CNoFinishedServices";
import { Status } from "@/ts/types/components";
import {
  Box,
  CircularProgress,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import { B4CClientServiceCard } from "../B4CClientServiceCard/B4CClientServiceCard";
import { useGetAllApplications } from "@/context/api/hooks/UseGetAllClientApplication";

export const B4CInactiveServices = () => {
  const { applications, isLoading, error } =
    useGetAllApplications("sdfsdfsdfsdf");

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
      {error ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h4" color="error">
            Ocurrió un error
          </Typography>
          <Typography variant="body1">
            No pudimos cargar los servicios activos. Por favor, intenta
            nuevamente más tarde.
          </Typography>
        </Box>
      ) : isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 32 }}
        >
          <CircularProgress />
        </Box>
      ) : applications && applications.length > 0 ? (
        <Grid
          container
          spacing={2} // Espaciado entre las tarjetas
          sx={{
            width: "100%", // Ancho máximo del grid
            margin: "0 auto", // Centrado del grid
            paddingInline: 0,
          }}
        >
          {applications.map(
            ({ id, address, status, description, patient_name }, index) => (
              <Grid
                size={{ xs: 12, desktop: 6 }}
                key={`active-service-grid-${index}`}
              >
                <B4CClientServiceCard
                  key={`${id}-${index}`}
                  id={id}
                  carerName={patient_name}
                  address={address}
                  service={description}
                  status={status as Status}
                />
              </Grid>
            ),
          )}
        </Grid>
      ) : (
        <>
          <Typography variant="h4">
            Aun no tienes servicios finalizados
          </Typography>
          <Typography variant="body1">
            Completa tu primer Servicio para que pueda aparecer en tu archivo de
            Servicios. Estos se eliminarán después de un año.
          </Typography>
          <B4CNoFinishedServices />
        </>
      )}
      ;
    </Box>
  );
};
