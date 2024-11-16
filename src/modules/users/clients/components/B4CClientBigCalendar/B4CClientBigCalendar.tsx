import { colorPalette } from "@/style/partials/colorPalette";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const B4CClientBigCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DateCalendar
        disablePast
        sx={{
          "& .MuiDayCalendar-header": {
            justifyContent: "center",
            width: "100%",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          },
          "& .MuiPickersDay-dayWithMargin": {
            // Grows width/height of day buttons
            width: "100%",
            height: "100%",
            aspectRatio: 1,
            fontSize: "1.0rem",
          },
          "& .MuiDayCalendar-weekDayLabel": {
            aspectRatio: 1,
            width: "calc(100% - 4px)", // deals with margin
            fontSize: "1.0rem",
            fontWeight: "bold",
            color: colorPalette.primary,
          },
          "& .MuiPickersCalendarHeader-label": {
            // Manages month/year size
            fontSize: "1.3em",
          },
          "& .MuiDayCalendar-slideTransition": {
            // Handles size of week row parent, 1.6 aspect is good for now
            aspectRatio: 1,
            width: "100%",
          },
          "& .MuiDayCalendar-loadingContainer": {
            width: "100%",
            aspectRatio: 1.6,
          },
          "& .MuiDayCalendarSkeleton-root": {
            width: "100%",
          },
          "& .MuiDayCalendarSkeleton-week": {
            width: "100%",
          },
          "& .MuiDayCalendarSkeleton-daySkeleton": {
            width: "calc(10% - 4px) !important", // Deals with the margin calcs
            aspectRatio: "1 !important",
            height: "auto !important",
          },
          "&.MuiDateCalendar-root": {
            height: "auto",
            overflow: "visible",
          },

          width: "100%",
          maxHeight: "100%",
        }}
      />
    </LocalizationProvider>
  );
};
