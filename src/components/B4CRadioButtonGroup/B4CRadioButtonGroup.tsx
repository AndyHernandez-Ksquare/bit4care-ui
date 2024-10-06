import { colorPalette } from "@/style/partials/colorPalette";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export interface B4CRadioButtonGroupProps {
  options: string[];
  name: string;
  title?: string;
  row?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const B4CRadioButtonGroup = ({
  options,
  title,
  name,
  row = false,
  value,
  onChange,
}: B4CRadioButtonGroupProps) => {
  return (
    <FormControl>
      {title && (
        <FormLabel id="radio-buttons-group-label">
          <Typography variant="body-normal-bold" color={colorPalette.black1}>
            {title}
          </Typography>
        </FormLabel>
      )}
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name={name}
        row={row}
        value={value}
        onChange={onChange}
        sx={{
          gap: "10px",
          mt: "10px",
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option.toLowerCase()}
            control={<Radio />}
            label={option}
            sx={{ minWidth: "125px" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
