import { B4CMainArea } from "@/components/B4CMainArea";
import { B4CSidebar } from "@/components/B4CSidebar";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import React from "react";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
        display: "flex",
        position: "fixed",
        gap: "2vw",
        // Altura máxima del componente B4CMainArea
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
            {children}
          </B4CMainArea>
        </Box>
      </Box>
    </div>
  );
};
