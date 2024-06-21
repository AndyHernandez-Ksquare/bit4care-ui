import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";
import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import map from "@/assets/images/hero_maps_static_api.png";

import React from "react";
import { colorPalette } from "@/style/partials/colorPalette";

interface IServiceDetailPage {
  isOpen: boolean;
  onClose: () => void;
}

export const B4CDetailService = ({ isOpen, onClose }: IServiceDetailPage) => {
  return (
    <B4CModal open={isOpen} onClose={onClose}>
      <Grid container spacing={16}>
        <Grid
          item
          xs={12}
          container
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ width: 128, height: 128, mr: 2 }} />
              <Box>
                <Typography variant="h6">Darel Caldwell</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Cuidado de adulto mayor con Alzheimer
                </Typography>
              </Box>
            </Box>
            <Box width={"60%"}>
              <Typography variant="body-normal">
                El paciente es mi papá. Él tiene problemas para recordar cosas,
                entonces requiere a un cuidador/a que cuente con técnicas de
                comunicación efectiva. De preferencia busco a alguien con un
                perfil con experiencia en pacientes con enfermedades
                neurodegenerativas.
              </Typography>
            </Box>
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
              <Typography variant="body-normal">$8100</Typography>
            </Grid>
            <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
              <ClockIcon />
              <Typography variant="body-normal">{`5 horas`}</Typography>
            </Grid>
            <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
              <ClockIcon />
              <Typography variant="body-normal">
                Lunes, 9 de abril - Viernes, 13 de abril de 2024 (54 horas)
              </Typography>
            </Grid>
          </Grid>
          <img src={map} alt="moc data del servicio google maps" />

          <B4CButton fullWidth size={Size.Small} label="Aceptar solicitud" />
          <Button
            sx={{
              backgroundColor: colorPalette.error,
              color: colorPalette.white,
              fontWeight: 700,
              borderRadius: "8px",
              paddingBlock: "14px",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Rechazar solicitud
          </Button>
        </Grid>
      </Grid>
    </B4CModal>
  );
};
