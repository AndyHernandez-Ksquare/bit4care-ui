import { Box, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { B4CClientServiceCard } from "../B4CClientServiceCard/B4CClientServiceCard";
import { Status } from "@/ts/types/components";
import { B4CNoActiveServices } from "@/assets/images/B4CNoActiveServices";
import { colorPalette } from "@/style/partials/colorPalette";
import { useGetAllApplications } from "@/context/api/hooks/UseGetAllClientApplication";

export const B4CClientActiveServices = () => {
  const { applications, isLoading } = useGetAllApplications();

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
      {applications && applications.length > 0 ? (
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
      ) : isLoading ? (
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
          <Typography variant="h4">Aun no tienes servicios activos</Typography>
          <Typography variant="body1">
            Da click en el botón para crear una nueva solicitud
          </Typography>
          <B4CNoActiveServices />
          <Link
            to="/colaborators/profile&settings"
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
