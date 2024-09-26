import React from "react";
import "./B4CMobileSidebar.css";
import { Box, Button, Drawer, List, Typography } from "@mui/material";
import { ListItemLink } from "../B4CSidebar/ListItemLink";
import { colorPalette } from "@/style/partials/colorPalette";

interface B4CMobileSidebarProps {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export const B4CMobileSidebar = ({
  open,
  toggleDrawer,
}: B4CMobileSidebarProps) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
        <Button sx={{ color: colorPalette.black1 }}>
          <Typography variant="body-normal-bold">Salir de la cuenta</Typography>
        </Button>
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
