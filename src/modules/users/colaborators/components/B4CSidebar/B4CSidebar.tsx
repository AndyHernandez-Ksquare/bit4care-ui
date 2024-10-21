import { Box, List } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemLink } from "./ListItemLink";
import "./B4CSiderbar.css";

import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const B4CSidebar = () => {
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
          label="Mis Ajustes"
          icon={<HomeIcon />}
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
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Box>
    </Box>
  );
};
