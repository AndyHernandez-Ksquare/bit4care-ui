import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import { B4CSignupSteps } from "../../components/B4CSignupSteps";
import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";

export const ClientsSignup = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(#E4EEFC, ${colorPalette.white})`,
        display: "flex",
        flex: 1,
        height: "100%",
        flexDirection: "column",
      }}
    >
      <AdminLayoutBlob />
      <Box sx={{ margin: "auto" }}>
        <B4CSignupSteps />
      </Box>
    </Box>
  );
};
