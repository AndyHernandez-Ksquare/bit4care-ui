import { useState } from "react";
import SnackbarBlock from "@/components/B4CSnackBarBlock";
import { Box, Typography } from "@mui/material";
import { RegisterForm } from "../components/Form";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CStepper } from "@/components/B4CStepper";
import { B4CButton } from "@/components/B4CButton";

function ColaboratorsRegister() {
  const [canContinue, setCanContinue] = useState(false);

  return (
    <>
      <Box>
        <Box
          sx={{
            maxWidth: 200,
            display: "flex",
            justifyContent: "flex-start",
            mb: 24,
            ml: -20,
          }}
        >
          <B4CStepper
            activeStep={1}
            steps={["Paso 1", "Paso 2", "Paso 3"]}
            spacing={2}
          />
        </Box>
        <Typography variant="h4" gutterBottom>
          Solicitud de Colaborador(a)
        </Typography>
        <Typography variant="subtitle1" mt={24}>
          Completa el siguiente formulario para solicitar tu registro en nuestra
          plataforma.
        </Typography>
      </Box>
      <Box sx={{ mt: 24, width: "100%", p: 12 }}>
        <SnackbarBlock />
      </Box>
      <Box
        sx={{
          mt: 24,
          width: "100%",
          p: 12,
          border: `1px solid ${colorPalette.grey4}`,
          borderRadius: "8px",
        }}
      >
        {/* Formulario */}
        <RegisterForm onFormValidChange={setCanContinue} />
      </Box>
      <Box mt={24}>
        <B4CButton label="Continuar con la solicitud" disabled={!canContinue} />
      </Box>
    </>
  );
}

export default ColaboratorsRegister;
