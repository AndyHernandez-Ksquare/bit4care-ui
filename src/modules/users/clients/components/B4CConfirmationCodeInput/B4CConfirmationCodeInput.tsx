import { EditFieldIcons } from "@/assets/svgIcons/editIcons/EditFieldIcons";
import ReplayIcon from "@mui/icons-material/Replay";
import { B4CButton } from "@/components/B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import { B4CConfirmationCodeInputProps } from "@/ts/types/components/B4CConfirmationCodeInput.type";
import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid2 as Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { formatPhoneNumber } from "../B4CSignupSteps/B4CSignupSteps";
import { useValidationCode } from "@/context/api/hooks/useValidationCode";
import { SendOtpBodyRequest } from "@/ts/types/api/metaRequest/SendOtp.type";

export const B4CConfirmationCodeInput = ({
  countryCode,
  phoneNumber,
  confirmation,
  setActiveStep,
  setConfirmation,
}: B4CConfirmationCodeInputProps) => {
  const [inputCode, setInputCode] = useState(""); // Estado para el código ingresado
  const {
    sendOtp,
    sending,
    sendError,
    sent,
    verifyOtp,
    verifying,
    verifyError,
    verified,
  } = useValidationCode(); // Código de confirmación simulado

  // Manejo del timeout para simular la confirmación del número
  const handleConfirmCode = async () => {
    // Disparamos la verificación contra el backend
    try {
      await verifyOtp(`${countryCode}${phoneNumber}`, inputCode);
      // Si todo OK:
      setConfirmation(true);
      setActiveStep(2);
    } catch {
      // El hook ya guarda el mensaje en verifyError
    }
  };

  useEffect(() => {
    if (phoneNumber) {
      const requestBody: SendOtpBodyRequest = {
        recipient: `${countryCode}${phoneNumber}`,
      };

      sendOtp(requestBody.recipient); // Enviar el código de validación
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid
        container
        spacing={12}
        sx={{
          marginLeft: 0,
          border: `1px solid ${confirmation ? colorPalette.success : "#BDBDBD"}`,
          borderRadius: "8px",
          width: "100%",
          overflow: "hidden",
          paddingBlock: "0.75rem",
          paddingInline: "1rem",
        }}
      >
        <Grid size={{ xs: 12 }}>
          <Typography variant="body-normal">{`${countryCode} ${formatPhoneNumber(phoneNumber)}`}</Typography>
        </Grid>
        <Grid size={{ xs: 12, desktop: 11 }}>
          {confirmation ? (
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <Check sx={{ color: colorPalette.success }} />
              <Typography
                sx={{ color: colorPalette.success }}
              >{`Numero confirmado`}</Typography>
            </Box>
          ) : (
            <Typography sx={{ color: "#575F6E" }}>
              {" "}
              {`Numero aun no confirmado`}
            </Typography>
          )}
        </Grid>
        {!confirmation && (
          <Grid size={{ xs: 12, desktop: 1 }}>
            <IconButton onClick={() => setActiveStep(0)}>
              <EditFieldIcons />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        spacing={8}
        sx={{
          marginLeft: 0,
          width: "100%",
        }}
      >
        <Grid
          size={{ xs: 12, desktop: 8 }}
          sx={{ paddingLeft: "0px!important" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Código de confirmación"
            sx={{ marginBlock: "auto" }}
            onChange={(event) => setInputCode(event.target.value)}
            error={!!verifyError} // Muestra error si existe
            helperText={verifyError}
          />
          <Typography variant="body-normal" sx={{ color: "#575F6E" }}>
            Confirma tu número de teléfono con el código del mensaje de texto
            (SMS)
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, desktop: 4 }}>
          <Button
            disabled={confirmation}
            startIcon={<ReplayIcon />}
            sx={{
              boxShadow: "none",
              textTransform: "none",
              color: "#2F80ED",
              "&:hover": {
                backgroundColor: "white",
                boxShadow: "none",
                fontWeight: "600",
              },
            }}
            onClick={() => sendOtp(`${countryCode}${phoneNumber}`)}
          >
            {sending ? "Reenviando…" : "Enviar otra vez"}
          </Button>
          {sendError && (
            <Typography color="error" variant="caption">
              {sendError}
            </Typography>
          )}
        </Grid>
      </Grid>
      <B4CButton
        disabled={sending || confirmation || inputCode.length === 0}
        isLoading={sending}
        label={confirmation ? "Redirigiendo..." : "Confirmar"}
        variant="primary"
        onClick={handleConfirmCode}
        size={Size.Small}
      />
    </>
  );
};
