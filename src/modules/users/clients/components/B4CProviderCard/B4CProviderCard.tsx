/* eslint-disable @typescript-eslint/no-unused-vars */
import { FavIcon } from "@/assets/svgIcons/favoriteIcons/FavIcon";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CProviderCardProps } from "@/ts/types/B4CProviderCard";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export const B4CProviderCard = ({
  name,
  specialty,
  rating,
  reviews,
  availability,
  rate,
  skills,
  isFavorite,
  onFavoriteToggle,
}: B4CProviderCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 278,
        borderRadius: "16px",
        border: `1px solid ${colorPalette.secondary}`,
        background: "linear-gradient(180deg, #FFFFFF 0%, #E4EEFC 100%)",
        boxShadow: "none",
      }}
    >
      <CardHeader
        sx={{ display: "flex", justifyContent: "center" }}
        action={
          <IconButton aria-label="add to favorites" onClick={onFavoriteToggle}>
            <FavIcon color={colorPalette.grey5} />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Avatar
          aria-label="nurse"
          sx={{ width: "70px", height: "70px" }}
        ></Avatar>
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

        <Box
          sx={{
            mt: 2,
            backgroundColor: colorPalette.white,
            border: `1px solid ${colorPalette.primary}`,
            borderRadius: "8px",
            p: "1rem",
            display: "flex",
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
          {skills.map((skill) => (
            <B4CTag color="info" key={skill} label={skill} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
