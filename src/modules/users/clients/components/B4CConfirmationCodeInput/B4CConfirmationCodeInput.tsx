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
import { useState } from "react";
import { formatPhoneNumber } from "../B4CSignupSteps/B4CSignupSteps";

export const B4CConfirmationCodeInput = ({
  countryCode,
  phoneNumber,
  confirmation,
  setActiveStep,
  setConfirmation,
}: B4CConfirmationCodeInputProps) => {
  const [inputCode, setInputCode] = useState(""); // Estado para el código ingresado
  const [generatedCode] = useState("123456"); // Código de confirmación simulado
  const [loading, setLoading] = useState(false); // Estado para el spinner
  const [error, setError] = useState(""); // Estado para el mensaje de error

  // Manejo del timeout para simular la confirmación del número
  const handleConfirmCode = () => {
    setLoading(true); // Mostrar spinner
    setError(""); // Limpiar el error previo

    setTimeout(() => {
      setLoading(false); // Ocultar spinner

      if (inputCode === generatedCode) {
        setConfirmation(true); // Cambia a true si el código coincide
        setTimeout(() => {
          setActiveStep(2);
        }, 3000); // Avanzar al siguiente paso
      } else {
        setError("El código es incorrecto. Inténtalo de nuevo."); // Mostrar error
      }
    }, 3000); // Simular un delay de 3 segundos
  };

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
            error={!!error} // Muestra error si existe
            helperText={error}
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
          >
            Enviar otra vez
          </Button>
        </Grid>
      </Grid>
      <B4CButton
        disabled={loading || confirmation || inputCode.length === 0}
        isLoading={loading}
        label={confirmation ? "Redirigiendo..." : "Confirmar"}
        variant="primary"
        onClick={handleConfirmCode}
        size={Size.Small}
      />
    </>
  );
};
