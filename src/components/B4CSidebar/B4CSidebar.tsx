import { B4CLogo } from "@/assets/images/B4CLogo";
import { Box, Button, List, Typography } from "@mui/material";
import { colorPalette } from "@/style/partials/colorPalette";
import { ListItemLink } from "./ListItemLink";

export const B4CSidebar = () => {
  return (
    <Box
      sx={{
        width: "223px",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginTop: "5vh",
        gap: "4vh",
      }}
    >
      <B4CLogo />
      <List
        sx={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          paddingInline: 0,
          gap: "32px",
        }}
      >
        <ListItemLink to="/admin" />
        <ListItemLink to="/admin/colaboradores" />
        <ListItemLink to="/admin/servicios" />
        <ListItemLink to="/admin/clientes" />
        <ListItemLink to="/admin/ajustes" />
      </List>
      <Button sx={{ color: colorPalette.black1 }}>
        <Typography variant="body-normal-bold">Salir de la cuenta</Typography>
      </Button>
    </Box>
  );
};
