import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

interface ChangeMobileNumProps {
  open: boolean;
  onClose: () => void;
}

export const ChangeMobileNum = ({ open, onClose }: ChangeMobileNumProps) => {
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleCountryCodeChange = (event: SelectChangeEvent<string>) => {
    setCountryCode(event.target.value as string);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleSendCode = () => {
    // Aquí puedes manejar la lógica para enviar el código de verificación
    console.log(`Country Code: ${countryCode}, Phone Number: ${phoneNumber}`);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <DialogTitle>Cambiar número de teléfono</DialogTitle>
        <IconButton onClick={onClose}>cerrar</IconButton>
      </Box>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Para cambiar tu número de teléfono es necesario autenticarlo.
          Recibirás un código via SMS para poder realizarlo.
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          {/* <LockIcon color="action" /> */}
          <Typography variant="body2" color="textSecondary" ml={1}>
            Tus datos personales están protegidos de forma segura.
          </Typography>
        </Box>
        <FormControl fullWidth variant="outlined" margin="normal">
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
        <TextField
          fullWidth
          variant="outlined"
          label="Introduce tu número de teléfono"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          InputProps={{
            startAdornment: (
              <Box mr={1}>
                <Typography variant="body1">{countryCode}</Typography>
              </Box>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleSendCode}>
          Enviar código
        </Button>
      </DialogActions>
    </Dialog>
  );
};
