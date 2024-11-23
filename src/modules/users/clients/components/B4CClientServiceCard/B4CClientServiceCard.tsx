import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { color } from "@/ts/types/shared/colors";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import { B4CClientServicesCardProps } from "@/ts/types/components/B4CClientServicesCard.type";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import { B4CClientServiceDetail } from "../B4CClientServiceDetail";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { spacings } from "@/style/partials/spacings";
import { calculateTotalHours } from "@/constants/calculateTotalHours";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const B4CClientServiceCard = ({
  id,
  name,
  schedule,
  address,
  service,
  status,
  isAssigned = false,
}: B4CClientServicesCardProps) => {
  const [openModal, setIsOpenModal] = useState<boolean>(false);

  const statusTagInfo = {
    solicitado: { color: "warning", label: "Solicitado" },
    realizado: { color: "success", label: "Realizado" },
    aceptado: { color: "success", label: "Aceptado" },
    "no realizado": { color: "error", label: "No Realizado" },
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
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
            alignItems: "center",
            gap: { xs: spacings.spacing2, desktop: spacings.spacing0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: "64px", height: "64px" }}
              alt={name}
              src=" image url"
            />
            <Box>
              <Typography variant="h5" sx={{ color: colorPalette.primary }}>
                {name}
              </Typography>
              <Typography
                variant="body-normal"
                sx={{ color: colorPalette.grey4 }}
              >
                {service}
              </Typography>
            </Box>
          </Box>
          <B4CTag
            label={statusTagInfo[status].label}
            color={statusTagInfo[status].color as color}
          />
          <Box
            sx={{
              display: isAssigned ? "flex" : "none",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Avatar sx={{ width: "48px", height: "48px" }} />
            <Box>
              <Typography variant="body-normal">Maria Perez</Typography>
              <B4CStarRating rating={3} />
            </Box>
          </Box>
        </Box>
        <Grid container spacing={{ xs: "8px", desktop: "4px" }}>
          <Grid
            size={{ xs: 12, desktop: 6 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ color: colorPalette.primary }} />
            <Typography variant="body-normal">{address}</Typography>
          </Grid>
          <Grid
            size={{ xs: 12, desktop: 6 }}
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
            size={{ xs: 12, desktop: 6 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <WatchLaterIcon sx={{ color: colorPalette.primary }} />
            <Typography variant="body-normal">{`${calculateTotalHours(schedule)} horas`}</Typography>
          </Grid>
          <Grid
            size={{ xs: 12, desktop: 6 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon sx={{ color: colorPalette.primary }} />
            <Typography variant="body-normal">{schedule}</Typography>
          </Grid>
        </Grid>
        <B4CButton
          onClick={handleOpenModal}
          size={Size.Small}
          label="Ver detalles"
        />
      </Box>
      <B4CClientServiceDetail
        id={id}
        isOpen={openModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
      />
    </>
  );
};
