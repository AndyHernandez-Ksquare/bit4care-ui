import { B4CMainClientArea } from "./components/B4CMainClientArea/B4CMainClientArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ClientsNavbar } from "./components/ClientsNavbar/ClientsNavbar";
import { B4CCLientSidebar } from "./components/B4CCLientSidebar/B4CCLientSidebar";
import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";

export const ClientsLayout = () => {
  return (
    <>
      <ClientsNavbar />
      <Box
        sx={{
          background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          paddingTop: "80px",
        }}
      >
        <B4CCLientSidebar />
        <AdminLayoutBlob />
        <Box
          className="client-separator-main"
          sx={{
            display: { desktop: "flex" },
            marginTop: "5vh",
            width: "100%",
            flexGrow: 1,
            zIndex: 2,
          }}
        >
          <Box
            className="main-client-wraper"
            sx={{
              paddingInline: { xs: "16px" },
              display: "flex",
              paddingLeft: { desktop: "16%" },
              zIndex: 2,
            }}
          >
            <B4CMainClientArea profileName="Braulio" profileRole="Admin">
              <Outlet />
            </B4CMainClientArea>
          </Box>
        </Box>
      </Box>
    </>
  );
};
