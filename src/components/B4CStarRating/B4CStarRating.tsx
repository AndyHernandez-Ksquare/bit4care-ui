import { Box, Typography } from "@mui/material";
import React from "react";

interface IStarRatingProps {
  rating: number;
}

export const B4CStarRating = ({ rating }: IStarRatingProps) => {
  return (
    <Box
      display={"flex"}
      sx={{ flexDirection: "row", verticalAlign: "middle" }}
    >
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? "gold" : "gray",
            fontSize: "24px",
          }}
        >
          &#9733;
        </span>
      ))}
      <Typography>{`(${rating})`}</Typography>
    </Box>
  );
};
