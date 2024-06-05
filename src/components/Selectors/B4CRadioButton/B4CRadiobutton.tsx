import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

export const enum Positions {
  Top = "top",
  Bottom = "bottom",
  Start = "start",
  End = "end",
}

export interface IB4CRadioButtonProps {
  label: string;
  value: string;
  disabled?: boolean;
  labelPosition?: Positions;
}

export const B4CRadiobutton = ({
  label,
  value,
  disabled,
  labelPosition,
}: IB4CRadioButtonProps) => {
  return (
    <FormControlLabel
      control={<Radio />}
      disabled={disabled}
      label={label}
      labelPlacement={labelPosition}
      value={value}
    />
  );
};
