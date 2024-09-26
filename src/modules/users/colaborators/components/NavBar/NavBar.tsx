import { B4CLogo } from "@/assets/images/B4CLogo";
import { B4CAvatar } from "@/components/SmallElements/B4CAvatar";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { HamburgerMenu } from "@/assets/svgIcons/hamburgerMenu/HamburgerMenu";
import "./NavBar.css";

interface NavBarProps {
  toggleDrawer: (newOpen: boolean) => () => void;
}

export const NavBar = ({ toggleDrawer }: NavBarProps) => (
  <AppBar sx={{ height: 100, position: "fixed" }}>
    <Toolbar sx={{ height: 1, justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1580,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <B4CLogo />
        <B4CAvatar className="avatar" width={40} height={40} imageLink={""} />
        <IconButton
          className="mobile-menu"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <HamburgerMenu />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);
