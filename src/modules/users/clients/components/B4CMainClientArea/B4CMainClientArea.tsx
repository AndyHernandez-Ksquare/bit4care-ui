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

export const B4CMainClientArea = ({ children, sx }: IB4CMainArea) => {
  return (
    <Grid
      container
      sx={{
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        backgroundColor: colorPalette.white,
        border: `none`,

        width: "75vw",
        maxWidth: "1235px",
        flexGrow: 1,
        ...sx,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          paddingInline: spacings.spacing6,
          paddingTop: spacings.spacing6,
          paddingBottom: spacings.spacing8,
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
