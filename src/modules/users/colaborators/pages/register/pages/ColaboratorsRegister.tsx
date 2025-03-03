import { useState } from "react";
import SnackbarBlock from "@/components/B4CSnackBarBlock";
import { Box, Typography } from "@mui/material";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CStepper } from "@/components/B4CStepper";
import { B4CButton } from "@/components/B4CButton";
import { RegisterForm } from "../components/Form-1";
import { RegisterFormPart2 } from "../components/Form-2";
import { RegisterFormPart3 } from "../components/Form-3";
import { assembleRequestData } from "../functions/assemblyForm";
import { FormData1, FormData2 } from "@/ts/types/api/collaborator/requestData";
import { Layout } from "../components/Layout";
import { useCreateCarerProfile } from "@/context/api/hooks/useCreateCarerProfile";

function ColaboratorsRegister() {
  const [canContinue, setCanContinue] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const { createCarerProfile } = useCreateCarerProfile();

  const [formDataStep1, setFormDataStep1] = useState<FormData1>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    direction: "",
    gender: "",
    maritalStatus: "",
    nacionality: "",
    postalCode: "",
    neighborhood: "",
    state: "",
  });
  const [formDataStep2, setFormDataStep2] = useState<FormData2>({
    curp: "",
    rfc: "",
    nss: "",
    driversLicense: "",
    experienceYears: "",
    specialities: [],
    motivationLetter: "",
  });

  const handleContinue = async () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2) {
      const requestData = assembleRequestData(formDataStep1, formDataStep2);
      try {
        const response = await createCarerProfile(requestData);
        console.log("Registro exitoso:", response);
      } catch (error) {
        console.error("Error en el registro:", error);
      }
    }
  };

  return (
    <Layout>
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
          <RegisterForm
            onFormValidChange={setCanContinue}
            onFormDataChange={setFormDataStep1}
          />
        )}
        {currentStep === 1 && (
          <RegisterFormPart2
            onFormValidChange={setCanContinue}
            onFormDataChange={setFormDataStep2}
          />
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
    </Layout>
  );
}

export default ColaboratorsRegister;
