import { B4CButton } from "@/components/B4CButton";
import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { B4CTextfield } from "@/components/B4CTextfield";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import {
  Box,
  Breadcrumbs,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2 as Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
// import { B4CServiceCheckout } from "../../components/B4CServiceCheckout";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useServiceData } from "../../context/NewServiceContext";
import "dayjs/locale/es"; // Import the Spanish locale

interface ClientsReservationDetailProps {
  setServiceStep: Dispatch<SetStateAction<number>>;
}

export const ClientsReservationDetail = ({
  setServiceStep,
}: ClientsReservationDetailProps) => {
  const { provider, startTime, endTime, selectedDate, price } =
    useServiceData();
  const [paymentMethod, setPaymentMethod] = useState("tarjeta");

  const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const formattedDate = selectedDate
    ? selectedDate.locale("es").format("dddd, D MMMM YYYY")
    : "Sin fecha seleccionada";

  return (
    <>
      <Box
        sx={{
          marginBottom: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="h4" display={{ color: colorPalette.primary }}>
          Confirmar y pagar
        </Typography>
        <Breadcrumbs separator={<B4CNextIcon />} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/cliente/">
            <Typography typography="body-normal">Explorar</Typography>
          </Link>
          <Box
            onClick={() => setServiceStep(0)}
            sx={{
              cursor: "pointer", // Change cursor to pointer on hover
              transition: "background-color 0.3s ease", // Smooth transition for hover effect
              "&:hover": {
                textDecoration: "underline", // Light grey background on hover
              },
            }}
          >
            <Typography typography="body-normal">
              {provider?.User.name}
            </Typography>
          </Box>
          <Typography
            typography="body-normal-bold"
            color={colorPalette.primary}
          >
            Confirmar y pagar
          </Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={24} sx={{ height: "100%" }}>
        <Grid size={{ xs: 12, desktop: 8 }} order={{ xs: 2, desktop: 1 }}>
          <Box
            sx={{
              border: `1px solid ${colorPalette.secondary}`,
              backgroundColor: colorPalette.white,
              borderRadius: "20px",
              paddingInline: "24px",
              paddingBlock: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Typography variant="body-large-bold">Tu reservación</Typography>
              <Box mt={"16px"} display="flex" flexDirection={"column"}>
                <Typography variant="body-normal-bold">Fecha</Typography>
                <Typography variant="body-normal">{formattedDate}</Typography>
              </Box>
              <Box mt={"16px"} display="flex" flexDirection={"column"}>
                <Typography variant="body-normal-bold">Horario</Typography>
                <Typography variant="body-normal">
                  {startTime?.format("HH:mm")} - {endTime?.format("HH:mm")}
                </Typography>
              </Box>
              <Box mt={"16px"} display="flex" flexDirection={"column"}>
                <Typography variant="body-normal-bold">Dirección</Typography>
                <Typography variant="body-normal">
                  Colonia Los Álamos, Benito Juárez, CDMX. CP: 05040
                </Typography>
              </Box>
            </Box>
            <Divider flexItem></Divider>
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
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Número de tarjeta"
                    placeholder="1234 5678 9101 1121"
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField
                    fullWidth
                    label="Fecha de expiración"
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth label="CVV" placeholder="123" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Guardar detalles de tarjeta"
                  />
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
                  Transferir ${price} MXN a:
                </Typography>
                <Typography variant="h6">{provider?.User.name}</Typography>
                <Typography variant="h5">CLABE: 7658926452917567</Typography>
                <B4CButton label={`Pagar $${price} MXN`} fullWidth />
              </Box>
            )}

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <Typography variant="body-large-bold">
                  Detalles de visita
                </Typography>
                <B4CTextfield
                  isMultiline
                  placeholder="Agrega cualquier comentario que pueda ser útil saber para el colaborador."
                />
              </Box>
            </Box>
            <Divider flexItem></Divider>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              <Typography variant="body-large-bold">
                Pago de servicio en garantía
              </Typography>
              <Typography variant="body-normal">
                Tu pago será retenido por Bid4Care. Si llegará a suceder un
                problema con tu servicio tu dinero puede ser devuelto
                parcialmente. Si el o la cuidadora no apareciera tu monto se
                regresará en su totalidad.
              </Typography>
            </Box>

            <Divider flexItem></Divider>
            <Typography variant="body-normal">
              Al seleccionar el botón que aparece a continuación, acepta las con
              políticas: bla bla. Además, doy mi consentimiento para que
              Bid4Care pueda cobrarme a través de mi forma de pago si soy
              respon. Acepto pagar el importe total indicad
            </Typography>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "start" }}
            >
              <B4CButton label="Solicitar servicio" size={Size.Small} />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, desktop: 4 }} order={{ xs: 1, desktop: 2 }}>
          <Box
            sx={{
              border: `1px solid ${colorPalette.secondary}`,
              backgroundColor: colorPalette.white,
              borderRadius: "20px",
              paddingInline: "24px",
              paddingBlock: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <B4CServiceCheckout /> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
