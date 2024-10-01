import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { spacings } from "@/style/partials/spacings";
import { colorPalette } from "@/style/partials/colorPalette";

interface B4CSelectProps {
  label?: string;
  name?: string;
  value?: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  touched?: boolean;
  sx?: SxProps<Theme>;
  onChange?: (event: SelectChangeEvent<string>) => void;
}

export const B4CSelect = ({
  label,
  name,
  value,
  options,
  disabled,
  error,
  touched,
  sx,
  onChange,
}: B4CSelectProps) => {
  return (
    <Box display="flex" flexDirection="column" sx={sx} width="100%">
      {label && (
        <InputLabel htmlFor={name} sx={{ marginBottom: spacings.spacing1 }}>
          <Typography variant="body-normal-bold" color={colorPalette.black1}>
            {label}
          </Typography>
        </InputLabel>
      )}
      <FormControl
        variant="outlined"
        fullWidth
        error={error && touched}
        sx={{ marginBottom: spacings.spacing2 }}
      >
        <Select
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          displayEmpty
          size="small"
          slotProps={{
            input: { sx: { paddingY: "12px" } },
          }}
          disabled={disabled}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
