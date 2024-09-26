import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

export const ClientPaymentPage = () => (
  <Box
    sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Grid container spacing={4} sx={{ margin: "auto", height: "100%" }}>
      {/* Sección del formulario de pago */}
      <Grid
        item
        xs={12}
        desktop={6}
        sx={{ margin: "auto", height: "100%", display: "flex" }}
      >
        <Paper sx={{ padding: 32, marginBlock: "auto" }}>
          <Typography variant="h5" gutterBottom>
            Pago de servicio en garantía
          </Typography>
          <Typography variant="body2" gutterBottom>
            Tu pago será retenido por Bid4Care. Si llegará a suceder un problema
            con tu servicio tu dinero puede ser devuelto parcialmente...
          </Typography>

          <FormControl component="fieldset" sx={{ marginY: 2 }}>
            <FormLabel component="legend">Pagar con:</FormLabel>
            <RadioGroup row defaultValue="tarjeta">
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

          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Aquí puedes agregar íconos o logos de VISA, PayPal, Stripe */}
            </Grid>
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
              <FormControlLabel
                control={<Checkbox />}
                label="Acepto Términos y condiciones"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Pagar $8100 MXN
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Sección del resumen de la orden */}
      <Grid
        item
        xs={12}
        desktop={6}
        sx={{
          backgroundColor: "#D9D9D9",
          height: "100%",
        }}
      >
        <Box sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Resumen de Orden
          </Typography>
          <Typography variant="body1" gutterBottom>
            Servicio de Cuidador/a
          </Typography>
          <Typography variant="body2" gutterBottom>
            María Pérez
          </Typography>
          <Typography variant="body2" gutterBottom>
            5 días (56 horas)
          </Typography>

          <TextField fullWidth label="Código de descuento" />
          <Button variant="contained" color="primary" sx={{ marginY: 2 }}>
            Aplicar
          </Button>

          <Typography variant="body2">Subtotal: $8100 MXN</Typography>
          <Typography variant="body2">Costos extra: $0</Typography>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Total: $8100
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
