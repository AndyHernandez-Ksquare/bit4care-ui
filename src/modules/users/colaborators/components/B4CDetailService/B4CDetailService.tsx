import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import map from "@/assets/images/hero_maps_static_api.png";
import { useState } from "react";
import { colorPalette } from "@/style/partials/colorPalette";
import "./B4CDetailService.css";

interface ServiceDetailPage {
  isOpen: boolean;
  onClose: () => void;
}

export const B4CDetailService = () => {
  const [rejectConfirmation, setRejectConfirmation] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleRejecConfirmation = () => {
    setRejectConfirmation(!rejectConfirmation);
  };

  const toggleExpandText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {!rejectConfirmation ? (
        <Grid container spacing={16}>
          <Grid
            size={{ xs: 12 }}
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              padding: "1.5rem",
            }}
          >
            <Grid container display={"flex"} alignItems={"center"}>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                className="header"
                sx={{
                  textAlign: {
                    xs: "center",
                    desktop: "left",
                  },
                }}
              >
                <Avatar sx={{ width: 128, height: 128, mr: 2 }} />
                <Box>
                  <Typography
                    variant="body-large-bold"
                    gutterBottom
                    component={"p"}
                  >
                    Darel Caldwell
                  </Typography>
                  <Typography
                    variant="body-medium"
                    color="textSecondary"
                    component={"p"}
                  >
                    Cuidado de adulto mayor con Alzheimer
                  </Typography>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                display={"flex"}
                flexDirection={"column"}
              >
                <Typography
                  variant="body-normal"
                  sx={{
                    maxHeight: isExpanded ? "none" : "5.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: isExpanded ? "none" : 4,
                    WebkitBoxOrient: "vertical",
                    transition: "WebkitLineClamp 0.5s ease",
                    textWrap: "pretty",
                  }}
                >
                  El paciente es mi papá. Él tiene problemas para recordar
                  cosas, entonces requiere a un cuidador/a que cuente con
                  técnicas de comunicación efectiva. De preferencia busco a
                  alguien con un perfil con experiencia en pacientes con
                  enfermedades neurodegenerativas. El horario es de 9 a 2 de la
                  tarde. Me gustaría que el cuidador/a tenga experiencia en el
                  uso de silla de ruedas, ya que mi papá la necesita para
                  movilizarse en casa. También es importante que tenga
                  conocimientos básicos de primeros auxilios y RCP. Si tienes
                  experiencia en el cuidado de pacientes con Alzheimer, ¡eres la
                  persona que estamos buscando!
                </Typography>
                <Typography
                  variant="body-normal"
                  sx={{
                    cursor: "pointer",
                    color: "primary.main",
                    display: "inline-block",
                    marginLeft: 0,
                    marginTop: "0.25rem",
                    textAlign: "right",
                  }}
                  onClick={toggleExpandText}
                >
                  {isExpanded ? "Ver menos" : "Ver más"}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16} display={"flex"} alignItems={"center"}>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocationOnIcon
                  fontSize="small"
                  sx={{
                    marginRight: "0.35rem",
                    color: colorPalette.primary,
                  }}
                />
                <Typography variant="body-normal">
                  Colonia Los Álamos, Benito Juárez CDMX. CP: 05040
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <PaymentsIcon
                  fontSize="small"
                  sx={{
                    marginRight: "0.35rem",
                    color: colorPalette.primary,
                  }}
                />
                <Typography variant="body-normal">$8100</Typography>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <AccessTimeFilledIcon
                  fontSize="small"
                  sx={{
                    marginRight: "0.35rem",
                    color: colorPalette.primary,
                  }}
                />
                <Typography variant="body-normal">{`5 horas`}</Typography>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CalendarMonthIcon
                  fontSize="small"
                  sx={{
                    marginRight: "0.35rem",
                    color: colorPalette.primary,
                  }}
                />
                <Typography variant="body-normal">
                  Lunes, 9 de abril - Viernes, 13 de abril de 2024
                </Typography>
              </Grid>
            </Grid>
            <img
              src={map}
              alt="mock data del servicio google maps"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />

            <B4CButton
              fullWidth
              size={Size.Small}
              label="Aceptar solicitud"
              sx={{
                textWrap: "nowrap",
              }}
            />
            <B4CButton
              fullWidth
              size={Size.Small}
              label="Rechazar solicitud"
              sx={{
                backgroundColor: colorPalette.error,
                textWrap: "nowrap",
              }}
              onClick={handleRejecConfirmation}
            />
          </Grid>
        </Grid>
      ) : (
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
            <Typography variant="h4">¿Estás seguro?</Typography>
            <Typography variant="body-normal">
              Este cliente escogió tu perfil porque te consideró adecuado para
              el trabajo.
            </Typography>

            <B4CButton
              fullWidth
              size={Size.Small}
              label="Continuar considerando"
              onClick={handleRejecConfirmation}
              sx={{
                textWrap: "nowrap",
              }}
            />
            <B4CButton
              fullWidth
              size={Size.Small}
              label="Rechazar solicitud"
              sx={{
                backgroundColor: colorPalette.error,
                textWrap: "nowrap",
              }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
