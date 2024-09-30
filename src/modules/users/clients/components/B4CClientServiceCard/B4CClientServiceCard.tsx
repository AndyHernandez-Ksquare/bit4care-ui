import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { color } from "@/ts/types/shared/colors";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";
import { B4CClientServicesCardProps } from "@/ts/types/components/B4CClientServicesCard.type";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import { Fragment } from "react/jsx-runtime";
import { B4CClientServiceDetail } from "../B4CClientServiceDetail";
import { useState } from "react";

export const B4CClientServiceCard = ({
  name,
  fee,
  schedule,
  hours,
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
    <Fragment>
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
        <Grid container>
          <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
            <LocationIcons />
            <Typography variant="body-normal">{address}</Typography>
          </Grid>
          <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
            <MoneyIcons />
            <Typography variant="body-normal">{fee}</Typography>
          </Grid>
          <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
            <ClockIcon />
            <Typography variant="body-normal">{`${hours} horas`}</Typography>
          </Grid>
          <Grid item xs={12} desktop={6} sx={{ display: "flex" }}>
            <ClockIcon />
            <Typography variant="body-normal">{schedule}</Typography>
          </Grid>
        </Grid>
        <B4CButton
          onClick={handleOpenModal}
          size={Size.Small}
          label="Ver detalles"
        ></B4CButton>
      </Box>
      <B4CClientServiceDetail
        isOpen={openModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
      />
    </Fragment>
  );
};
