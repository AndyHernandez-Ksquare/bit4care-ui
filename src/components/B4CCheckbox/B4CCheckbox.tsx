import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { ChangeEvent } from "react";

export interface B4CCheckboxProps {
  label: string;
  defaultChecked?: boolean;
  required?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const B4CCheckbox = ({
  label,
  defaultChecked = false,
  required = false,
  checked,
  onChange,
}: B4CCheckboxProps) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            defaultChecked={defaultChecked}
            required={required}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};
