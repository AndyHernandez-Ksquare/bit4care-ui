import { B4CButton } from "@/components/B4CButton";
import { B4CPhoneInput } from "@/components/B4CPhoneInput";
import { B4CStepper } from "@/components/B4CStepper";
import { Size } from "@/ts/enums";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useState } from "react";
import { B4CConfirmationCodeInput } from "../B4CConfirmationCodeInput";
import { B4CTextfield } from "@/components/B4CTextfield";
import { useFormik } from "formik";
import { phoneValidationSchema } from "./validators/phoneValidationSchema";

export const B4CSignupSteps = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const steps = ["paso1", "paso2", "paso3"];

  const formik = useFormik({
    initialValues: {
      countryCode: "+52", // Default country code
      phoneNumber: "",
    },
    validationSchema: phoneValidationSchema,
    onSubmit: ({ countryCode, phoneNumber }) => {
      // Handle form submission
      console.log("Form Submitted:", `${countryCode}${phoneNumber}`);
      handleActiveStep(1);
    },
  });

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const handleConfirm = () => {
    handleActiveStep(2);
  };

  return (
    <Box
      sx={{
        maxWidth: "536px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: { xs: "center", desktop: "start" },
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          marginLeft: { xs: "0", desktop: "-32px" },
        }}
      >
        <B4CStepper activeStep={activeStep} steps={steps} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: { xs: "center", desktop: "start" },
          justifyContent: { xs: "center", desktop: "start" },
        }}
      >
        <Typography variant="h4">Registro de cliente</Typography>
        <Typography
          variant="body-medium"
          sx={{ textAlign: { xs: "center", desktop: "start" } }}
        >
          Rellena los datos de registro. Tomará un par de minutos. Todo lo que
          necesitas es un número de teléfono y un correo electrónico.
        </Typography>
      </Box>
      {activeStep === 0 && (
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <B4CPhoneInput
            countryCode={formik.values.countryCode}
            phoneNumber={formik.values.phoneNumber}
            phoneNumberError={formik.errors.phoneNumber}
            handleCountryCodeChange={(e) => {
              formik.setFieldValue("countryCode", e.target.value);
            }}
            handlePhoneNumberChange={(e) => {
              formik.setFieldValue("phoneNumber", e.target.value);
            }}
          />
          <B4CButton
            isSubmit
            label="Enviar código"
            variant="primary"
            disabled={!formik.isValid || !formik.dirty}
            size={Size.Small}
          />
        </form>
      )}
      {activeStep === 1 && (
        <>
          <B4CConfirmationCodeInput
            confirmation={confirmation}
            countryCode={formik.values.countryCode}
            phoneNumber={formik.values.phoneNumber}
            setActiveStep={setActiveStep}
            setConfirmation={setConfirmation}
          />
        </>
      )}
      {activeStep === 2 && (
        <>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <Grid
              container
              spacing={8}
              sx={{
                border: `1px solid #E2E4E5`,
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Grid size={{ xs: 12 }}>
                <B4CTextfield label="Nombre(s)" />
              </Grid>
              <Grid size={{ xs: 12, desktop: 6 }}>
                <B4CTextfield label="Apellido paterno" />
              </Grid>
              <Grid size={{ xs: 12, desktop: 6 }}>
                <B4CTextfield label="Apellido materno" />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={8}
              sx={{
                border: `1px solid #E2E4E5`,
                padding: "16px",
                borderRadius: "8px",
              }}
              justifyContent={"center"}
            >
              <Grid size={{ xs: 12 }}>
                <B4CTextfield label="Direccion" />
              </Grid>
              <Grid size={{ xs: 12, desktop: 4 }}>
                <B4CTextfield label="Codigo postal" />
              </Grid>
              <Grid size={{ xs: 12, desktop: 4 }}>
                <B4CTextfield label="Estado" />
              </Grid>
              <Grid size={{ xs: 12, desktop: 4 }}>
                <B4CTextfield label="Ciudad" />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={8}
              sx={{
                border: `1px solid #E2E4E5`,
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Grid size={{ xs: 12 }}>
                <B4CTextfield label="Correo electronico" />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={8}
              sx={{
                border: `1px solid #E2E4E5`,
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Grid size={{ xs: 12 }}>
                <B4CTextfield label="Contraseña" isPassword />
              </Grid>
            </Grid>
            <B4CButton
              label="Confirmar"
              variant="primary"
              onClick={handleConfirm}
              size={Size.Small}
            />
          </Box>
        </>
      )}
    </Box>
  );
};
