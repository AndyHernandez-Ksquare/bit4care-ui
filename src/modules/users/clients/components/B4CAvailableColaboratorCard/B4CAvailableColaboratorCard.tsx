import { B4CStarRating } from "@/components/B4CStarRating";
import { colorPalette } from "@/style/partials/colorPalette";
import { Avatar, Box, Button, Typography } from "@mui/material";

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
        justifyContent: "center",
        padding: "16px",
        border: `1px solid ${colorPalette.grey4}`,
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          gap: "16px",
          flexDirection: { xs: "column", desktop: "row" },
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            textWrap: "wrap",
          }}
        >
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
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "8px", desktop: "8px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", desktop: "row", gap: "24px" },
              gap: { xs: "8px", desktop: "24px" },
            }}
          >
            <Typography variant="body-normal" sx={{ whiteSpace: "nowrap" }}>
              <strong>Disponible de Tiempo Completo:</strong>
            </Typography>
            <Typography variant="body-normal">${fullTimeRate}/hora</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", desktop: "row" },
              gap: { xs: "8px", desktop: "35px" },
            }}
          >
            <Typography variant="body-normal" sx={{ whiteSpace: "nowrap" }}>
              <strong>Disponible en fines de semana:</strong>
            </Typography>
            <Typography variant="body-normal">${weekendRate}/hora</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", desktop: "row" },
              gap: { xs: "8px", desktop: "24px" },
            }}
          >
            <Typography variant="body-normal">{fullTimeHours}</Typography>
            <Typography variant="body-normal">{weekendHours}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginBlock: "auto",
            flexDirection: { xs: "row", desktop: "column" },
            width: "100%",
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
