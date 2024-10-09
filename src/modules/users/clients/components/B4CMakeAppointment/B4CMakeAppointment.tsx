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

interface B4CMakeAppointmentProps {
  handleSchedule: () => void;
}

export const B4CMakeAppointment = ({
  handleSchedule,
}: B4CMakeAppointmentProps) => {
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
        <DateCalendar
          sx={{
            "& .MuiBadge-badge": {
              // Adjustment for recordMade badge
              fontSize: "0.7em",
              paddingTop: "4px",
            },
            // '& .MuiPickersBasePicker-pickerView': {
            //     maxHeight: '800px',
            //   },

            "& .MuiDayCalendar-header": {
              // Needed for weekday (ie S M T W T F S )adjustments (and padding if wanted)
              // Adjusts spacing between
              width: "100%",
              margin: " 0",
            },

            "& .MuiPickersDay-dayWithMargin": {
              // Grows width/height of day buttons
              width: "calc(100% - 4px)",
              height: "calc(100% - 4px)",
              aspectRatio: "1",
              fontSize: "1.0em",
            },
            "& .MuiBadge-root": {
              // Parent of button management
              aspectRatio: 1,
              width: "10%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            },
            "& .MuiDayCalendar-weekDayLabel": {
              // Manages size of weekday labels

              width: "calc(14% - 4px)", // deals with margin
              fontSize: "1.0rem",
            },
            "& .MuiPickersCalendarHeader-label": {
              // Manages month/year size
              fontSize: "1.3em",
            },

            "& .MuiDayCalendar-slideTransition": {
              // Handles size of week row parent, 1.6 aspect is good for now
              aspectRatio: 1.6,
              width: "100%",
              overflow: "hidden",
            },

            width: "100%",
            maxHeight: "100%",
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <TimePicker
            label="Inicio de servicio"
            defaultValue={dayjs("2022-04-17T15:30")}
          />

          <TimePicker
            label="Final de servicio"
            defaultValue={dayjs("2022-04-17T15:30")}
          />
        </Box>
      </LocalizationProvider>
      <B4CButton
        label="Agendar"
        onClick={handleSchedule}
        size={Size.Small}
      ></B4CButton>
      <Typography variant="body-small" color={colorPalette.grey3}>
        Deberás completar tu solicitud antes de pagar y confirmar el servicio.
      </Typography>
    </Box>
  );
};
