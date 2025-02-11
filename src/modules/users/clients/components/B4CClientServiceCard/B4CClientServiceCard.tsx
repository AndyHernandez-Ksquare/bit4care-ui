import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { color } from "@/ts/types/shared/colors";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import { B4CClientServicesCardProps } from "@/ts/types/components/B4CClientServicesCard.type";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { spacings } from "@/style/partials/spacings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

export const B4CClientServiceCard = ({
  id,
  carerName,
  address,
  service,
  status,
  isAssigned = false,
}: B4CClientServicesCardProps) => {
  const statusTagInfo: { [key: string]: { color: string; label: string } } = {
    pending: { color: "warning", label: "Solicitado" },
    realizado: { color: "success", label: "Realizado" },
    accepted: { color: "success", label: "Aceptado" },
    "no realizado": { color: "error", label: "No Realizado" },
  };

  // Convertir `status` a string y en minúsculas
  const normalizedStatus = String(status).toLowerCase();

  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleEdit = () => {
    navigate(`/cliente/mis-servicios/${id}`); // Redirige al formulario de edición con el ID
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "615px",
          border: `1px solid ${colorPalette.grey5}`,
          borderRadius: "20px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          backgroundColor: colorPalette.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", desktop: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "start", desktop: "center" },
            gap: { xs: spacings.spacing2, desktop: spacings.spacing0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Avatar
              sx={{ width: "64px", height: "64px" }}
              alt={isAssigned || carerName ? carerName : undefined}
              src=" image url"
            />
            <Box>
              <Typography variant="h5" sx={{ color: colorPalette.primary }}>
                {isAssigned || carerName ? carerName : "Cuidador no asignado"}
              </Typography>
              <Typography
                variant="body-normal"
                sx={{ color: colorPalette.grey4 }}
              >
                {service}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {carerName && <B4CStarRating rating={4} />}
            <B4CTag
              label={statusTagInfo[normalizedStatus].label}
              color={statusTagInfo[normalizedStatus].color as color}
            />
          </Box>
        </Box>
        <Grid container spacing={{ xs: "8px" }}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon sx={{ color: colorPalette.primary }} />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <PaymentsIcon
              sx={{
                color: colorPalette.primary,
              }}
            />
            <Typography variant="body-normal">{"Asdasd"}</Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <WatchLaterIcon sx={{ color: colorPalette.primary }} />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ color: colorPalette.primary }} />
            <Typography variant="body-normal">{address}</Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: { xs: "column", desktop: "row" },
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <B4CButton
            fullWidth
            size={Size.Small}
            label="Editar"
            onClick={handleEdit}
          />
          <B4CButton
            fullWidth
            variant="secondary"
            size={Size.Small}
            label="Cancelar"
          />
        </Box>
      </Box>
    </>
  );
};
