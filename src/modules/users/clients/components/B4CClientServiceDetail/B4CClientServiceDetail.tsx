import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Size } from "@/ts/enums";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";
import { useState } from "react";
import map from "@/assets/images/hero_maps_static_api.png";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CTextfield } from "@/components/B4CTextfield";

interface B4CClientServiceDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B4CClientServiceDetail = ({
  isOpen,
  onClose,
}: B4CClientServiceDetailProps) => {
  const [reclaim, setReclaim] = useState<boolean>(false);

  const handleRejecConfirmation = () => {
    setReclaim(!reclaim);
  };

  return (
    <B4CModal open={isOpen} onClose={onClose}>
      {!reclaim && (
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

            <B4CButton
              fullWidth
              size={Size.Small}
              label="Confirmar y liberar pago completo"
              sx={{ backgroundColor: colorPalette.success }}
            />
            <B4CButton
              fullWidth
              size={Size.Small}
              label="Presentar problema con servicio"
              onClick={handleRejecConfirmation}
            />
          </Grid>
        </Grid>
      )}
      {reclaim && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "50vw",
          }}
        >
          <Typography variant="h4">Cuéntanos lo que pasó</Typography>

          <B4CTextfield
            isMultiline
            placeholder="Escribe y detalla las razones por las que no estás de acuerdo en liberar el pago."
          />

          <B4CButton
            fullWidth
            size={Size.Small}
            label="Enviar queja al administrador"
            onClick={handleRejecConfirmation}
          />
        </Box>
      )}
    </B4CModal>
  );
};
