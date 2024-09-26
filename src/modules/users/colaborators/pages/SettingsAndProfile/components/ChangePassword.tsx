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
} from "@mui/material";
import { useEffect, useState } from "react";
import { NewPasswordInput } from "./NewPasswordInput";

interface ChangePasswordProps {
  open: boolean;
  onClose: () => void;
}

export const ChangePassword = ({ open, onClose }: ChangePasswordProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);

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
          {activeStep === 0 && <NewPasswordInput />}
          {activeStep === 1 && <div>hola</div>}
        </Box>
      </DialogContent>
      <DialogActions>
        {activeStep === 0 && (
          <B4CButton
            fullWidth
            label="Confirmar"
            variant="primary"
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
