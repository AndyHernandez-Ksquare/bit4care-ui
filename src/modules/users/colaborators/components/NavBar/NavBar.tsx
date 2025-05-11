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
import { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { B4CButton } from "@/components/B4CButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemLink } from "../B4CSidebar/ListItemLink";
import { useCollaboratorSession } from "@/context/auth/constants/useCollabSession";
import { GetSelfCollab } from "@/services/careerServices/CareerServices";
import { useFileUrlsByUser } from "@/context/api/hooks/file/useFileUrlsByUser";

export const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { token, setToken } = useCollaboratorSession();

  // 1️⃣ Estado local para guardar el collaboratorId
  const [collabId, setCollabId] = useState<number | null>(null);

  // 2️⃣ Llamamos siempre el hook (no dentro de useEffect)
  const { data: fileUrls, loading: filesLoading } = useFileUrlsByUser(collabId);

  // 3️⃣ Estado para la URL de perfil final
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
  };

  const toggleDrawer = (open: boolean) => (e: KeyboardEvent | MouseEvent) => {
    if (
      e.type === "keydown" &&
      ((e as KeyboardEvent).key === "Tab" ||
        (e as KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // ── 4️⃣ Cargar datos “self” y extraer collaboratorId ──
  useEffect(() => {
    if (!token) return;
    const fetchSelf = async () => {
      try {
        const self = await GetSelfCollab(token);
        if (!self) return;
        setCollabId(self.id);
      } catch (err) {
        console.error("No se pudo cargar el perfil del colaborador:", err);
      }
    };
    fetchSelf();
  }, [token]);

  // ── 5️⃣ Cuando cambien las URLs, buscamos la que tenga is_profile_pic === true ──
  useEffect(() => {
    if (!fileUrls) return;
    const profile = fileUrls.find((f) => f.is_profile_pic);
    if (profile) setAvatarUrl(profile.url);
  }, [fileUrls]);

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
              <B4CAvatar width={40} height={40} imageLink={avatarUrl} />
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
