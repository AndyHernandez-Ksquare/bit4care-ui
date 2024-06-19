import { LocationIcons } from "@/assets/svgIcons/locationIcons/LocationIcons";
import { MoneyIcons } from "@/assets/svgIcons/moneyIcons/MoneyIcons";
import { B4CButton } from "@/components/B4CButton";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { ClockIcon } from "@/assets/svgIcons/clockIcons/ClockIcon";
import React from "react";
import { color } from "@/ts/types/colors";

export type Status = "solicitado" | "realizado" | "no realizado";
interface IColaboratorsServicesCardProps {
  name: string;
  address: string;
  fee: string;
  schedule: string;
  hours: number;
  service: string;
  status: Status;
  skills: string[];
  onClick?: () => void;
}

export const ColaboratorsServicesCard = ({
  name,
  fee,
  schedule,
  hours,
  address,
  service,
  status,
  skills,
  onClick,
}: IColaboratorsServicesCardProps) => {
  const statusTagInfo = {
    solicitado: { color: "warning", label: "Solicitado" },
    realizado: { color: "success", label: "Realizado" },
    "no realizado": { color: "error", label: "No Realizado" },
  };
  return (
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
        ></B4CTag>
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
