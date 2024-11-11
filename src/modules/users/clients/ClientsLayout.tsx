import { B4CMainClientArea } from "./components/B4CMainClientArea/B4CMainClientArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, IconButton, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ClientsNavbar } from "./components/ClientsNavbar/ClientsNavbar";
import { B4CCLientSidebar } from "./components/B4CCLientSidebar/B4CCLientSidebar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
          paddingTop: "100px",
        }}
      >
        <B4CCLientSidebar />
        <Box
          className="client-separator-main"
          sx={{
            display: { desktop: "flex" },
            marginTop: "5vh",
            width: "100%",
            flexGrow: 1,
          }}
        >
          <Box
            className="main-client-wraper"
            sx={{
              paddingInline: { xs: "16px" },
              display: "flex",
              paddingLeft: { desktop: "20%" },
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
        component={"footer"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 40px",
          backgroundColor: colorPalette.primary,
          flexDirection: { xs: "column-reverse", tablet: "row" },
          textAlign: { xs: "center", tablet: "left" },
          gap: 16,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: colorPalette.white,
            }}
          >
            © 2025 Bid4Care. Todos los derechos reservados
          </Typography>
        </Box>

        <Box display={"flex"} gap={16}>
          <IconButton
            sx={{
              backgroundColor: colorPalette.grey3,
              color: colorPalette.white,
            }}
            href="https://www.youtube.com/"
            target="_blank"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: colorPalette.grey3,
              color: colorPalette.white,
            }}
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
