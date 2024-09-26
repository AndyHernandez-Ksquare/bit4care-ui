import { B4CMainArea } from "./components/B4CMainArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { B4CSidebar } from "./components/B4CSidebar";
import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";
import "./ColaboratorsLayout.css";
import { B4CMobileSidebar } from "./components/B4CMobileSidebar";

export const ColaboratorsLayout = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Fragment>
      <NavBar toggleDrawer={toggleDrawer} />
      <div
        style={{
          background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
          display: "flex",
          paddingTop: "100px",
          gap: "2vw",
          overflow: "hidden",
        }}
      >
        <B4CMobileSidebar open={open} toggleDrawer={toggleDrawer} />
        <B4CSidebar />
        <AdminLayoutBlob />
        <Box className="separator-main">
          <Box className="main-wrapper">
            <B4CMainArea profileName="Braulio" profileRole="Admin">
              <Outlet />
            </B4CMainArea>
          </Box>
        </Box>
      </div>
    </Fragment>
  );
};
