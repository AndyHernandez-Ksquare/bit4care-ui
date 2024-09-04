import { B4CLogo } from "@/assets/images/B4CLogo";
import { B4CAvatar } from "@/components/SmallElements/B4CAvatar";
import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

export const NavBar = () => (
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
        <B4CAvatar width={40} height={40} imageLink={""} />
      </Box>
    </Toolbar>
  </AppBar>
);
