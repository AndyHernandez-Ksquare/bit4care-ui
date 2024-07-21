import { B4CMainClientArea } from "./components/B4CMainClientArea/B4CMainClientArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ClientsNavbar } from "./components/ClientsNavbar/ClientsNavbar";
import { B4CCLientSidebar } from "./components/B4CCLientSidebar/B4CCLientSidebar";

const styles = {
  layoutContainer: {
    height: "calc(100vh - 100px)",
    background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    marginTop: "5vh",
    display: "flex",
    flexGrow: 1,
    gap: "2vw",
  },
  sidebar: {
    width: "22vw",
    display: "flex",
  },
};

export const ClientsLayout = () => (
  <Fragment>
    <ClientsNavbar />
    <Box sx={styles.layoutContainer}>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.sidebar}>
          <B4CCLientSidebar />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "76vw",
            overflowY: "auto",
            zIndex: 2,
          }}
        >
          <B4CMainClientArea profileName="Braulio" profileRole="Admin">
            <Outlet />
          </B4CMainClientArea>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: colorPalette.primary,
          color: colorPalette.white,
          textAlign: "center",
          height: "80px",
        }}
      >
        <Typography variant="body2" color="inherit">
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  </Fragment>
);
