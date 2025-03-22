import { B4CMainArea } from "./components/B4CMainArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { B4CSidebar } from "./components/B4CSidebar";
import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";

export const ColaboratorsLayout = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
          display: "flex",
          paddingTop: "100px",
          gap: "2vw",
          overflow: "hidden",
        }}
      >
        <B4CSidebar />
        <AdminLayoutBlob />
        <Box
          className="separator-main"
          sx={{
            display: "flex",
            width: "100%",
            zIndex: 2,
            paddingLeft: { xs: 0, desktop: "20%" }, // xs: móviles, desktop: PCs
          }}
        >
          <Box
            className="main-wrapper"
            sx={{
              marginRight: { xs: 0, desktop: "auto" },
              marginTop: "64px",
              // Solo se define marginInline para xs (móviles)
              marginInline: { xs: "auto", desktop: "initial" },
            }}
          >
            <B4CMainArea profileName="Braulio" profileRole="Admin">
              <Outlet />
            </B4CMainArea>
          </Box>
        </Box>
      </Box>
    </>
  );
};
