import { B4CPhoneInputProps } from "@/ts/types/components/B4CPhoneInput.type";
import {
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { countryCodes } from "@/constants/countryCodes";

export const B4CPhoneInput = ({
  countryCode,
  phoneNumber,
  phoneNumberError,
  handleCountryCodeChange,
  handlePhoneNumberChange,
}: B4CPhoneInputProps & {
  phoneNumberError?: string;
}) => {
  return (
    <Grid
      container
      spacing={{ xs: 24, desktop: 8 }}
      sx={{
        border: `1px solid #BDBDBD`,
        borderRadius: "8px",
        p: "16px",
      }}
    >
      <Grid size={{ xs: 12, desktop: 3 }} sx={{ display: "flex" }}>
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
            renderValue={(value) => value}
            inputProps={{
              name: "country-code",
              id: "country-code",
            }}
          >
            {countryCodes.map(({ code, country }, index) => {
              return (
                <MenuItem
                  key={`${index}-${code}`}
                  value={code}
                >{`${country} ${code}`}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, desktop: 9 }} sx={{ display: "flex" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Introduce tu número de teléfono"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          sx={{ marginBlock: "auto" }}
          error={!!phoneNumberError} // Add error state to field
          helperText={phoneNumberError}
        />
      </Grid>
    </Grid>
  );
};
