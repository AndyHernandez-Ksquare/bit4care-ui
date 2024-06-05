import React from "react";
import {
  buttonBaseClasses,
  formHelperTextClasses,
  inputAdornmentClasses,
  inputLabelClasses,
  outlinedInputClasses,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { pickersArrowSwitcherClasses } from "@mui/x-date-pickers/internals";
import {
  DateValidationError,
  DateView,
  PickerChangeHandlerContext,
  pickersCalendarHeaderClasses,
  pickersDayClasses,
} from "@mui/x-date-pickers";
import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";

export type DatePickerVariant = "day" | "month" | "year";

export interface IB4CDatepickerProps {
  disableFuture?: boolean;
  disablePast?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  type?: DatePickerVariant;
  value?: Date;
  onChange?: (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
}

const getDatePickerViews = {
  day: ["day"],
  month: ["day", "month"],
  year: ["day", "month", "year"],
};

export const B4CDatepicker = ({
  disableFuture = false,
  disablePast = false,
  disabled,
  error,
  helperText = "MM/DD/YYYY",
  label,
  type = "day",
  value,
  onChange,
}: IB4CDatepickerProps) => {
  const desktopPaperStyles = {
    borderRadius: "8px",
    boxShadow: "0px 5px 10px rgba(29, 63, 156, 0.2)",
    [`& .${pickersDayClasses.dayWithMargin}`]: {
      color: colorPalette.primary,
      fontWeight: 400,
      "&.Mui-focusVisible": {
        bgcolor: colorPalette.secondary,
        outline: `1px solid ${colorPalette.secondary}`,
        "&.Mui-selected": {
          bgcolor: colorPalette.primary,
        },
      },
      "&.Mui-selected": {
        bgcolor: colorPalette.primary,
        color: colorPalette.white,
      },
      "&.Mui-disabled": {
        color: colorPalette.black1,
      },
    },
    [`& .${pickersDayClasses.dayWithMargin}:focus.Mui-selected`]: {
      bgcolor: colorPalette.primary,
    },
    [`& .${pickersDayClasses.dayWithMargin}:hover`]: {
      bgcolor: colorPalette.secondary,
    },
    "& .MuiDayCalendar-weekDayLabel": {
      color: colorPalette.black1,
      fontWeight: 500,
    },
    [`& .${pickersCalendarHeaderClasses.label}`]: {
      color: colorPalette.black1,
      fontWeight: 500,
      cursor: "default",
    },
    [`& .${pickersArrowSwitcherClasses.root}`]: {
      gap: spacings.spacing5,
    },
    [`& .${pickersDayClasses.dayOutsideMonth}`]: {
      color: colorPalette.black1,
    },
    [`& .${pickersCalendarHeaderClasses.switchViewButton}`]: {
      marginRight: spacings.spacing2,
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture={disableFuture}
        disableHighlightToday
        disablePast={disablePast}
        disabled={disabled}
        label={label}
        showDaysOutsideCurrentMonth
        slotProps={{
          textField: {
            error,
            helperText,
          },
          desktopPaper: {
            sx: desktopPaperStyles,
          },
        }}
        value={value}
        views={getDatePickerViews[type] as DateView[]}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};
