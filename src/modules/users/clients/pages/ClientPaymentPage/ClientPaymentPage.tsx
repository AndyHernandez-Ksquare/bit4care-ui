import { B4CButton } from "@/components/B4CButton";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export const ClientPaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("tarjeta");

  const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Sección del formulario de pago */}
      <Grid
        item
        xs={12}
        desktop={6}
        sx={{
          height: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            maxWidth: "572px",
            marginTop: "100px",
            marginLeft: "auto",

            display: "flex",
            flexDirection: "column",
            gap: "32px",
            paddingInline: "64px",
          }}
        >
          <Typography variant="h5">Pago de servicio en garantía</Typography>
          <Divider />
          <Typography variant="body-small" sx={{ color: "#ACACAC" }}>
            Tu pago será retenido por Bid4Care. Si llegará a suceder un problema
            con tu servicio tu dinero puede ser devuelto parcialmente...
          </Typography>

          <FormControl component="fieldset" sx={{ marginY: 2 }}>
            <FormLabel component="legend">Pagar con:</FormLabel>
            <RadioGroup
              row
              value={paymentMethod}
              onChange={handlePaymentChange}
            >
              <FormControlLabel
                value="tarjeta"
                control={<Radio />}
                label="Tarjeta"
              />
              <FormControlLabel
                value="transferencia"
                control={<Radio />}
                label="Transferencia"
              />
            </RadioGroup>
          </FormControl>

          {paymentMethod === "tarjeta" && (
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Número de tarjeta"
                  placeholder="1234 5678 9101 1121"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Fecha de expiración"
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="CVV" placeholder="123" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Guardar detalles de tarjeta"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Acepto Términos y condiciones"
                />
              </Grid>
              <Grid item xs={12}>
                <B4CButton label="Pagar $8100 MXN" fullWidth />
              </Grid>
            </Grid>
          )}
          {paymentMethod === "transferencia" && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <Typography variant="body-normal" sx={{ color: "#ACACAC" }}>
                Transferir $8100 MXN a:
              </Typography>
              <Typography variant="h6">
                Susana Marta Ortiz de la Cruz
              </Typography>
              <Typography variant="h5">CLABE: 7658926452917567</Typography>
              <B4CButton label="Pagar $8100 MXN" fullWidth />
            </Box>
          )}
        </Box>
      </Grid>

      {/* Sección del resumen de la orden */}
      <Grid
        item
        xs={12}
        desktop={6}
        sx={{
          backgroundColor: "#fafafa",
          height: "100%",
          display: "flex",
          borderLeft: "1px solid #D9D9D9",
        }}
      >
        <Box
          sx={{
            maxWidth: "572px",
            marginTop: "100px",
            marginRight: "auto",
            marginLeft: "64px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Typography variant="h6">Resumen de Orden</Typography>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "64px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography variant="h6">Servicio de Cuidador/a</Typography>
              <Typography variant="body-medium" sx={{ color: "#ACACAC" }}>
                María Pérez
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography variant="h6">$49.80</Typography>
              <Typography variant="body-medium" sx={{ color: "#ACACAC" }}>
                5 días (56 horas)
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", gap: "8px" }}>
            <TextField label="Código de descuento" />
            <B4CButton label="Aplicar" sx={{ width: "70px" }} />
          </Box>
          <Divider />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography variant="body-medium">Subtotal:</Typography>
              <Typography variant="body-medium">Costos extra: </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography variant="body-medium"> $8100 MXN</Typography>
              <Typography variant="body-medium">$0</Typography>
            </Box>
          </Box>
          <Divider />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography variant="body-medium">Total</Typography>
              <Typography variant="body-small" sx={{ color: "#ACACAC" }}>
                Incluye %16 IVA
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              $8100
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
