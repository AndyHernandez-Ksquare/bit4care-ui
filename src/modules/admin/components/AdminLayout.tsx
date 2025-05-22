import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";
import { B4CMainArea } from "@/components/B4CMainArea";
import { B4CSidebar } from "@/components/B4CSidebar";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import { UserSelfService } from "@/services/userServices/userServices";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserSelf } from "@/ts/types/api/user";

export const AdminLayout = () => {
  const [user, setUser] = useState<UserSelf | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      const fetchUserData = async () => {
        try {
          const userData = await UserSelfService(token);
          if (userData) {
            setUser(userData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, []);
  return (
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
      <AdminLayoutBlob />
      <Box
        sx={{
          display: "flex",
          width: "76vw",
          overflowY: "auto",
          zIndex: 2,
        }}
      >
        <Box sx={{ marginRight: "auto", marginTop: "5vh" }}>
          <B4CMainArea
            profileName={user?.name || "Administrador"}
            profileRole="Admin"
          >
            <Outlet />
          </B4CMainArea>
        </Box>
      </Box>
    </div>
  );
};
