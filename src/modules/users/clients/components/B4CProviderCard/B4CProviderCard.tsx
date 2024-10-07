import { FavIcon } from "@/assets/svgIcons/favoriteIcons/FavIcon";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CProviderCardProps } from "@/ts/types/components/B4CProviderCard";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import "./B4CProviderCard.css";

export const B4CProviderCard = ({
  name,
  specialty,
  rating,
  availability,
  rate,
  skills,
  onFavoriteToggle,
}: B4CProviderCardProps) => {
  const navigate = useNavigate();

  const handleNewServiceClick = () => {
    navigate("/cliente/colaborador");
  };

  return (
    <Card
      className="main-card-available-colaborator"
      sx={{ border: `1px solid ${colorPalette.secondary}` }}
    >
      <CardHeader
        sx={{ display: "flex", justifyContent: "center" }}
        action={
          <IconButton aria-label="add to favorites" onClick={onFavoriteToggle}>
            <FavIcon color={colorPalette.grey5} />
          </IconButton>
        }
      />
      <CardContent className="available-colaborator" sx={{ paddingTop: 0 }}>
        <Box
          onClick={handleNewServiceClick}
          sx={{
            cursor: "pointer",
            padding: 4,
            borderRadius: 50,
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid",
              borderColor: colorPalette.primary,
            },
          }}
        >
          <Avatar
            alt={name}
            aria-label="caretaker"
            src="/broken-image.jpg"
            sx={{
              width: "80px",
              height: "80px",
              bgcolor: colorPalette.info,
            }}
          />
        </Box>
        <Box
          className="available-colaborator-profile"
          sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
        >
          <Typography variant="h6" component="div">
            {name}
          </Typography>

          <Typography
            variant="body2"
            color={colorPalette.primary}
            sx={{ fontWeight: 600 }}
          >
            {specialty}
          </Typography>
          <B4CStarRating rating={rating} />
        </Box>

        <Box
          className="white-colaborator-card"
          sx={{
            backgroundColor: colorPalette.white,
            border: `1px solid ${colorPalette.primary}`,
          }}
        >
          <Box
            sx={{
              px: "0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <Typography variant="body-small-bold">{availability}</Typography>
            <Typography variant="body-small">Disponibilidad</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box
            sx={{
              px: "0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <Typography variant="body-small-bold">{rate}</Typography>
            <Typography variant="body-small">Tarifa</Typography>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflow: "hidden",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Typography
            variant="body-small-bold"
            sx={{
              fonSize: "11px",
              fontWeight: 700,
            }}
          >
            Habilidades:
          </Typography>
          {skills?.length &&
            skills.map((skill) => (
              <B4CTag color="info" key={skill} label={skill} />
            ))}
        </Box>
      </CardContent>
    </Card>
  );
};
