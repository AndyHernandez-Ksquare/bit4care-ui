import { Avatar, Box, Typography } from "@mui/material";
import { B4CReviewComponentProps } from "@/ts/types/components/B4CClientComponents.type";
import { B4CStarRating } from "@/components/B4CStarRating";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";

export const B4CReviewComponent = ({ reviews }: B4CReviewComponentProps) => {
  const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(2);

  const showAllReviews = () => {
    setVisibleReviewsCount(reviews.length);
  };

  const hideReviews = () => {
    setVisibleReviewsCount(2);
  };

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
          flexFlow: "row wrap",
        }}
      >
        {reviews
          .slice(0, visibleReviewsCount)
          .map(({ stars, comment, createdAt }, index) => {
            return (
              <Box
                key={index}
                display="flex"
                flexDirection={"row"}
                gap="16px"
                sx={{ width: "350px" }}
              >
                <Avatar
                  alt={"J"}
                  src="/static/images/avatar/2.jpg"
                  sx={{ width: "80px", height: "80px" }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography variant="body-normal-bold">{"user"}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <B4CStarRating rating={stars} />
                    <Typography variant="body-small" color={colorPalette.grey1}>
                      {formatDistanceToNow(new Date(createdAt), {
                        addSuffix: true,
                        locale: es,
                      })}
                    </Typography>
                  </Box>

                  <Typography variant="body-small">{comment}</Typography>
                </Box>
              </Box>
            );
          })}
      </Box>
      {visibleReviewsCount === 2 && (
        <B4CButton
          label={`Mostar las ${reviews.length} reseñas`}
          size={Size.Small}
          variant="outlined"
          onClick={showAllReviews}
        />
      )}
      {reviews.length === visibleReviewsCount && (
        <B4CButton
          label={`Ocultar reseñas`}
          size={Size.Small}
          variant="outlined"
          onClick={hideReviews}
        />
      )}
    </Box>
  );
};
