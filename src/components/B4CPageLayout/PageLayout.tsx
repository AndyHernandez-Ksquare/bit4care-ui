import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Typography } from "@mui/material";
import { Fragment, ReactNode } from "react";

interface PageLayoutProps {
  title?: string;
  children: ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <Fragment>
      {title && (
        <Box sx={{ marginBottom: spacings.spacing4 }}>
          <Typography variant="h3" sx={{ color: colorPalette.grey1 }}>
            {title}
          </Typography>
        </Box>
      )}
      <Box sx={{ marginBottom: "64px" }}>{children}</Box>
    </Fragment>
  );
};
