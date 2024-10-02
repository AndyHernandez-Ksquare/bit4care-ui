import { Grid2 as Grid, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import "./B4CMainArea.css";
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
      className="main-area-container"
      container
      sx={{
        ...sx,
      }}
    >
      <Grid className="main-area-layout" size={{ xs: 12 }}>
        {children}
      </Grid>
    </Grid>
  );
};
