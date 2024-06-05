import { Checkbox, FormControlLabel } from "@mui/material";
import React, { ChangeEventHandler, KeyboardEvent } from "react";

export interface IB4CCheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  name?: string;
  value?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const B4CCheckbox = ({
  disabled,
  checked,
  label,
  name,
  value,
  onChange,
}: IB4CCheckboxProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === "Space") {
      event.preventDefault();
    }
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          disabled={disabled}
          focusRipple={false}
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      }
      label={label}
    />
  );
};
