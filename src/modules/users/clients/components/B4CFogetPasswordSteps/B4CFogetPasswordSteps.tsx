import { B4CButton } from "@/components/B4CButton";
import { B4CStepper } from "@/components/B4CStepper";
import { B4CTextfield } from "@/components/B4CTextfield";
import { Size } from "@/ts/enums";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";

export const B4CFogetPasswordSteps = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const handleSendCode = () => {
    // Aquí puedes manejar la lógica para enviar el código de verificación

    handleActiveStep(1);
  };

  const steps = ["paso1", "paso2"];

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
          marginLeft: "-48px",
        }}
      >
        <B4CStepper activeStep={activeStep} steps={steps} />
      </Box>
      {activeStep === 0 && (
        <Fragment>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography variant="h4">¿Olvidaste tu contraseña?</Typography>
            <Typography variant="body-medium">
              No te preocupes, te ayudaremos a recuperar el acceso.
            </Typography>
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
            <Grid size={{ xs: 12 }}>
              <B4CTextfield label="Ingresa tu electrónico registrado" />
            </Grid>
          </Grid>

          <B4CButton
            label="Enviar enlace de recuperación"
            variant="primary"
            size={Size.Small}
            onClick={handleSendCode}
            sx={{ width: "100%" }}
          />
        </Fragment>
      )}
      {activeStep === 1 && (
        <Fragment>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography variant="h4">Crea una nueva contraseña</Typography>
            <Typography variant="body-medium">
              Recupera tu acceso creando una nueva contraseña para ingresar a tu
              cuenta de Bid4me.
            </Typography>
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
            <Grid size={{ xs: 12 }}>
              <B4CTextfield label="Contraseña" isPassword />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <B4CTextfield label="Contraseña" isPassword />
            </Grid>
          </Grid>
          <B4CButton
            label="Entrar a cuenta"
            variant="primary"
            size={Size.Small}
            sx={{ width: "100%" }}
          />
        </Fragment>
      )}
    </Box>
  );
};
