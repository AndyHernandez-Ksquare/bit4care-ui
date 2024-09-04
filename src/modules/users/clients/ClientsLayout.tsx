import { B4CMainClientArea } from "./components/B4CMainClientArea/B4CMainClientArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ClientsNavbar } from "./components/ClientsNavbar/ClientsNavbar";
import { B4CCLientSidebar } from "./components/B4CCLientSidebar/B4CCLientSidebar";

const styles = {
  contentContainer: {
    marginTop: "5vh",
    display: "flex",
    flexGrow: 1,
    gap: "1vw",
  },
};

export const ClientsLayout = () => (
  <Fragment>
    <ClientsNavbar />
    <Box
      sx={{
        background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        paddingTop: "100px",
      }}
    >
      <B4CCLientSidebar />

      <Box sx={styles.contentContainer}>
        <Box
          sx={{
            display: "flex",
            paddingLeft: "20%",
            zIndex: 2,
          }}
        >
          <B4CMainClientArea profileName="Braulio" profileRole="Admin">
            <Outlet />
          </B4CMainClientArea>
        </Box>
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
  </Fragment>
);
