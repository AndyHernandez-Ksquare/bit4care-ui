import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CButton } from "@/components/B4CButton";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";
import React from "react";

export const ColaboratorsServicesCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        border: `1px solid ${colorPalette.grey5}`,
        borderRadius: "20px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Avatar sx={{ width: "64px", height: "64px" }} />
          <Box>
            <Typography variant="h5" sx={{ color: colorPalette.primary }}>
              Armando Perez Hernandez
            </Typography>
            <Typography
              variant="body-normal"
              sx={{ color: colorPalette.grey4 }}
            >
              Cuidado de adulto mayor con Alzheimer
            </Typography>
          </Box>
        </Box>
        <B4CTag label="Solicitado"></B4CTag>
      </Box>
      <Grid container>
        <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
          <LocationIcons />
          <Typography variant="body-normal">
            Colonia Los Álamos, Benito Juárez CDMX. CP: 05040
          </Typography>
        </Grid>
        <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
          <MoneyIcons />
          <Typography variant="body-normal">$8100 ($150/h)</Typography>
        </Grid>
        <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
          <ClockIcon />
          <Typography variant="body-normal">5 días (56 horas)</Typography>
        </Grid>
        <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
          <ClockIcon />
          <Typography variant="body-normal">9AM-6PM</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginInline: 0,
          alignItems: "left",
        }}
      >
        <B4CTag label="Acompa;amiento a citas medicas" />
        <B4CTag label="Acompa;amiento a citas medicas" />
        <B4CTag label="Acompa;amiento a citas medicas" />
      </Box>
      <B4CButton size={Size.Small} label="Ver detalles"></B4CButton>
    </Box>
  );
};
