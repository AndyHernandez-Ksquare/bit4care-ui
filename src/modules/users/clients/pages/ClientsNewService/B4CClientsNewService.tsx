import { PageLayout } from "@/components/B4CPageLayout";
import { Box, Typography } from "@mui/material";

export const B4CClientsNewService = () => {
  return (
    <PageLayout title="Crear nueva solicitud">
      <Typography variant="body-normal" color={"#575F6E"}>
        Empieza seleccionando las fechas de inicio y final para tu próximo
        servicio.
      </Typography>
      <Box sx={{ marginTop: "32px" }}></Box>
    </PageLayout>
  );
};
