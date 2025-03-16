import { B4CLogo } from "@/assets/images/B4CLogo";
import { B4CAvatar } from "@/components/SmallElements/B4CAvatar";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import { useState, KeyboardEvent, MouseEvent } from "react";

interface NavBarProps {
  alternative?: boolean;
}

export const B4CLandingPageNavBar = ({ alternative = false }: NavBarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      <AppBar
        sx={{
          height: 90,
          backgroundColor: alternative
            ? colorPalette.white
            : colorPalette.primary,
        }}
      >
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
              <B4CLogo alternative={alternative} />
            </Link>
            <Box
              sx={{
                alignItems: "center",
                display: {
                  xs: "none",
                  tablet: "flex",
                },
              }}
            >
              {alternative ? (
                <Box display={"flex"} gap={12}>
                  <B4CButton
                    label="Portal de Colaborador"
                    size={Size.Small}
                    variant="secondary"
                    labelColor={colorPalette.info}
                    href="/colaborador"
                    sx={{
                      maxWidth: 280,
                      textWrap: "nowrap",
                      background: `${colorPalette.info}33`,
                    }}
                  />
                  <B4CButton
                    label="Portal de Cliente"
                    size={Size.Small}
                    href="/cliente"
                    sx={{
                      maxWidth: 280,
                      textWrap: "nowrap",
                      background: colorPalette.info,
                    }}
                  />
                </Box>
              ) : (
                <B4CAvatar width={40} height={40} imageLink={""} />
              )}
            </Box>

            <IconButton
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: {
                  xs: "block",
                  tablet: "none",
                },
              }}
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  color: alternative
                    ? colorPalette.primary
                    : colorPalette.white,
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          p={12}
          maxHeight={50}
        >
          <B4CLogo alternative={alternative} />
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          width={"100vw"}
          height={"100vh"}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"-50px"}
        >
          <List>
            {alternative ? (
              <>
                <ListItem>
                  <B4CButton
                    label="Portal de Colaborador"
                    size={Size.Small}
                    variant="secondary"
                    fullWidth
                    labelColor={colorPalette.info}
                    href="/colaborador"
                    sx={{
                      maxWidth: 280,
                      textWrap: "nowrap",
                      background: `${colorPalette.info}33`,
                    }}
                  />
                </ListItem>
                <ListItem>
                  <B4CButton
                    label="Portal de Cliente"
                    size={Size.Small}
                    fullWidth
                    href="/cliente"
                    sx={{
                      maxWidth: 280,
                      textWrap: "nowrap",
                      background: colorPalette.info,
                    }}
                  />
                </ListItem>
              </>
            ) : (
              <ListItem>
                <ListItemText primary="Perfil" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
