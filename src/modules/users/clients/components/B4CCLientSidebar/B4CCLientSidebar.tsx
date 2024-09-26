import { ListItemLink } from "./ListItemLink";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Button, List, Typography } from "@mui/material";

import "./B4CCLientSidebar.css";

export const B4CCLientSidebar = () => {
  return (
    <Box className="sidebar-main-container">
      <List
        sx={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          paddingInline: 0,
          gap: "32px",
        }}
      >
        <ListItemLink to="/cliente" />
        <ListItemLink to="/cliente/mis-servicios" />
        <ListItemLink to="/cliente/ajustes-y-perfil" />
      </List>
      <Button sx={{ color: colorPalette.black1 }}>
        <Typography variant="body-normal-bold">Salir de la cuenta</Typography>
      </Button>
    </Box>
  );
};
