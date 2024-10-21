import "./B4CMobileSidebar.css";
import { Box, Drawer, List } from "@mui/material";
import { ListItemLink } from "../B4CSidebar/ListItemLink";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CButton } from "@/components/B4CButton";
import LogoutIcon from "@mui/icons-material/Logout";

interface B4CMobileSidebarProps {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export const B4CMobileSidebar = ({
  open,
  toggleDrawer,
}: B4CMobileSidebarProps) => {
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="Hola"
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <ListItemLink to="/colaborador" />
        <ListItemLink to="/colaborador/ajustes-y-perfil" />
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
  return (
    <Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};
