import { B4CDragNDrop } from "@/components/B4CDragNDrop";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";

interface RegisterFormProps {
  onFormValidChange: (isValid: boolean) => void;
}

export const RegisterFormPart3 = ({ onFormValidChange }: RegisterFormProps) => {
  const idAccepted = true;
  const videoAccepted = true;

  const isFormValid = idAccepted && videoAccepted;

  onFormValidChange(isFormValid);

  return (
    <Box
      component={"form"}
      onSubmit={() => console.log("Enviar formulario")}
      sx={{ px: 12, py: 24 }}
    >
      <Typography>
        Por último, necesitamos verificar tu identidad. Por favor, ingresa una
        imagen de buena calidad de tu identificación oficial y sube un video
        breve de ti (30 seg) hablando del porqué te gustaría ser parte de
        Bid4Care.
      </Typography>

      <Box
        mt={24}
        display={"flex"}
        flexDirection={"column"}
        gap={16}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="body-large-bold" color={colorPalette.black1}>
            Documento de Identificación Oficial
          </Typography>
        </Box>

        <B4CDragNDrop />
      </Box>
      <Box
        mt={24}
        display={"flex"}
        flexDirection={"column"}
        gap={16}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="body-large-bold" color={colorPalette.black1}>
            Video sobre motivación para ser parte de Bid4Care
          </Typography>
        </Box>

        <B4CDragNDrop type="video" />
      </Box>
    </Box>
  );
};
