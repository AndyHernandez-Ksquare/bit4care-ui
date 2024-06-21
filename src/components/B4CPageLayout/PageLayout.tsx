import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ marginBottom: spacings.spacing4 }}>
        <Typography variant="h3" sx={{ color: colorPalette.grey1 }}>
          {title}
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
