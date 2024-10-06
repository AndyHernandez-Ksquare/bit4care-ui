import { B4CLogo } from "@/assets/images/B4CLogo";
import { B4CAvatar } from "@/components/SmallElements/B4CAvatar";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { HamburgerMenu } from "@/assets/svgIcons/hamburgerMenu/HamburgerMenu";
import { colorPalette } from "@/style/partials/colorPalette";

interface NavBarProps {
  toggleDrawer: (newOpen: boolean) => () => void;
  alternative?: boolean;
}

export const NavBar = ({ toggleDrawer, alternative = false }: NavBarProps) => (
  <AppBar
    sx={{
      height: 90,
      backgroundColor: alternative ? colorPalette.white : colorPalette.primary,
    }}
  >
    <Toolbar sx={{ height: 1, justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1580,
          display: "flex",
          justifyContent: alternative
            ? {
                xs: "center",
                tablet: "space-between",
              }
            : "space-between",
          alignItems: "center",
          margin: { xs: "0 20px", tablet: "0 40px" },
        }}
      >
        <a href="/">
          <B4CLogo alternative={alternative} />
        </a>
        {!alternative && (
          <>
            <Box
              sx={{
                alignItems: "center",
                display: {
                  mobile: "none",
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
              <HamburgerMenu />
            </IconButton>
          </>
        )}
      </Box>
    </Toolbar>
  </AppBar>
);
