import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { B4CSearchBar } from "../B4CSearchBar";
import { B4CAvatar } from "../SmallElements/B4CAvatar";

interface IB4CMainArea {
  profileName: string;
  profileRole: string;
  children: ReactNode;
  profileImgURL?: string;
  sx?: SxProps<Theme> | undefined;
}

export const B4CMainArea = ({
  children,
  profileName,
  profileRole,
  profileImgURL,
  sx,
}: IB4CMainArea) => {
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
          display: "flex",
          height: "64px",
          borderBottom: `1px solid ${colorPalette.grey4}`,
          paddingInline: spacings.spacing4,
          paddingBlock: spacings.spacing2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <B4CSearchBar />
        </Box>
        <Box display={"flex"} sx={{ gap: 16 }}>
          <B4CAvatar width={40} height={40} imageLink={profileImgURL} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body-small-bold">{profileName}</Typography>
            <Typography
              variant="body-small"
              sx={{ fontSize: "12px", color: "#565656" }}
            >
              {profileRole}
            </Typography>
          </Box>
        </Box>
      </Grid>
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
