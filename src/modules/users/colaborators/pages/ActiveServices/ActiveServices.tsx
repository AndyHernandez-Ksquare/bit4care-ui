import { Box, Typography } from "@mui/material";
import { B4CNoActiveServices } from "@/assets/images/B4CNoActiveServices";
import React from "react";
import { Link } from "react-router-dom";
import { colorPalette } from "@/style/partials/colorPalette";
import { ColaboratorsServicesCard } from "../../components/ColaboratorsServicesCard/ColaboratorsServicesCard";

export const ActiveServices = () => {
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
      <ColaboratorsServicesCard />
      <Typography variant="h4">Aun no tienes servicios activos</Typography>
      <Typography variant="body1">
        Espera a que algún cliente te escoja para un servicio. Ajusta tu perfil
        y disponibilidad
      </Typography>
      <B4CNoActiveServices />
      <Link
        to={"/colaborators/profile&settings"}
        style={{
          backgroundColor: colorPalette.primary,
          paddingBlock: "1rem",
          paddingInline: "5rem",
          borderRadius: "8px",
          color: colorPalette.white,
          textDecoration: "none",
        }}
      >
        <Typography variant="body-normal">Ir a perfil y ajustes</Typography>
      </Link>
    </Box>
  );
};
