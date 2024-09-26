import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const AvailabilitySettings = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState<string>(
    "Menos de 30 horas a la semana",
  );
  const [openToFullTime, setOpenToFullTime] = useState<boolean>(false);

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHoursPerWeek((event.target as HTMLInputElement).value);
  };

  const handleFullTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenToFullTime(event.target.checked);
  };

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica de envío del formulario
    console.log({
      hoursPerWeek,
      openToFullTime,
    });
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        margin: "auto",
        paddingTop: "2rem",
      }}
    >
      <Typography variant="h6">Horas por semana</Typography>
      <Typography variant="body2">
        Saber cuántas horas estás disponible nos ayuda a Bid4Care a encontrar
        mejores trabajos para ti.
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Estoy disponible para trabajar</FormLabel>
        <RadioGroup
          aria-label="hours-per-week"
          name="hours-per-week"
          value={hoursPerWeek}
          onChange={handleHoursChange}
        >
          <FormControlLabel
            value="Más de 30 horas a la semana"
            control={<Radio />}
            label="Más de 30 horas a la semana"
          />
          <FormControlLabel
            value="Menos de 30 horas a la semana"
            control={<Radio />}
            label="Menos de 30 horas a la semana"
          />
          <FormControlLabel
            value="Cuanto sea necesario. Depende de la oferta"
            control={<Radio />}
            label="Cuanto sea necesario. Depende de la oferta"
          />
          <FormControlLabel
            value="Ninguna opción. No estoy disponible por ahora"
            control={<Radio />}
            label="Ninguna opción. No estoy disponible por ahora"
          />
        </RadioGroup>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={openToFullTime}
            onChange={handleFullTimeChange}
            name="open-to-full-time"
          />
        }
        label="Estoy abierto(a) a oportunidades de tiempo completo por tiempo determinado"
      />
      <Typography variant="body2">
        Esto significa que podrías ser contratado a través de de Bid4Care con
        algún cliente por un tiempo determinado al término de uno o varios
        servicios.
      </Typography>
      <B4CButton
        label="Actualizar disponibilidad"
        variant="primary"
        size={Size.Small}
        onClick={handleSubmit}
      />
    </Box>
  );
};
