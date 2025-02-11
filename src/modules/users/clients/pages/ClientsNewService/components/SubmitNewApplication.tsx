import { B4CButton } from "@/components/B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Size } from "@/ts/enums";
import { useState } from "react";
import { CreateAppReq } from "@/ts/types/api/applicationRequest";

interface SubmitNewApplicationProps {
  professionalNeeded: boolean; // true = Enfermero, false = Cuidador sin título
  hoursWorked: number;
  updateFormData: (key: keyof CreateAppReq, value: any) => void;
  onSubmit: () => void;
}

const getHourlyRate = (isNurse: boolean, hours: number) => {
  if (isNurse) {
    if (hours >= 1 && hours <= 6) return 189;
    if (hours >= 7 && hours <= 12) return 172;
    return 155;
  } else {
    if (hours >= 1 && hours <= 6) return 85;
    if (hours >= 7 && hours <= 12) return 77;
    return 73;
  }
};

export const SubmitNewApplication = ({
  professionalNeeded,
  hoursWorked,
  updateFormData,
  onSubmit,
}: SubmitNewApplicationProps) => {
  const [offerPrice, setOfferPrice] = useState<number>(0); // Inicia con el precio sugerido

  const hourlyRate = getHourlyRate(professionalNeeded, hoursWorked);

  // Calcular tarifa total
  const totalPrice = hourlyRate * hoursWorked;
  const minAllowedPrice = totalPrice * 0.85; // 15% menor al precio total
  const isValidAmount = offerPrice !== null && offerPrice >= minAllowedPrice;

  // Manejar cambios en el input de oferta
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    setOfferPrice(newAmount);
    updateFormData("amount", newAmount);
  };

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
          ${offerPrice.toFixed(2)}
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          id="oferta-input"
          type="number"
          value={offerPrice ?? ""}
          onChange={handleAmountChange}
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
      <B4CButton label="Enviar" size={Size.Small} onClick={onSubmit} />
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
