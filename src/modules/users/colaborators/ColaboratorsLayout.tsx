import { B4CMainArea } from "./components/B4CMainArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { B4CSidebar } from "./components/B4CSidebar";

export const ColaboratorsLayout = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
          display: "flex",
          position: "fixed",
          gap: "2vw",
        }}
      >
        <Box width={"22vw"} display={"flex"}>
          <B4CSidebar />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "76vw",
            overflowY: "auto",
            zIndex: 2,
          }}
        >
          <Box sx={{ marginRight: "auto", marginTop: "5vh" }}>
            <B4CMainArea profileName="Braulio" profileRole="Admin">
              <Outlet />
            </B4CMainArea>
          </Box>
        </Box>
      </div>
    </Fragment>
  );
};
