import { B4CButton } from "@/components/B4CButton";
import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { B4CTextfield } from "@/components/B4CTextfield";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import {
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { B4CServiceCheckout } from "../../components/B4CServiceCheckout";

export const ClientsReservationDetail = () => {
  return (
    <Fragment>
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
          <Typography
            typography="body-normal-bold"
            color={colorPalette.primary}
          >
            user.name
          </Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={24} sx={{ height: "100%" }}>
        <Grid item xs={12} desktop={8}>
          <Box
            sx={{
              border: `1px solid ${colorPalette.secondary}`,
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
                <Typography variant="body-normal">
                  Hoy, 27 de mayo del 2025
                </Typography>
              </Box>
              <Box mt={"16px"} display="flex" flexDirection={"column"}>
                <Typography variant="body-normal-bold">Horario</Typography>
                <Typography variant="body-normal">
                  Por la mañana: 10:00 AM - 12:00 PM
                </Typography>
                <Typography variant="body-normal">
                  Medio día: 12:00 PM - 2:00 PM
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
        <Grid item xs={12} desktop={4}>
          <Box
            sx={{
              border: `1px solid ${colorPalette.secondary}`,
              borderRadius: "20px",
              paddingInline: "24px",
              paddingBlock: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <B4CServiceCheckout />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
