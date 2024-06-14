import { B4CNoFinishedServices } from "@/assets/images/B4CNoFinishedServices";
import { Box, Typography } from "@mui/material";
import React from "react";

export const InactiveServices = () => {
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
      <Typography variant="h4">Aun no tienes servicios finalizados</Typography>
      <Typography variant="body1">
        Completa tu primer Servicio para que pueda aparecer en tu archivo de
        Servicios. Estos se eliminarán después de un año.
      </Typography>
      <B4CNoFinishedServices />
    </Box>
  );
};
