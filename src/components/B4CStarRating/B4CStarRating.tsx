import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";

interface IStarRatingProps {
  rating: number; // Puede ser un número decimal
}

export const B4CStarRating = ({ rating }: IStarRatingProps) => {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: "row", alignItems: "center", gap: "0" }}
    >
      {[...Array(5)].map((_, index) => {
        // Determinar el tipo de estrella según el índice y el rating
        if (index + 1 <= rating) {
          // Estrella llena
          return (
            <StarIcon
              key={index}
              sx={{
                width: { xs: "16px", desktop: "24px" },
                height: { xs: "16px", desktop: "24px" },
                color: colorPalette.primary,
              }}
            />
          );
        } else if (index < rating && rating < index + 1) {
          // Media estrella
          return (
            <StarHalfIcon
              key={index}
              sx={{
                width: { xs: "16px", desktop: "24px" },
                height: { xs: "16px", desktop: "24px" },
                color: colorPalette.primary,
              }}
            />
          );
        } else {
          // Estrella vacía
          return (
            <StarBorderIcon
              key={index}
              sx={{
                width: { xs: "16px", desktop: "24px" },
                height: { xs: "16px", desktop: "24px" },
                color: colorPalette.primary,
              }}
            />
          );
        }
      })}
      <Typography variant="body-normal" sx={{ marginLeft: "4px" }}>
        {`(${rating.toFixed(1)})`}
      </Typography>
    </Box>
  );
};
