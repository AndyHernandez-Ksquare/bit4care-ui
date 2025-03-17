import { B4CButton } from "@/components/B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Size } from "@/ts/enums";
import { getHourlyRate } from "../utils/getHourlyRate";

interface SubmitNewApplicationProps {
  validForm?: boolean;
  offerPrice: number;
  professionalNeeded: boolean; // true = Enfermero, false = Cuidador sin título
  hoursWorked: number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: () => void;
  onBlur?:
    | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

export const SubmitNewApplication = ({
  validForm = true,
  offerPrice,
  professionalNeeded,
  hoursWorked,
  onBlur,
  onChange,
  onSubmit,
}: SubmitNewApplicationProps) => {
  const hourlyRate = getHourlyRate(professionalNeeded, hoursWorked);

  // Calcular tarifa total
  const totalPrice = hourlyRate * hoursWorked;
  const minAllowedPrice = totalPrice * 0.85; // 15% menor al precio total
  const isValidAmount = offerPrice !== null && offerPrice >= minAllowedPrice;

  return (
    <Box
      sx={{
        border: `1px solid ${colorPalette.secondary}`,
        padding: "1.5rem",
        marginTop: "2rem",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: colorPalette.white,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Typography typography="body-normal-bold" color={colorPalette.primary}>
          Pago mínimo sugerido
        </Typography>
        <Typography typography="body-large-bold" color={colorPalette.grey1}>
          ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}
      >
        <Typography typography="body-normal-bold" color={colorPalette.primary}>
          Precio ofertado
        </Typography>
        <Typography typography="body-large-bold" color={colorPalette.grey1}>
          ${offerPrice ? offerPrice.toFixed(2) : `0.00`}
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          id="amount"
          name="amount"
          type="number"
          value={offerPrice}
          onChange={onChange}
          onBlur={onBlur}
          error={!isValidAmount}
          helperText={
            !isValidAmount
              ? `La oferta no puede ser menor a $${minAllowedPrice.toFixed(2)}`
              : ""
          }
        />
      </FormControl>
      <Box display={"flex"} sx={{ gap: 8 }}>
        <InfoOutlinedIcon sx={{ color: colorPalette.primary }} />
        <Typography typography={"body-small"} color={colorPalette.grey3}>
          El precio recomendado puede ser hasta menos 15% sobre el precio mínimo
          sugerido.
        </Typography>
      </Box>
      <B4CButton
        label="Enviar"
        disabled={!validForm}
        isSubmit
        size={Size.Small}
        onClick={onSubmit}
      />
      <Box display={"flex"} sx={{ gap: 8 }}>
        <InfoOutlinedIcon sx={{ color: colorPalette.primary }} />
        <Typography typography={"body-small"} color={colorPalette.grey3}>
          Tu solicitud será enviada a los cuidadores disponibles, cuando alguno
          acepte, deberás confirmar el servicio mediante el pago del mismo.
        </Typography>
      </Box>
      <B4CButton label="Cancelar" variant="secondary" size={Size.Small} />
    </Box>
  );
};
