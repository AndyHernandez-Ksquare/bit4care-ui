import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";
import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import map from "@/assets/images/hero_maps_static_api.png";
import { useState } from "react";
import { colorPalette } from "@/style/partials/colorPalette";
import "./B4CDetailService.css";

interface ServiceDetailPage {
  isOpen: boolean;
  onClose: () => void;
}

export const B4CDetailService = ({ isOpen, onClose }: ServiceDetailPage) => {
  const [rejectConfirmation, setRejectConfirmation] = useState<boolean>(false);

  const handleRejecConfirmation = () => {
    setRejectConfirmation(!rejectConfirmation);
  };

  return (
    <B4CModal open={isOpen} onClose={onClose}>
      {!rejectConfirmation && (
        <Grid container spacing={16}>
          <Grid
            size={{ xs: 12 }}
            container
            sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Grid container>
              <Grid size={{ xs: 12, desktop: 6 }} className="header">
                <Avatar sx={{ width: 128, height: 128, mr: 2 }} />
                <Box>
                  <Typography variant="h6">Darel Caldwell</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Cuidado de adulto mayor con Alzheimer
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, desktop: 6 }} sx={{ display: "flex" }}>
                <Typography variant="body-normal">
                  El paciente es mi papá. Él tiene problemas para recordar
                  cosas, entonces requiere a un cuidador/a que cuente con
                  técnicas de comunicación efectiva. De preferencia busco a
                  alguien con un perfil con experiencia en pacientes con
                  enfermedades neurodegenerativas.
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid size={{ xs: 12, desktop: 6 }} sx={{ display: "flex" }}>
                <LocationIcons />
                <Typography variant="body-normal">
                  Colonia Los Álamos, Benito Juárez CDMX. CP: 05040
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, desktop: 6 }} sx={{ display: "flex" }}>
                <MoneyIcons />
                <Typography variant="body-normal">$8100</Typography>
              </Grid>
              <Grid size={{ xs: 12, desktop: 6 }} sx={{ display: "flex" }}>
                <ClockIcon />
                <Typography variant="body-normal">{`5 horas`}</Typography>
              </Grid>
              <Grid size={{ xs: 12, desktop: 6 }} sx={{ display: "flex" }}>
                <ClockIcon />
                <Typography variant="body-normal">
                  Lunes, 9 de abril - Viernes, 13 de abril de 2024 (54 horas)
                </Typography>
              </Grid>
            </Grid>
            <img
              src={map}
              alt="moc data del servicio google maps"
              style={{
                width: "100%",
                height: "300px",
              }}
            />

            <B4CButton fullWidth size={Size.Small} label="Aceptar solicitud" />
            <Button
              onClick={handleRejecConfirmation}
              sx={{
                width: "100%",
                backgroundColor: colorPalette.error,
                color: colorPalette.white,
                fontWeight: 700,
                borderRadius: "8px",
                paddingBlock: "14px",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              <Typography variant="body-small-bold">
                Rechazar solicitud
              </Typography>
            </Button>
          </Grid>
        </Grid>
      )}
      {rejectConfirmation && (
        <Grid container spacing={16}>
          <Grid
            size={{ xs: 12 }}
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 128, height: 128, mr: 2 }} />
            <Typography variant="h4">Estas seguro?</Typography>
            <Typography variant="body-normal">
              Este cliente escogio tu perfil porque te consideró adecuado para
              el trabajo.
            </Typography>

            <B4CButton
              fullWidth
              size={Size.Small}
              label="Continuar considerando"
              onClick={handleRejecConfirmation}
            />
            <Button
              sx={{
                backgroundColor: colorPalette.error,
                color: colorPalette.white,
                fontWeight: 700,
                borderRadius: "8px",
                paddingBlock: "14px",
                fontSize: "16px",
                textTransform: "none",
                width: "100%",
              }}
            >
              <Typography variant="body-small-bold">
                Rechazar solicitud
              </Typography>
            </Button>
          </Grid>
        </Grid>
      )}
    </B4CModal>
  );
};
