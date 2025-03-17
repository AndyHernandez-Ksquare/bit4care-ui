import { CloseIcon } from "@/assets/svgIcons/closeIcons/CloseIcon";
import { LockIcon } from "@/assets/svgIcons/lockIcons/LockIcon";
import { B4CButton } from "@/components/B4CButton";
import { B4CStepper } from "@/components/B4CStepper";
import { Size } from "@/ts/enums";
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  SelectChangeEvent,
  Grid2 as Grid,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { PhoneInput } from "./PhoneInput";
import { CodeInput } from "./CodeInput";
import { colorPalette } from "@/style/partials/colorPalette";

interface ChangeMobileNumProps {
  open: boolean;
  onClose: () => void;
}

export const ChangeMobileNum = ({ open, onClose }: ChangeMobileNumProps) => {
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleCountryCodeChange = (event: SelectChangeEvent<string>) => {
    setCountryCode(event.target.value as string);
  };

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSendCode = () => {
    // Aquí puedes manejar la lógica para enviar el código de verificación
    console.log(`Country Code: ${countryCode}, Phone Number: ${phoneNumber}`);
    handleActiveStep(1);
  };
  const steps = ["paso1", "paso2", "paso3"];

  useEffect(() => {
    return () => {
      setActiveStep(0);
    };
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ borderRadius: "32px" }}
      PaperProps={{
        sx: {
          borderRadius: "64px",
          padding: "20px", // Agrega cualquier estilo adicional aquí
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box sx={{ width: "25%" }}>
          <B4CStepper activeStep={activeStep} steps={steps} />
        </Box>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          <Box display="flex" flexDirection={"column"} p={2}>
            <Typography variant="h4" gutterBottom>
              Cambiar número de teléfono
            </Typography>

            <Typography variant="body1" gutterBottom>
              Para cambiar tu número de teléfono es necesario autenticarlo.
              Recibirás un código via SMS para poder realizarlo.
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            mb={2}
            sx={{
              backgroundColor: "#F0F2F4",
              borderRadius: "8px",
              p: "16px",
            }}
          >
            <LockIcon />
            <Typography variant="body2" color="textSecondary" ml={1}>
              Tus datos personales están protegidos de forma segura.
            </Typography>
          </Box>
          {activeStep === 0 && (
            <PhoneInput
              countryCode={countryCode}
              phoneNumber={phoneNumber}
              handleCountryCodeChange={handleCountryCodeChange}
              handlePhoneNumberChange={handlePhoneNumberChange}
            />
          )}
          {activeStep === 1 && (
            <CodeInput countryCode={countryCode} phoneNumber={phoneNumber} />
          )}
          {activeStep === 2 && (
            <Grid
              container
              spacing={16}
              sx={{
                marginLeft: 0,
                maxWidth: "100%",
                border: `1px solid ${colorPalette.success}`,
                borderRadius: "8px",
                width: "100%",
              }}
            >
              <Grid size={{ xs: 12 }} sx={{ display: "flex" }}>
                <Typography>{`${countryCode}-${phoneNumber}`}</Typography>
              </Grid>
              <Grid size={{ xs: 12, desktop: 11 }} sx={{ display: "flex" }}>
                <Typography
                  sx={{ color: colorPalette.success }}
                >{`Numero confirmado`}</Typography>
              </Grid>
            </Grid>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        {activeStep === 0 && (
          <B4CButton
            label="Enviar código"
            variant="primary"
            onClick={handleSendCode}
            size={Size.Small}
          />
        )}
        {activeStep === 1 && (
          <B4CButton
            label="Confirmar"
            variant="primary"
            onClick={() => {
              setActiveStep(2);
            }}
            size={Size.Small}
          />
        )}
        {activeStep === 2 && (
          <B4CButton
            label="Terminar registro"
            variant="primary"
            onClick={onClose}
            size={Size.Small}
          />
        )}
      </DialogActions>
    </Dialog>
  );
};
