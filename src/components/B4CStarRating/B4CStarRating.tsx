import { SelectedStarIcon } from "@/assets/svgIcons/ratingIcons/SelectedStarIcon";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";

interface IStarRatingProps {
  rating: number;
}

export const B4CStarRating = ({ rating }: IStarRatingProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{ flexDirection: "row", alignItems: "center" }}
    >
      {[...Array(5)].map((_, index) => (
        <SelectedStarIcon
          key={index}
          color={index < rating ? colorPalette.primary : "none"}
        />
      ))}
      <Typography>{`(${rating})`}</Typography>
    </Box>
  );
};
