import { Box, Button, List, Typography } from "@mui/material";
import { colorPalette } from "@/style/partials/colorPalette";
import { ListItemLink } from "./ListItemLink";
import "./B4CSiderbar.css";

export const B4CSidebar = () => {
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
        <ListItemLink to="/colaborador" />
        <ListItemLink to="/colaborador/ajustes-y-perfil" />
      </List>
      <Button sx={{ color: colorPalette.black1 }}>
        <Typography variant="body-normal-bold">Salir de la cuenta</Typography>
      </Button>
    </Box>
  );
};
