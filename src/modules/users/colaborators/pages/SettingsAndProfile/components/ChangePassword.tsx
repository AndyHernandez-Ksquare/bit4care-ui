import { CloseIcon } from "@/assets/svgIcons/closeIcons/CloseIcon";
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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { PhoneInput } from "./PhoneInput";
import { CodeInput } from "./CodeInput";

interface ChangePasswordProps {
  open: boolean;
  onClose: () => void;
}

export const ChangePassword = ({ open, onClose }: ChangePasswordProps) => {
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleCountryCodeChange = (event: SelectChangeEvent<string>) => {
    setCountryCode(event.target.value as string);
  };

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleSendCode = () => {
    // Aquí puedes manejar la lógica para enviar el código de verificación
    console.log(`Country Code: ${countryCode}, Phone Number: ${phoneNumber}`);
    handleActiveStep(1);
  };
  const steps = ["paso1", "paso2"];

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
          padding: "40px", // Agrega cualquier estilo adicional aquí
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
              Crea una nueva contraseña
            </Typography>

            <Typography variant="body1" gutterBottom>
              Usa tu antigua contraseña para autenticar y poder crear una nueva
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
        </Box>
      </DialogContent>
      <DialogActions>
        {activeStep === 0 && (
          <B4CButton
            label="Confirmar"
            variant="primary"
            onClick={handleSendCode}
            size={Size.Small}
          />
        )}
        {activeStep === 1 && (
          <B4CButton
            label="Regresar a ajustes"
            variant="primary"
            onClick={onClose}
            size={Size.Small}
          />
        )}
      </DialogActions>
    </Dialog>
  );
};
