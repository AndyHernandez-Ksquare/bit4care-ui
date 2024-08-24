import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, SxProps, Theme } from "@mui/material";
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
    <Box
      sx={{
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        backgroundColor: colorPalette.white,
        border: `none`,
        // maxWidth: "1235px",
        display: "flex",
        flexDirection: "column",
        width: "65vw",
        flexGrow: 1,
        ...sx,
      }}
    >
      <Box
        sx={{
          paddingInline: spacings.spacing6,
          paddingTop: spacings.spacing6,
          paddingBottom: spacings.spacing8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
