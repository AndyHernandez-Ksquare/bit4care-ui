import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Grid, SxProps, Theme } from "@mui/material";
import React, { ReactNode } from "react";

interface IB4CMainArea {
  profileName: string;
  profileRole: string;
  children: ReactNode;
  profileImgURL?: string;
  sx?: SxProps<Theme> | undefined;
}

export const B4CMainArea = ({ children, sx }: IB4CMainArea) => {
  return (
    <Grid
      container
      sx={{
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        backgroundColor: colorPalette.white,
        border: `1px solid ${colorPalette.grey4}`,

        width: "65vw",
        maxWidth: "1235px",
        ...sx,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          paddingInline: spacings.spacing4,
          paddingTop: spacings.spacing6,
          minHeight: "95vh",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
