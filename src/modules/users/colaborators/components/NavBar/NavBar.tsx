import { B4CLogo } from "@/assets/images/B4CLogo";
import { B4CAvatar } from "@/components/SmallElements/B4CAvatar";
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Drawer,
  IconButton,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { colorPalette } from "@/style/partials/colorPalette";
import { useState, KeyboardEvent, MouseEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { B4CButton } from "@/components/B4CButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useClientSession } from "@/context/auth/constants/useClientSession";
import { ListItemLink } from "../B4CSidebar/ListItemLink";

export const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { setToken } = useClientSession();

  const handleLogout = (): void => {
    localStorage.clear();
    setToken(null);
  };

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <>
      <AppBar sx={{ height: 100, position: "fixed" }}>
        <Toolbar sx={{ height: 1, justifyContent: "center" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 1580,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: { xs: "0 20px", tablet: "0 40px" },
            }}
          >
            <Link href="/">
              <B4CLogo />
            </Link>
            <Box
              sx={{
                alignItems: "center",
                display: { xs: "none", tablet: "flex" },
              }}
            >
              <B4CAvatar width={40} height={40} imageLink={""} />
            </Box>
            <IconButton
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", tablet: "none" } }}
            >
              <MenuIcon fontSize="large" sx={{ color: colorPalette.white }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {/* Cabecera del Drawer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderBottom: `1px solid ${colorPalette.grey5}`,
          }}
        >
          <B4CLogo alternative={true} />
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        {/* Contenido del Drawer */}
        <Box
          sx={{
            width: "300px",
            height: "calc(100vh - 64px)", // resta la altura de la cabecera
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            <ListItemLink to="/colaborador" label="Solicitudes" />
            <ListItemLink
              to="/colaborador/mis-servicios"
              label="Mis servicios"
            />
            <ListItemLink
              to="/colaborador/ajustes-y-perfil"
              label="Perfil y Ajustes"
            />
          </List>
          <Box sx={{ p: 2 }}>
            <B4CButton
              variant="outlined"
              label="Cerrar Sesión"
              labelColor={colorPalette.primary}
              fullWidth
              startIcon={<LogoutIcon sx={{ color: colorPalette.primary }} />}
              onClick={handleLogout}
              sx={{ textWrap: "nowrap" }}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
