import { B4CStarRating } from "@/components/B4CStarRating";
import { colorPalette } from "@/style/partials/colorPalette";
import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

interface CaregiverCardProps {
  name: string;
  rating: number;
  expertise: string;
  fullTimeRate: number;
  weekendRate: number;
  fullTimeHours: string;
  weekendHours: string;
  hasLicense: boolean;
  location: string;
  distance: string;
  avatarUrl: string;
  onClick?: () => void;
}

export const B4CAvailableColaboratorCard = ({
  name,
  rating,
  expertise,
  fullTimeRate,
  weekendRate,
  fullTimeHours,
  weekendHours,
  hasLicense,
  location,
  distance,
  avatarUrl,
  onClick,
}: CaregiverCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "16px",
        maxHeight: "142px",
        border: `1px solid ${colorPalette.grey4}`,
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", flexGrow: 1, gap: "24px" }}>
        <Avatar
          src={avatarUrl}
          alt={name}
          sx={{ width: 87, height: 87, marginRight: "8px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            marginBlock: "auto",
          }}
        >
          <Typography variant="body-normal">{name}</Typography>
          <B4CStarRating rating={rating} />
          <Typography
            variant="body-small"
            sx={{ color: `${colorPalette.grey4}` }}
          >
            {expertise}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBlock: "auto",
          }}
        >
          <Typography variant="body-normal" sx={{ whiteSpace: "nowrap" }}>
            <strong>Disponible de Tiempo Completo:</strong>
          </Typography>
          <Typography variant="body-normal" sx={{ whiteSpace: "nowrap" }}>
            <strong>Disponible en fines de semana:</strong>
          </Typography>
          <Typography variant="body-normal">{fullTimeHours}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBlock: "auto",
          }}
        >
          <Typography variant="body-normal">${fullTimeRate}/hora</Typography>
          <Typography variant="body-normal">${weekendRate}/hora</Typography>

          <Typography variant="body-normal">{weekendHours}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBlock: "auto",
          }}
        >
          <Typography variant="body-normal" sx={{ whiteSpace: "nowrap" }}>
            {hasLicense ? "Licencia de conducir" : "Sin licencia de conducir"}
          </Typography>
          <Typography variant="body-normal" sx={{ whiteSpace: "nowrap" }}>
            {location}
          </Typography>
          <Typography variant="body-normal" sx={{ whiteSpace: "nowrap" }}>
            {distance} de distancia
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{ width: "70%", marginBlock: "auto", textTransform: "none" }}
          onClick={onClick}
        >
          Ver perfil de Cuidador/a
        </Button>
      </Box>
    </Box>
  );
};
