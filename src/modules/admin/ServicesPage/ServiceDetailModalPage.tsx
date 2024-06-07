import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Size } from "@/ts/enums/Size";
import {
  Avatar,
  Box,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";
import React from "react";

interface IServiceDetailModalPage {
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceDetailModalPage = ({
  isOpen,
  onClose,
}: IServiceDetailModalPage) => {
  return (
    <B4CModal open={isOpen} onClose={onClose}>
      <Grid container spacing={16}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          desktop={7}
          container
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar sx={{ width: 128, height: 128, mr: 2 }} />
            <Box>
              <Typography variant="h6">Darel Caldwell</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Cuidado de adulto mayor con Alzheimer
              </Typography>
            </Box>
          </Box>
          <Typography variant="body-normal">
            El paciente es mi papá. Él tiene problemas para recordar cosas,
            entonces requiere a un cuidador/a que cuente con técnicas de
            comunicación efectiva. De preferencia busco a alguien con un perfil
            con experiencia en pacientes con enfermedades neurodegenerativas.
          </Typography>
          <Box
            mb={2}
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <LocationIcons />
              <Typography variant="body2" color="textSecondary">
                Colonia Los Álamos, Benito Juárez CDMX. CP: 05040
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <MoneyIcons />
              <Typography variant="body2" color="textSecondary">
                $8100
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <ClockIcon />
              <Typography variant="body2" color="textSecondary">
                Lunes, 9 de abril - Viernes, 13 de abril de 2024 (54 horas)
              </Typography>
            </Box>
          </Box>

          <Box mt={2}>
            <Typography variant="body-small-bold" gutterBottom>
              ¿Qué sucedió?
            </Typography>
            <Typography variant="body-small" color="textSecondary">
              La enfermera llegó tarde el primer día así que no quisiera pagar 8
              horas ese día, si no menos, como 6. Luego el segundo día llegó
              bien, y el tercero ya no se presentó. En total solo se trabajó 12
              horas de 16.
            </Typography>
          </Box>
        </Grid>
        {/* Right Section */}
        <Grid item xs={12} desktop={5}>
          <Box
            display="flex"
            alignItems="center"
            marginBottom="2rem"
            sx={{ flexDirection: "column", gap: "0.5rem" }}
          >
            <Avatar sx={{ width: 128, height: 128, mr: 2 }} />

            <Typography variant="h6">Concha del Mar Pérez</Typography>
            <Rating value={4} readOnly precision={0.5} />
            <Typography variant="body2" color="textSecondary">
              Calificación de 80% en Test de Habilidades
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Experta en adultos mayores con demencia
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            marginBottom="2rem"
            sx={{ flexDirection: "column", gap: "0.5rem" }}
          >
            <Typography variant="h5" gutterBottom>
              $8100
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                label="Horas"
                type="number"
                variant="outlined"
                size="small"
                sx={{ maxWidth: 100, mr: 2 }}
              />
              <Typography variant="body2">
                Se le pagaría al cuidador $4000
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" mb={2}>
              El resto se le devolverá al Cliente.
            </Typography>
            <B4CButton label="Pagar a cuidador" size={Size.Small} fullWidth />
          </Box>
        </Grid>
      </Grid>
    </B4CModal>
  );
};
