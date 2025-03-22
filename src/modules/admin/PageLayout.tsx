import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Grid2 as Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <Grid container>
      <Grid
        size={{ xs: 12 }}
        sx={{ marginBottom: spacings.spacing4, width: "100%" }}
      >
        <Typography variant="h3" sx={{ color: colorPalette.grey1 }}>
          {title}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>{children}</Grid>
    </Grid>
  );
};
