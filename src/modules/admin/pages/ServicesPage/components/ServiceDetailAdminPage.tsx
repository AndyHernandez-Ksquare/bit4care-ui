import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Grid2 as Grid,
  Link,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { colorPalette } from "@/style/partials/colorPalette";
import { useLocation } from "react-router-dom";
import { GetAllApplication } from "@/ts/types/api/applicationRequest";
import { useEffect } from "react";

// Aqui si hay muchos detalles a mejorar, ya le cambie los iconos para que sean los que usamos, los de MUI

export const ServiceDetailAdminPage = () => {
  const { state } = useLocation();
  const application = state?.application;

  if (!application) {
    return (
      <Typography variant="h6" color="error">
        No se encontró la información del servicio.
      </Typography>
    );
  }

  return (
    <>
      <Breadcrumbs separator={<B4CNextIcon />} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/admin/">
          <Typography typography="body-normal">Servicios</Typography>
        </Link>
        <Typography typography="body-normal-bold" color={colorPalette.primary}>
          {application.patient_name}
        </Typography>
      </Breadcrumbs>
      <Grid container spacing={32}>
        {/* Left Section */}
        <Grid
          size={{ xs: 12, desktop: 6 }}
          container
          sx={{ display: "flex", flexDirection: "column", gap: "56px" }}
        >
          <Box
            display="flex"
            alignItems="center"
            mb={2}
            sx={{ flexDirection: "row", gap: "8px" }}
          >
            <Avatar sx={{ width: 128, height: 128, mr: 2 }} />
            <Box>
              <Typography variant="h6">{application.patient_name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {application.description}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body-normal">{application.comments}</Typography>
          <Box
            mb={2}
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <LocationOnIcon
                sx={{
                  color: colorPalette.primary,
                  fontSize: "1.25lh",
                  marginRight: "0.5rem",
                }}
              />
              <Typography variant="body2" color="textSecondary">
                {application.address}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <AttachMoneyIcon
                sx={{
                  color: colorPalette.primary,
                  fontSize: "1.25lh",
                  marginRight: "0.5rem",
                }}
              />
              <Typography variant="body2" color="textSecondary">
                {application.amount}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <CalendarMonthIcon
                sx={{
                  color: colorPalette.primary,
                  fontSize: "1.25lh",
                  marginRight: "0.5rem",
                }}
              />
              <Typography variant="body2" color="textSecondary">
                Lunes, 9 de abril - Viernes, 13 de abril de 2024 (54 horas)
              </Typography>
            </Box>
          </Box>

          {application.carer &&
            application.carer.Complaint &&
            application.carer.Complaint.length && (
              <Box mt={2}>
                <Typography variant="body-small-bold" gutterBottom>
                  ¿Qué sucedió?:{" "}
                </Typography>
                <Typography variant="body-small" color="textSecondary">
                  {application.carer.Complaint[0].description}
                </Typography>
              </Box>
            )}
        </Grid>
        {/* Right Section */}
        <Grid size={{ xs: 12, desktop: 6 }}>
          {application.carer ? (
            <>
              <Box
                display="flex"
                alignItems="center"
                marginBottom="2rem"
                sx={{ flexDirection: "column", gap: "32px" }}
              >
                <Avatar sx={{ width: 128, height: 128, mr: 2 }} />

                <Typography variant="h6">
                  {application.carer.User.name}
                </Typography>
                <Rating
                  value={application.carer.averageStars}
                  readOnly
                  precision={0.5}
                />
                <Typography variant="body2" color="textSecondary">
                  Calificación de 80% en Test de Habilidades
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {application.carer.description}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                marginBottom="2rem"
                sx={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <Typography variant="h5" gutterBottom>
                  {application.amount}
                </Typography>
                {application.carer &&
                  application.carer.Complaint &&
                  application.carer.Complaint.length && (
                    <>
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
                      <B4CButton
                        label="Pagar a cuidador"
                        size={Size.Small}
                        fullWidth
                      />
                    </>
                  )}
              </Box>
            </>
          ) : (
            <p>No hay cuidador</p>
          )}
        </Grid>
      </Grid>
    </>
  );
};
