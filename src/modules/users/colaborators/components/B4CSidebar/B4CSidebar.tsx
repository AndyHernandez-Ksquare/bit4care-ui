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
        <ListItemLink to="/colaborador/perfil&ajustes" />
      </List>
      <Button sx={{ color: colorPalette.black1 }}>
        <Typography variant="body-normal-bold">Salir de la cuenta</Typography>
      </Button>
    </Box>
  );
};
