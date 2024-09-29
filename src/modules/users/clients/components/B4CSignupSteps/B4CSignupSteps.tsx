import { B4CButton } from "@/components/B4CButton";
import { B4CPhoneInput } from "@/components/B4CPhoneInput";
import { B4CStepper } from "@/components/B4CStepper";
import { Size } from "@/ts/enums";
import { Box, Grid, SelectChangeEvent, Typography } from "@mui/material";
import { ChangeEvent, Fragment, useState } from "react";
import { B4CConfirmationCodeInput } from "../B4CConfirmationCodeInput";
import { B4CTextfield } from "@/components/B4CTextfield";

export const B4CSignupSteps = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const handleCountryCodeChange = (event: SelectChangeEvent<string>) => {
    setCountryCode(event.target.value as string);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const steps = ["paso1", "paso2", "paso3"];

  const handleSendCode = () => {
    // Aquí puedes manejar la lógica para enviar el código de verificación
    console.log(`Country Code: ${countryCode}, Phone Number: ${phoneNumber}`);
    handleActiveStep(1);
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
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <B4CStepper activeStep={activeStep} steps={steps} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="h4">Registro de cliente</Typography>
        <Typography variant="body-medium">
          Rellena los datos de registro. Tomará un par de minutos. Todo lo que
          necesitas es un número de teléfono y un correo electrónico.
        </Typography>
      </Box>
      {activeStep === 0 && (
        <Fragment>
          <B4CPhoneInput
            countryCode={countryCode}
            phoneNumber={phoneNumber}
            handleCountryCodeChange={handleCountryCodeChange}
            handlePhoneNumberChange={handlePhoneNumberChange}
          />
          <B4CButton
            label="Enviar código"
            variant="primary"
            onClick={handleSendCode}
            size={Size.Small}
          />
        </Fragment>
      )}
      {activeStep === 1 && (
        <Fragment>
          <B4CConfirmationCodeInput
            countryCode={countryCode}
            phoneNumber={phoneNumber}
          />
          <B4CButton
            label="Confirmar"
            variant="primary"
            onClick={handleConfirm}
            size={Size.Small}
          />
        </Fragment>
      )}
      {activeStep === 2 && (
        <Fragment>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <Box>
              <Grid
                container
                spacing={8}
                sx={{
                  border: `1px solid #E2E4E5`,
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <Grid item xs={12}>
                  <B4CTextfield label="Nombre(s)" />
                </Grid>
                <Grid item xs={12} desktop={6}>
                  <B4CTextfield label="Apellido paterno" />
                </Grid>
                <Grid item xs={12} desktop={6}>
                  <B4CTextfield label="Apellido materno" />
                </Grid>
              </Grid>
            </Box>
            <Box>
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
                <Grid item xs={12}>
                  <B4CTextfield label="Direccion" />
                </Grid>
                <Grid item xs={12} desktop={4}>
                  <B4CTextfield label="Codigo postal" />
                </Grid>
                <Grid item xs={12} desktop={4}>
                  <B4CTextfield label="Estado" />
                </Grid>
                <Grid item xs={12} desktop={4}>
                  <B4CTextfield label="Ciudad" />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid
                container
                spacing={8}
                sx={{
                  border: `1px solid #E2E4E5`,
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <Grid item xs={12}>
                  <B4CTextfield label="Correo electronico" />
                </Grid>
              </Grid>
            </Box>
            <Grid
              container
              spacing={8}
              sx={{
                border: `1px solid #E2E4E5`,
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Grid item xs={12}>
                <B4CTextfield label="Contrase;a" isPassword />
              </Grid>
            </Grid>
            <B4CButton
              label="Confirmar"
              variant="primary"
              onClick={handleConfirm}
              size={Size.Small}
            />
          </Box>
        </Fragment>
      )}
    </Box>
  );
};
