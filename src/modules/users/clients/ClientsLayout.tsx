import { B4CMainClientArea } from "./components/B4CMainClientArea/B4CMainClientArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ClientsNavbar } from "./components/ClientsNavbar/ClientsNavbar";
import { B4CCLientSidebar } from "./components/B4CCLientSidebar/B4CCLientSidebar";
import "./ClientsLayout.css";

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
      <Box className="client-separator-main">
        <Box className="main-client-wraper">
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
