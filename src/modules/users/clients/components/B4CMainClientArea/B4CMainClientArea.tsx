import { Box, SxProps, Theme } from "@mui/material";
import React, { ReactNode } from "react";
import "./B4CMainClientArea.css";

interface B4CMainArea {
  profileName: string;
  profileRole: string;
  children: ReactNode;
  profileImgURL?: string;
  sx?: SxProps<Theme> | undefined;
}

export const B4CMainClientArea = ({ children, sx }: B4CMainArea) => {
  return (
    <Box
      className="b4c-main-client-area"
      sx={{
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
