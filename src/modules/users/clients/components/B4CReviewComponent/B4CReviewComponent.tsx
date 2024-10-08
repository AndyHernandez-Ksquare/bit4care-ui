import { Box, Typography } from "@mui/material";
import { B4CReviewComponentProps } from "@/ts/types/components/B4CClientComponents.type";

import { B4CStarRating } from "@/components/B4CStarRating";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

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
            <Box display="flex" flexDirection={"row"} width="100%" gap="32px">
              {/* <Avatar
                alt={review.}
                src="/static/images/avatar/2.jpg"
                sx={{ width: "80px", height: "80px" }}
              /> */}

              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                {/* <Typography variant="body-normal-bold">
                  {review.user}
                </Typography> */}
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <B4CStarRating rating={review.stars} />
                  <Typography variant="body-small" color={colorPalette.grey1}>
                    {formatDistanceToNow(new Date(review.createdAt), {
                      addSuffix: true,
                      locale: es,
                    })}
                  </Typography>
                </Box>

                <Typography variant="body-small">{review.comment}</Typography>
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
