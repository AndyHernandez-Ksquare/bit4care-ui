import { B4CMainArea } from "./components/B4CMainArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { B4CSidebar } from "./components/B4CSidebar";
import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";

export const ColaboratorsLayout = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        style={{
          background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
          display: "flex",
          paddingTop: "100px",
          gap: "2vw",
        }}
      >
        <B4CSidebar />
        <AdminLayoutBlob />
        <Box
          sx={{
            display: "flex",
            paddingLeft: "20%",
            zIndex: 2,
          }}
        >
          <Box sx={{ marginRight: "auto", marginTop: "64px" }}>
            <B4CMainArea profileName="Braulio" profileRole="Admin">
              <Outlet />
            </B4CMainArea>
          </Box>
        </Box>
      </div>
    </Fragment>
  );
};
