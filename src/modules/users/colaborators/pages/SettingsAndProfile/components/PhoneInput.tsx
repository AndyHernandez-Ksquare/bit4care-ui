import {
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChangeEvent } from "react";

interface PhoneInputProps {
  countryCode: string;
  handleCountryCodeChange: (event: SelectChangeEvent<string>) => void;
  phoneNumber: string;
  handlePhoneNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneInput = ({
  countryCode,
  phoneNumber,
  handleCountryCodeChange,
  handlePhoneNumberChange,
}: PhoneInputProps) => {
  return (
    <Grid
      container
      spacing={16}
      sx={{
        marginLeft: 0,
        maxWidth: "100%",
        border: `1px solid #BDBDBD`,
        borderRadius: "8px",
        p: "32px",
        width: "100%",
      }}
    >
      <Grid size={{ xs: 12, desktop: 2 }} sx={{ display: "flex" }}>
        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          sx={{ marginBlock: "auto" }}
        >
          <InputLabel htmlFor="country-code">Código de país</InputLabel>
          <Select
            value={countryCode}
            onChange={handleCountryCodeChange}
            label="Código de país"
            inputProps={{
              name: "country-code",
              id: "country-code",
            }}
          >
            <MenuItem value="+1">+1</MenuItem>
            <MenuItem value="+44">+44</MenuItem>
            <MenuItem value="+52">+52</MenuItem>
            {/* Agrega más códigos de país según sea necesario */}
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, desktop: 10 }} sx={{ display: "flex" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Introduce tu número de teléfono"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          sx={{ marginBlock: "auto" }}
        />
      </Grid>
    </Grid>
  );
};
