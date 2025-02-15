import { ListItemLink } from "./ListItemLink";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, List } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./B4CCLientSidebar.css";
import { B4CButton } from "@/components/B4CButton";
import { useClientSession } from "@/context/auth/constants/useClientSession";

export const B4CCLientSidebar = () => {
  const { setToken } = useClientSession();

  const handleLogout = (): void => {
    // Limpiar el localStorage y cualquier otro paso de cierre de sesión
    localStorage.clear();
    setToken(null);
  };

  return (
    <Box
      className="sidebar-client-main-container"
      height={"calc(100vh - 200px)"}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <ListItemLink to="/cliente" />
        <ListItemLink to="/cliente/ajustes-y-perfil" />
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "auto",
          marginBottom: 5,
        }}
      >
        <B4CButton
          variant="outlined"
          label="Cerrar Sesión"
          labelColor={colorPalette.primary}
          fullWidth
          startIcon={<LogoutIcon sx={{ color: colorPalette.primary }} />}
          onClick={handleLogout}
          sx={{
            textWrap: "nowrap",
            mt: "auto",
          }}
        />
      </Box>
    </Box>
  );
};
