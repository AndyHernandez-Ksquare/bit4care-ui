import { useState } from "react";
import SnackbarBlock from "@/components/B4CSnackBarBlock";
import { Box, Typography } from "@mui/material";
import { RegisterForm } from "../components/Form-1";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CStepper } from "@/components/B4CStepper";
import { B4CButton } from "@/components/B4CButton";
import { RegisterFormPart2 } from "../components/Form-2";
import { RegisterFormPart3 } from "../components/Form-3";

function ColaboratorsRegister() {
  const [canContinue, setCanContinue] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleContinue = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

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
            activeStep={currentStep}
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
      <Box sx={{ mt: 24, p: 12 }}>
        <SnackbarBlock />
      </Box>
      <Box
        sx={{
          mt: 24,
          p: 12,
          border: `1px solid ${colorPalette.grey4}`,
          borderRadius: "8px",
        }}
      >
        {/* Formulario */}
        {currentStep === 0 && (
          <RegisterForm onFormValidChange={setCanContinue} />
        )}
        {currentStep === 1 && (
          <RegisterFormPart2 onFormValidChange={setCanContinue} />
        )}
        {currentStep === 2 && (
          <RegisterFormPart3 onFormValidChange={setCanContinue} />
        )}
      </Box>
      <Box mt={24}>
        <Typography
          variant="body-medium"
          mb={24}
          display={"grid"}
          sx={{
            color: colorPalette.warning,
          }}
        >
          Tu solicitud está sujeta a aprobación.
        </Typography>
        <B4CButton
          label="Continuar con la solicitud"
          disabled={!canContinue}
          onClick={handleContinue}
        />
      </Box>
    </>
  );
}

export default ColaboratorsRegister;
