import { B4CPhoneInputProps } from "@/ts/types/components/B4CPhoneInput.type";
import {
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const B4CPhoneInput = ({
  countryCode,
  phoneNumber,
  handleCountryCodeChange,
  handlePhoneNumberChange,
}: B4CPhoneInputProps) => {
  return (
    <Grid
      container
      spacing={8}
      sx={{
        marginLeft: 0,
        maxWidth: "100%",
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
      <Grid size={{ xs: 12, desktop: 9 }} sx={{ display: "flex" }}>
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
