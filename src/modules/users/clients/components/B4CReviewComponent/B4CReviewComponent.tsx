import { Avatar, Box, Typography } from "@mui/material";
import { B4CReviewComponentProps } from "@/ts/types";
import React from "react";
import { B4CStarRating } from "@/components/B4CStarRating";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";

export const B4CReviewComponent = ({ reviews }: B4CReviewComponentProps) => {
  return (
    <Box
      sx={{
        marginTop: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {reviews.map((review) => {
          return (
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent="start"
              gap="16px"
            >
              <Avatar
                alt={review.user}
                src="/static/images/avatar/2.jpg"
                sx={{ width: "80px", height: "80px" }}
              />

              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <Typography variant="body-normal-bold">
                  {review.user}
                </Typography>
                <Box sx={{ display: "flex", gap: "4px" }}>
                  <B4CStarRating rating={review.rating} />
                  <Typography variant="body-small" color={colorPalette.grey1}>
                    {review.reviewDate}
                  </Typography>
                </Box>

                <Typography variant="body-small">
                  {review.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <B4CButton
        label="Mostar las 100 reseñas"
        size={Size.Small}
        variant="outlined"
      />
    </Box>
  );
};
