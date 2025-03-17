import { Switch } from "@mui/material";
import { ChangeEvent, KeyboardEvent } from "react";

export interface IB4CToggleProps {
  id?: string;
  name?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const B4CToggle = ({
  id,
  name,
  checked,
  disabled,
  onChange,
}: IB4CToggleProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(event.target.checked);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === "Space") {
      event.preventDefault();
      const newChecked = !checked;
      if (!onChange) {
        return;
      }
      onChange(newChecked);
    }
  };
  return (
    <Switch
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
      focusRipple={false}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
