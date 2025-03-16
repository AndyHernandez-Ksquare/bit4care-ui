import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEventHandler, KeyboardEvent } from "react";

export interface IB4CCheckboxProps {
  disabled?: boolean;
  checked?: boolean | string;
  label?: JSX.Element | string;
  name?: string;
  value?: boolean | string;
  labelColor?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const B4CCheckbox = ({
  disabled,
  checked,
  label,
  labelColor,
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
          id={name}
          checked={checked === true || checked === "on"}
          disabled={disabled}
          focusRipple={false}
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      }
      sx={{ color: labelColor || "" }}
      label={label}
    />
  );
};
