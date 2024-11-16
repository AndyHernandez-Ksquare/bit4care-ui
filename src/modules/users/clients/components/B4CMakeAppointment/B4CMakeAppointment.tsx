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
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useServiceData } from "../../context/NewServiceContext";

interface B4CMakeAppointmentProps {
  handleSchedule: () => void;
}

export const B4CMakeAppointment = ({
  handleSchedule,
}: B4CMakeAppointmentProps) => {
  const [error, setError] = useState<string>("");
  const {
    provider,
    startTime,
    endTime,
    duration,
    price,
    selectedDate,
    setPrice,
    setDuration,
    setStartTime,
    setEndTime,
    setSelectedDate,
  } = useServiceData();

  // Function to calculate the difference in hours between startTime and endTime
  const calculateDuration = (
    start: Dayjs | null,
    end: Dayjs | null,
  ): number => {
    if (start && end) {
      const duration = end.diff(start, "hours", true); // 'true' to get decimal hours
      return parseFloat(duration.toFixed(1)); // Return the difference rounded to 2 decimal places
    }
    return 0;
  };

  const calculatePrice = (duration: number, payrange: string) => {
    console.log(`Duracion: ${duration}`);
    console.log(`Precio: ${parseFloat(payrange)}`);
    console.log(`Precio: ${duration * parseFloat(payrange)}`);
    setPrice(duration * parseFloat(payrange));
  };

  // UseEffect to recalculate duration whenever startTime or endTime changes
  useEffect(() => {
    setDuration(calculateDuration(startTime, endTime));
  }, [startTime, endTime]); // Recalculate duration when either time changes

  useEffect(() => {
    if (provider) {
      calculatePrice(duration, provider.payment_range);
    }
  }, [duration, provider]); // Recalculate duration when either time changes

  return (
    <Box
      sx={{
        border: `1px solid ${colorPalette.secondary}`,
        backgroundColor: colorPalette.white,
        borderRadius: "20px",
        paddingInline: "24px",
        paddingBlock: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {/* Show error message if any */}
      {error || !duration ? (
        <Typography variant="body-small-bold" color={colorPalette.error}>
          {error}
        </Typography>
      ) : (
        <Typography variant="body-large-bold">
          ${price} MXN ({duration} hora{duration === 1 ? "" : "s"})
        </Typography>
      )}

      {/* <Typography variant="body-normal-bold" color={colorPalette.primary}>
        $200 en primera visita
      </Typography> */}
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <DateCalendar
          value={selectedDate} // Bind the value to the state
          onChange={(newDate) => setSelectedDate(newDate)} // Update state on change
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
            value={startTime} // Bind the value to the state
            onChange={(newTime) => {
              if (newTime && endTime && newTime.isAfter(endTime)) {
                setError(
                  "La hora final no puede ser menor que la hora de inicio.",
                );
              } else {
                setError("");
                setStartTime(newTime); // Update endTime only if valid
              }
            }}
          />

          <TimePicker
            label="Final de servicio"
            value={endTime} // Bind the value to the state
            onChange={(newTime) => {
              if (newTime && startTime && newTime.isBefore(startTime)) {
                setError(
                  "La hora final no puede ser menor que la hora de inicio.",
                );
              } else {
                setError("");
                setEndTime(newTime); // Update endTime only if valid
              }
            }}
          />
        </Box>
      </LocalizationProvider>

      <B4CButton
        label="Agendar"
        disabled={!!error || !duration}
        onClick={() => {
          handleSchedule(); // Call the schedule handler
        }}
        size={Size.Small}
      ></B4CButton>
      <Typography variant="body-small" color={colorPalette.grey3}>
        Deberás completar tu solicitud antes de pagar y confirmar el servicio.
      </Typography>
    </Box>
  );
};
