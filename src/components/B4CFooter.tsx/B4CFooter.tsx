import { Box, IconButton, Link, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { colorPalette } from "@/style/partials/colorPalette";

export const B4CFooter = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 40px",
        backgroundColor: colorPalette.grey1,
        flexDirection: { xs: "column-reverse", tablet: "row" },
        textAlign: { xs: "center", tablet: "left" },
        gap: 16,
      }}
    >
      <Box>
        <Typography
          sx={{
            color: colorPalette.white,
          }}
        >
          © 2025 Bid4Care. Todos los derechos reservados
        </Typography>
      </Box>
      <Box
        display={"flex"}
        gap={{
          xs: 12,
          tablet: 30,
        }}
        flexDirection={{ xs: "column-reverse", tablet: "row" }}
      >
        <Link
          href="/terminos-y-condiciones"
          sx={{
            textDecoration: "none",
            color: colorPalette.white,
          }}
        >
          <Typography>Términos y Condiciones</Typography>
        </Link>
        <Link
          href="/politica-de-privacidad"
          sx={{
            textDecoration: "none",
            color: colorPalette.white,
          }}
        >
          <Typography>Política de Privacidad</Typography>
        </Link>
      </Box>
      <Box display={"flex"} gap={16}>
        <IconButton
          sx={{
            backgroundColor: colorPalette.grey3,
            color: colorPalette.white,
          }}
          href="https://www.youtube.com/"
          target="_blank"
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: colorPalette.grey3,
            color: colorPalette.white,
          }}
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
