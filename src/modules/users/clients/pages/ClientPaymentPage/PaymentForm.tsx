import { B4CButton } from "@/components/B4CButton";
import { useProceedWithPayment } from "@/context/api/hooks/application-requests/useProceedWithPayment";
import { useSnackbar } from "@/context/ui/SnackbarContext";
import { Box } from "@mui/material";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

interface PaymentFormProps {
  amount: number;
  appId: number;
  onSuccess: () => void;
}
/**
 * Componente hijo que muestra el formulario de tarjeta de Stripe
 * Usa los hooks internos de Stripe para manejar el pago
 */
export const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  appId,
  onSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { open } = useSnackbar();
  const { proceedWithPayment } = useProceedWithPayment();

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    // 1) confirmPayment sin forzar redirect
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // ya no pones return_url aquí
      },
      redirect: "if_required",
    });

    // 2) Si hay error, muéstralo
    if (result.error) {
      open(result.error.message || "Error en el pago", "error");
      return;
    }

    // 3) Si no hubo error, el PaymentIntent está listo o pendiente,
    //    así que ahora disparas tus propios controladores
    try {
      await proceedWithPayment(appId.toString());
      open("Pago exitoso. ¡Gracias!", "success");
      onSuccess();
    } catch (err) {
      open("Ocurrió un error registrando tu pago", "error");
    }
  };

  return (
    <Box>
      <PaymentElement />
      <B4CButton
        onClick={handleSubmit}
        label={`Pagar $${amount} MXN`}
        fullWidth
        sx={{ mt: 2 }}
      />
    </Box>
  );
};
