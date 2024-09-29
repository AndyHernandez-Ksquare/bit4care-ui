import { AdminLayoutBlob } from "@/assets/svgIcons/backgroundIcons/AdminLayoutBlob";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import { B4CFogetPasswordSteps } from "../../components/B4CFogetPasswordSteps";

export const ClientsForgotPassword = () => {
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
      <Box sx={{ marginInline: "auto", marginTop: "200px", zIndex: 1 }}>
        <B4CFogetPasswordSteps />
      </Box>
    </Box>
  );
};
