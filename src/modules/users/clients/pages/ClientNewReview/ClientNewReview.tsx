import { B4CButton } from "@/components/B4CButton";
import { useNewCarerReview } from "@/context/api/hooks/application-requests/useNewCarerReview";
import { useSnackbar } from "@/context/ui/SnackbarContext";
import {
  Box,
  keyframes,
  Rating,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`;

interface LocationState {
  appId: number;
  carerId: number;
}
export const ClientNewReview = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { open } = useSnackbar();
  const { createReview, loading: submitting } = useNewCarerReview();

  const { state } = useLocation();
  // Hacemos un casteo para TS: esperamos que venga { appId: number }
  const { carerId, appId } = (state as LocationState) || {
    appId: 0,
    carerId: 0,
  };

  const [rating, setRating] = useState<number | null>(null);
  const [comments, setComments] = useState("");

  const canSubmit = rating !== null && rating > 0;

  const handleSubmit = async () => {
    if (!canSubmit) return;

    try {
      await createReview({
        carerId: carerId,
        comment: comments,
        stars: rating!, // no puede ser null aquí
      });
      open("¡Reseña enviada con éxito!", "success");
      navigate("/cliente");
    } catch {
      open("Error al enviar la reseña, inténtalo de nuevo.", "error");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Mensaje superior */}
      <Typography variant="subtitle2" color="textSecondary">
        Gracias por confiar en Bid4Care
      </Typography>

      {/* Punto verde animado */}
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: "success.main",
          animation: `${pulse} 1.5s ease-in-out infinite`,
        }}
      />

      {/* Título principal */}
      <Typography variant="h4" align="center" sx={{ fontWeight: 600, mt: 1 }}>
        Servicio #{appId} confirmado
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant="body1"
        color="textSecondary"
        align="center"
        sx={{ maxWidth: 400 }}
      >
        Califica el servicio de tu enfermero/a. 5 estrellas es un servicio con
        el que te sientes completamente satisfecho.
      </Typography>

      {/* Control de rating */}
      <Rating
        name="service-rating"
        value={rating}
        precision={1}
        size="large"
        onChange={(_, newValue) => setRating(newValue)}
      />

      {/* Cuadro de texto para observaciones */}
      <TextField
        label="Observaciones (opcional)"
        placeholder="Escribe aquí tus comentarios..."
        multiline
        rows={4}
        fullWidth
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        sx={{ maxWidth: 500 }}
      />

      {/* Botón de envío */}
      <B4CButton
        variant="primary"
        label="Enviar calificación"
        disabled={!canSubmit}
        onClick={handleSubmit}
        sx={{ mt: 2, width: 240 }}
      />
    </Box>
  );
};
