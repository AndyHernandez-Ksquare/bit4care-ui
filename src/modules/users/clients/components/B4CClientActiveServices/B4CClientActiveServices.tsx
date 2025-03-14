import {
  Box,
  CircularProgress,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { B4CClientServiceCard } from "../B4CClientServiceCard/B4CClientServiceCard";
import { Status } from "@/ts/types/components";
import { B4CNoActiveServices } from "@/assets/images/B4CNoActiveServices";
import { colorPalette } from "@/style/partials/colorPalette";
import { useGetAllApplications } from "@/context/api/hooks/application-requests/useGetAllApplications";

export const B4CClientActiveServices = () => {
  const { applications, isLoading, error } = useGetAllApplications("pending");

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
            (
              {
                id,
                address,
                status,
                description,
                carerId,
                carer_speciality,
                start_date,
                end_date,
                amount,
                carer,
              },
              index,
            ) => (
              <Grid
                size={{ xs: 12, desktop: 6 }}
                key={`active-service-grid-${index}`}
              >
                <B4CClientServiceCard
                  carerId={carerId}
                  carerDescription={carer?.description}
                  carerSpecialty={carer_speciality}
                  key={`active-service-${index}`}
                  id={id}
                  startDate={start_date}
                  endDate={end_date}
                  carerName={carer?.User.name}
                  address={address}
                  service={description}
                  status={status as Status}
                  isAssigned={!!carer}
                  amount={amount}
                />
              </Grid>
            ),
          )}
        </Grid>
      ) : (
        <>
          <Typography variant="h4">Aun no tienes servicios activos</Typography>
          <Typography variant="body1">
            Da click en el botón para crear una nueva solicitud
          </Typography>
          <B4CNoActiveServices />
          <Link
            to="/cliente/mis-servicios/nueva-solicitud"
            style={{
              backgroundColor: colorPalette.primary,
              paddingBlock: "1rem",
              paddingInline: "5rem",
              borderRadius: "8px",
              color: colorPalette.white,
              textDecoration: "none",
            }}
          >
            <Typography variant="body-normal">
              Hacer una nueva solicitud
            </Typography>
          </Link>
        </>
      )}
    </Box>
  );
};
