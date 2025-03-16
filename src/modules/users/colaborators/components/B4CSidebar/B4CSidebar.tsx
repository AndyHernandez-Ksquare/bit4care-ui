import { Box, List } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemLink } from "./ListItemLink";
import "./B4CSiderbar.css";

import TravelExploreIcon from "@mui/icons-material/TravelExplore"; // Para "Explorar servicios"
import HandshakeIcon from "@mui/icons-material/Handshake"; // Para "Mis asignaciones"
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useCollaboratorSession } from "@/context/auth/constants/useCollabSession";

export const B4CSidebar = () => {
  const { setToken } = useCollaboratorSession();

  const handleLogout = (): void => {
    // Limpiar el localStorage y cualquier otro paso de cierre de sesión
    localStorage.clear();
    setToken(null);
  };

  return (
    <Box className="sidebar-main-container" height={"80vh"}>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <ListItemLink
          to="/colaborador"
          label="Solicitudes"
          icon={<TravelExploreIcon />}
        />
        <ListItemLink
          to="/colaborador/mis-servicios"
          label="Mis servicios"
          icon={<HandshakeIcon />}
        />
        <ListItemLink
          to="/colaborador/ajustes-y-perfil"
          label="Perfil y Ajustes"
          icon={<AccountBoxIcon />}
        />
      </List>
      <Box
        sx={{
          display: "flex",
          marginTop: "auto",
          marginBottom: 3,
          listStyle: "none",
        }}
      >
        <ListItemLink
          icon={<LogoutIcon />}
          label="Cerrar Sesión"
          onClick={handleLogout}
        />
      </Box>
    </Box>
  );
};
