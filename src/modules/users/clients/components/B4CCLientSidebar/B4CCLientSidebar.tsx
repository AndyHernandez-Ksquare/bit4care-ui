import { ListItemLink } from "./ListItemLink";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Button, List, Typography } from "@mui/material";
import React from "react";

export const B4CCLientSidebar = () => {
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
