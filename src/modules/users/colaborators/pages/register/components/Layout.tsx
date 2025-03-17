import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";
import { B4CMainClientArea } from "@/modules/users/clients/components/B4CMainClientArea/B4CMainClientArea";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
        display: "flex",
        paddingTop: "100px",
        gap: "2vw",
        overflow: "hidden",
      }}
    >
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
            paddingInline: { xs: "15%" },
            display: "flex",
            zIndex: 2,
          }}
        >
          <B4CMainClientArea profileName="Braulio" profileRole="Admin">
            {children}
          </B4CMainClientArea>
        </Box>
      </Box>
    </Box>
  );
};
