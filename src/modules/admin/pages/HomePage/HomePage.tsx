import { B4CServiceCard } from "@/components/BigElements/B4CServiceCard/";
import { summaryData } from "@/constants/mockData/summary";
import { PageLayout } from "@/modules/admin/PageLayout";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid2 as Grid, Typography } from "@mui/material";

import { HomePageChart } from "./HomePageChart";
import { colorPalette } from "@/style/partials/colorPalette";

export const HomePage = () => {
  return (
    <PageLayout title="Dashboard">
      <Grid container sx={{ marginBottom: spacings.spacing4 }}>
        {summaryData.map(({ value, title, lastDay, type }, index) => {
          return (
            <Grid container size={{ xs: 3 }} key={`${index}-${title}`}>
              <B4CServiceCard
                title={title}
                value={value}
                type={type}
                lastRecord={lastDay}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid container sx={{ display: "flex" }}>
        <Box
          width={"98%"}
          sx={{
            borderRadius: "8px",
            boxShadow: "6px 6px 54px 0px #0000000D",
            backgroundColor: colorPalette.white,
            paddingInline: spacings.spacing2,
            paddingBlock: spacings.spacing4,
            margin: "auto",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: spacings.spacing3 }}>
            Detalles de ventas
          </Typography>
          <HomePageChart />
        </Box>
      </Grid>
    </PageLayout>
  );
};
