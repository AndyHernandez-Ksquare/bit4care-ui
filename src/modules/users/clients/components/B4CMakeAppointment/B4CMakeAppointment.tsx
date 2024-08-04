import { B4CButton } from "@/components/B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import { Box, Typography } from "@mui/material";
import {
  DateCalendar,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";

export const B4CMakeAppointment = () => {
  return (
    <Box
      sx={{
        border: `1px solid ${colorPalette.secondary}`,
        borderRadius: "20px",
        paddingInline: "24px",
        paddingBlock: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="body-large-bold">$400 MXN (2 horas)</Typography>
      <Typography variant="body-normal-bold" color={colorPalette.primary}>
        $200 en primera visita
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />

        <TimePicker
          label="Uncontrolled picker"
          defaultValue={dayjs("2022-04-17T15:30")}
        />
      </LocalizationProvider>
      <B4CButton label="Agendar" size={Size.Small}></B4CButton>
      <Typography variant="body-small" color={colorPalette.grey3}>
        Deberás completar tu solicitud antes de pagar y confirmar el servicio.
      </Typography>
    </Box>
  );
};
