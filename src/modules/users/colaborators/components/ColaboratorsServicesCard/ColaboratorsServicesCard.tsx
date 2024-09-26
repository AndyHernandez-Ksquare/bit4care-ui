import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CButton } from "@/components/B4CButton";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";

import { color } from "@/ts/types/shared/colors";
import { B4CStarRating } from "@/components/B4CStarRating";
import "./ColaboratorsServicesCard.css";
import { ColaboratorsServicesCardProps } from "@/ts/types/components";

export const ColaboratorsServicesCard = ({
  name,
  fee,
  schedule,
  hours,
  address,
  service,
  status,
  skills,
  isAssigned = false,
  onClick,
}: ColaboratorsServicesCardProps) => {
  const statusTagInfo = {
    solicitado: { color: "warning", label: "Solicitado" },
    realizado: { color: "success", label: "Realizado" },
    aceptado: { color: "success", label: "Aceptado" },
    "no realizado": { color: "error", label: "No Realizado" },
  };
  return (
    <Box className="colaborator-service-card-container">
      <Box className="colaborator-service-card-header">
        <Box className="colaborator-service-card-header">
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
      <Grid container spacing={16}>
        <Grid
          item
          xs={12}
          desktop={6}
          sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        >
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginInline: 0,
          alignItems: "left",
        }}
      >
        {skills.map((skill) => {
          return <B4CTag label={skill} />;
        })}
      </Box>
      <B4CButton
        size={Size.Small}
        label="Ver detalles"
        onClick={onClick}
      ></B4CButton>
    </Box>
  );
};
