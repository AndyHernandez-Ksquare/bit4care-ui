import { B4CLogo } from "@/assets/images/B4CLogo";
import { B4CAvatar } from "@/components/SmallElements/B4CAvatar";
import { AppBar, Box, Toolbar, Link, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { colorPalette } from "@/style/partials/colorPalette";
import { useState, KeyboardEvent, MouseEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ClientsNavbar.css";

export const ClientsNavbar = () => {
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
                display: {
                  xs: "none",
                  tablet: "flex",
                },
              }}
            >
              <B4CAvatar width={40} height={40} imageLink={""} />
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
                  color: colorPalette.white,
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
          <B4CLogo alternative={true} />
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
        ></Box>
      </Drawer>
    </>
  );
};
