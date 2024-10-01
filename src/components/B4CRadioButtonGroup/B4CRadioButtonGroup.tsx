import { colorPalette } from "@/style/partials/colorPalette";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export interface B4CRadioButtonGruopProps {
  options: string[];
  title?: string;
  row?: boolean;
}

export const B4CRadioButtonGroup = ({
  options,
  title,
  row = false,
}: B4CRadioButtonGruopProps) => {
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
        name="radio-buttons-group"
        row={row}
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
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
