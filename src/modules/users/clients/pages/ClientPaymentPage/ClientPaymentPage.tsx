// Importación de componentes personalizados, Stripe y Material-UI
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Box,
  CircularProgress,
  Divider,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Hooks personalizados para obtener datos de Stripe y manejar pagos
import { useStripePublishableKey } from "@/context/api/hooks/stripe/useStripePublishableKey";
import { useCreatePaymentIntent } from "@/context/api/hooks/stripe/useCreatePaymentIntent";
import { useProceedWithPayment } from "@/context/api/hooks/application-requests/useProceedWithPayment";
import { useBeginCaptureAndTransfer } from "@/context/api/hooks/stripe/useBeginCaptureAndTransfer";
import { useSnackbar } from "@/context/ui/SnackbarContext";
import { PaymentForm } from "./PaymentForm";

// Componente principal que representa la página de pago del cliente
export const ClientPaymentPage = () => {
  const navigate = useNavigate();
  // Hook para mostrar mensajes (snackbar)
  const { open } = useSnackbar();
  // Obtener los datos enviados por navegación (appId, monto, nombre del cuidador)
  const { state } = useLocation() as {
    state: { appId: number; amount: number; carerName: string };
  };
  const { appId, amount, carerName } = state || {
    appId: 0,
    amount: 0,
    carerName: "",
  };

  // 1) Load publishable key
  const {
    publishableKey: pubKey,
    loading: keyLoading,
    error: keyError,
  } = useStripePublishableKey();

  // 2) Create payment intent
  const {
    paymentIntent,
    createPaymentIntent,
    loading: intentLoading,
  } = useCreatePaymentIntent(appId);

  // Estados locales para stripe, opciones y método de pago seleccionado
  const [stripePromise, setStripePromise] = useState<ReturnType<
    typeof loadStripe
  > | null>(null);

  // the options you’ll pass into <Elements>
  const [elementsOptions, setElementsOptions] = useState<
    StripeElementsOptions | undefined
  >();

  // 1️⃣ Efecto para cargar Stripe.js con la clave pública
  useEffect(() => {
    if (pubKey) {
      setStripePromise(loadStripe(pubKey));
    }
  }, [pubKey]);

  // 2️⃣ Efecto para crear PaymentIntent al cargar la página
  useEffect(() => {
    if (pubKey && appId) {
      (async () => {
        try {
          await createPaymentIntent();
        } catch {
          open("No se pudo iniciar el pago", "error");
        }
      })();
    }
  }, [pubKey]);

  // 3️⃣ Efecto para configurar las opciones de Stripe Elements una vez obtenido el client_secret
  useEffect(() => {
    if (pubKey && appId && paymentIntent) {
      (async () => {
        try {
          setElementsOptions({ clientSecret: paymentIntent?.client_secret });
        } catch {
          open("No se pudo iniciar el pago", "error");
        }
      })();
    }
  }, [pubKey, appId, paymentIntent]);

  // Mostrar loading general mientras cargan claves o intentos
  if (keyLoading || intentLoading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Mostrar error si no se pudo inicializar el pago
  if (keyError) {
    return (
      <Typography color="error">No se pudo inicializar el pago</Typography>
    );
  }

  // Render principal de la página con diseño responsivo en dos columnas
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
      {/* Columna izquierda: formulario de pago */}
      <Grid
        size={{ xs: 12, desktop: 6 }}
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

          {/* Renderizado condicional según método de pago */}
          {stripePromise && elementsOptions && (
            <Elements stripe={stripePromise} options={elementsOptions}>
              <PaymentForm
                amount={amount}
                appId={appId}
                onSuccess={() => navigate("/cliente")}
              />
            </Elements>
          )}
        </Box>
      </Grid>

      {/* Columna derecha: resumen de la orden */}
      <Grid
        size={{ xs: 12, desktop: 6 }}
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
          <Typography variant="h5">Resumen de Orden</Typography>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "64px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography variant="h6">Servicio de Cuidador/a</Typography>
              <Typography variant="body-medium" sx={{ color: "#ACACAC" }}>
                {`${carerName}`}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography variant="h6">{`$${amount}`}</Typography>
              <Typography variant="body-medium" sx={{ color: "#ACACAC" }}>
                5 días (56 horas)
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography variant="body-medium">Subtotal:</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography variant="body-medium"> {`$${amount}`}</Typography>
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
              {`$${amount}`}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
