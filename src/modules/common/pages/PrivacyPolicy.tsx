import { B4CFooter } from "@/components/B4CFooter.tsx";
import { NavBar } from "@/modules/users/colaborators/components/NavBar/NavBar";
import { PrivacyPolicy } from "@/modules/users/colaborators/pages/register/components/privacyPolicyText";

import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";

export const PrivacyPolicyPage = () => {
  return (
    <>
      <Box
        sx={{
          background: colorPalette.backgroundLinearGradient,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <NavBar alternative />
        <Box mt={60} textAlign="center">
          <Typography variant="h4" gutterBottom mt={90}>
            Política de Privacidad
          </Typography>
          <Typography variant="body-normal" gutterBottom mt={90}>
            Protección y transparencia de tu información personal.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          mt={25}
          sx={{
            maxHeight: 500,
            padding: 30,
            gap: 12,
            maxWidth: 1100,
            backgroundColor: colorPalette.white,
            borderRadius: 8,
          }}
        >
          <PrivacyPolicy />
        </Box>
      </Box>
      <Box mt={"auto"}>
        <B4CFooter />
      </Box>
    </>
  );
};
