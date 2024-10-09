import { Box, SxProps, Tab, Tabs, Theme, Typography } from "@mui/material";
import { B4CReviewComponent } from "../../../components/B4CReviewComponent";
import { colorPalette } from "@/style/partials/colorPalette";
import { SyntheticEvent, useState } from "react";
import { CarerReview } from "@/ts/types/api/client";

const tabStyle: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: "700",
  color: colorPalette.grey3,
  gap: "8px",
  margin: 0,
};

interface ClientAboutAndReviewProps {
  biography?: string;
  reviews?: CarerReview[];
}

export const ClientAboutAndReview = ({
  biography,
  reviews,
}: ClientAboutAndReviewProps) => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          sx={{ height: "40px" }}
        >
          <Tab sx={tabStyle} label="Acerca de" iconPosition="start" />
          <Tab sx={tabStyle} label="Reseñas" iconPosition="start" />
        </Tabs>
      </Box>
      {tabValue === 0 && (
        <>
          <Box
            mt={16}
            sx={{ display: "flex", flexDirection: "row", gap: "8px" }}
          >
            <Typography variant="body-small-bold">Biografía:</Typography>
            <Typography variant="body-small">{biography}</Typography>
          </Box>
          {/* <Box
      mt={16}
      sx={{ display: "flex", flexDirection: "row", gap: "8px" }}
    >
      <Typography variant="body-small-bold">
        Habilidades:
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: "16px" }}
      >
        {user.skills.map((skill) => (
          <Chip color="primary" key={skill} label={skill} />
        ))}
      </Box>
    </Box> */}
        </>
      )}
      {tabValue === 1 &&
        (reviews?.length ? (
          <B4CReviewComponent reviews={reviews} />
        ) : (
          <Box sx={{ width: "100%", display: "flex", padding: "1rem" }}>
            <Typography variant="body-small" sx={{ marginInline: "auto" }}>
              No hay reseñas disponibles para este cuidador
            </Typography>
          </Box>
        ))}
    </>
  );
};
