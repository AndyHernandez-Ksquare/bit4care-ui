import { B4CButton } from "@/components/B4CButton";
import { pendingToAproveCarers } from "@/context/api/hooks/carer/pendingToAproveCarers";
import { spacings } from "@/style/partials/spacings";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PendingPage = () => {
  // Utilizamos el custom hook para obtener la lista de carers pendientes
  const { pendingCarers, isLoading, error } = pendingToAproveCarers();
  const navigate = useNavigate();

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6">Cargando...</Typography>
      </Box>
    );
  }

  // Mostrar un mensaje de error en caso de que ocurra alguno
  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" color="error">
          Error al cargar los carers pendientes.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={4}>
      {pendingCarers?.map((carer, index) => (
        <Grid
          gap={4}
          size={{ xs: 12, tablet: 6, desktop: 4 }}
          key={`${carer.User.name}-${index}`}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderRadius: "8px",
              boxShadow: "0px 8px 30px 0px #0000001F",
              paddingBlock: spacings.spacing4,
              paddingInline: spacings.spacing2,
              overflow: "hidden",
              gap: "2vh",
            }}
          >
            <Box
              display={"inherit"}
              flexDirection={"inherit"}
              sx={{ gap: ".8vh", alignItems: "center" }}
            >
              <Avatar
                src={""}
                alt={`${carer.User.name}`}
                sx={{
                  width: { xs: 64, desktop: 128 },
                  height: { xs: 64, desktop: 128 },
                }}
              />
              <Typography variant="body-small-bold">
                {carer.User.name}
              </Typography>
              <Typography variant="body-small" sx={{ fontSize: "14px" }}>
                {carer.speciality || "Sin especialidad"}
              </Typography>
              <Typography variant="body-small" sx={{ fontSize: "14px" }}>
                {carer.User.email}
              </Typography>
            </Box>
            <B4CButton
              label="Revisar solicitud"
              size={Size.Small}
              onClick={() =>
                navigate(`/admin/colaboradores/solicitud?id=${carer.id}`)
              }
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
