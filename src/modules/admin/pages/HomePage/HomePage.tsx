import { B4CServiceCard } from "@/components/BigElements/B4CServiceCard/";
import { summaryData } from "@/constants/mockData/summary";
import { PageLayout } from "@/modules/admin/PageLayout";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { HomePageChart } from "./HomePageChart";
import { colorPalette } from "@/style/partials/colorPalette";

export const HomePage = () => {
  return (
    <PageLayout title="Dashboard">
      <Grid item container sx={{ marginBottom: spacings.spacing4 }}>
        {summaryData.map(({ value, title, lastDay, type }, index) => {
          return (
            <Grid item container xs={3} key={`${index}-${title}`}>
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
      <Grid item container sx={{ display: "flex" }}>
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
