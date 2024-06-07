import { B4CLogo } from "@/assets/images/B4CLogo";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { colorPalette } from "@/style/partials/colorPalette";
import { Link as RouterLink } from "react-router-dom";

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
        <li>
          <ListItemButton component={RouterLink} to={"/admin"}>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </li>
        <li>
          <ListItemButton component={RouterLink} to={"/admin/colaboradores"}>
            <ListItemText primary={"Colaboradores"} />
          </ListItemButton>
        </li>
        <li>
          <ListItemButton component={RouterLink} to={"/admin/servicios"}>
            <ListItemText primary={"Servicios"} />
          </ListItemButton>
        </li>
        <li>
          <ListItemButton component={RouterLink} to={"/admin/clientes"}>
            <ListItemText primary={"Clientes"} />
          </ListItemButton>
        </li>
        <li>
          <ListItemButton component={RouterLink} to={"/admin/ajustes"}>
            <ListItemText primary={"Ajustes"} />
          </ListItemButton>
        </li>
      </List>
      <Button sx={{ color: colorPalette.black1 }}>
        <Typography variant="body-normal-bold">Salir de la cuenta</Typography>
      </Button>
    </Box>
  );
};
