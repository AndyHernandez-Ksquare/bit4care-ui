import { B4CLogo } from "@/assets/images/B4CLogo";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { spacings } from "@/style/partials/spacings";
import { colorPalette } from "@/style/partials/colorPalette";
import { navigationTabs } from "@/constants/navigationMap";

export const B4CSidebar = () => {
  const [router, setRouter] = useState("/");
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
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          paddingInline: 0,
          gap: "32px",
        }}
      >
        {navigationTabs.map(({ label, route }, index) => {
          return (
            <li
              key={`${label.toLocaleLowerCase()}-${index}`}
              onClick={() => {
                setRouter(route);
              }}
              style={{
                display: "flex",
              }}
            >
              {/* <Link
                href={route}
                style={{
                  width: "100%",
                  paddingBlock: spacings.spacing2,
                  borderRadius: "8px",
                  textDecoration: "none",
                  paddingLeft: spacings.spacing6,
                  color:
                    router === route
                      ? colorPalette.primary
                      : colorPalette.black1,
                  display: "flex",
                  alignItems: "left",
                  ...(router === route && {
                    backgroundColor: colorPalette.white,
                  }),
                }}
              >
                <Typography variant="body-normal-bold">{label}</Typography>
              </Link> */}
            </li>
          );
        })}
      </ul>
      <Button sx={{ color: colorPalette.black1 }}>
        <Typography variant="body-normal-bold">Salir de la cuenta</Typography>
      </Button>
    </Box>
  );
};
