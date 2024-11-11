import { ListItemLink } from "./ListItemLink";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, List } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import "./B4CCLientSidebar.css";
import { B4CButton } from "@/components/B4CButton";

export const B4CCLientSidebar = () => {
  return (
    <Box
      className="sidebar-client-main-container"
      height={"calc(100vh - 250px)"}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <ListItemLink to="/cliente" />
        <ListItemLink to="/cliente/mis-servicios" />
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
          sx={{
            textWrap: "nowrap",
            mt: "auto",
          }}
        />
      </Box>
    </Box>
  );
};
