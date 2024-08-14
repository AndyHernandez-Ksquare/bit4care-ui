import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export const B4CClientBigCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          "& .MuiBadge-badge": {
            // Adjustment for recordMade badge
            fontSize: "0.7em",
            paddingTop: "4px",
          },
          // "& .MuiPickersBasePicker-pickerView": {
          //   maxHeight: "600px",
          // },

          // "& .MuiDayCalendar-header": {
          //   // Needed for weekday (ie S M T W T F S )adjustments (and padding if wanted)
          //   // Adjusts spacing between
          //   justifyContent: "center",
          //   width: "100%",
          //   overflow: "hidden",
          //   margin: "2px, 0",
          //   paddingTop: "1em",
          //   paddingBottom: "1em",
          // },
          "& .MuiDayCalendar-weekContainer": {
            // Adjusts spacing between days (ie 1, 2, 3.. 27, 28)
            justifyContent: "center",
            overflow: "hidden",
            width: "100%",
            margin: 0,
          },
          "& .MuiPickersDay-dayWithMargin": {
            // Grows width/height of day buttons
            width: "calc(100% - 4px)",
            // height: "calc(100% - 4px)",
            aspectRatio: "1",
            height: "auto",

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
            aspectRatio: 1,
            width: "calc(10% - 4px)", // deals with margin
            fontSize: "1.0em",
          },
          "& .MuiPickersCalendarHeader-label": {
            // Manages month/year size
            fontSize: "1.3em",
          },
          "& .MuiPickersFadeTransitionGroup-root-MuiDateCalendar-viewTransitionContainer":
            {
              // Handles size of week row parent, 1.6 aspect is good for now
              aspectRatio: "1.6",
              overflow: "hidden",
            },
          "& .MuiDayCalendar-slideTransition": {
            // Handles size of week row parent, 1.6 aspect is good for now
            aspectRatio: 1.6,
            width: "100%",
            overflow: "hidden",
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

          // width: "100%",
          // maxHeight: "100%",
        }}
      />
    </LocalizationProvider>
  );
};
