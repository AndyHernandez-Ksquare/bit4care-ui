import { AdminLoginCenterBlob } from "@/assets/svgIcons/backgroundIcons/AdminLoginCenterBlob";
import { AdminLoginCornerBlob } from "@/assets/svgIcons/backgroundIcons/AdminLoginCornerBlob";
import { AdminLoginLeftBlob } from "@/assets/svgIcons/backgroundIcons/AdminLoginLeftBlob";
import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Typography } from "@mui/material";

import { Outlet } from "react-router-dom";

export const AdminLogin = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: colorPalette.primary,
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        // Altura máxima del componente B4CMainArea
      }}
    >
      <AdminLoginCornerBlob />
      <AdminLoginLeftBlob />
      <AdminLoginCenterBlob />
      <Box
        sx={{
          marginInline: "auto",
          marginTop: "6%",
          marginBottom: "20px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h2" sx={{ color: colorPalette.white }}>
            Bid4
          </Typography>
          <Typography variant="h2" sx={{ color: colorPalette.secondary }}>
            Care
          </Typography>
        </Box>
        <Typography variant="h2" sx={{ color: colorPalette.white }}>
          Admin Login
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "auto",
          marginTop: 0,
          backgroundColor: colorPalette.white,
          borderRadius: "10px",
          paddingInline: spacings.spacing8,
          paddingBlock: spacings.spacing6,
          display: "flex",
          flexDirection: "column",
          maxWidth: "927px",
          maxHeight: "647px",
          gap: "3vh",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};
