import { B4CDragPhotoItem } from "@/components/B4CDragPhotoItem";
import { Box, Typography } from "@mui/material";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CButton } from "@/components/B4CButton";

export const B4CClientProfileSettings = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        width: "100%",
      }}
    >
      <Typography>Tu foto de perfil</Typography>
      <B4CDragPhotoItem />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          width: "100%",
        }}
      >
        <B4CTextfield
          label="Nombre completo"
          placeholder="Por favor ingresa tu nombre completo"
          sx={{ width: "50%" }}
        ></B4CTextfield>
        <B4CTextfield
          label="Dirección"
          placeholder="Por favor ingresa tu dirección"
          sx={{ width: "50%" }}
        ></B4CTextfield>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
        <B4CTextfield
          label="Correo electrónico"
          placeholder="Por favor ingresa tu correo electrónico"
          sx={{ width: "50%" }}
        ></B4CTextfield>
        <B4CTextfield
          label="Número de teléfono"
          placeholder="Por favor ingresa tu número de teléfono"
          sx={{ width: "50%" }}
        ></B4CTextfield>
      </Box>
      <B4CButton label="Actualizar datos de cuenta"></B4CButton>
    </Box>
  );
};
