import { B4CButton } from "@/components/B4CButton";
import { Box, keyframes, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`;

interface LocationState {
  appId: number;
}
export const ClientNewComplaint = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { state } = useLocation();
  // Hacemos un casteo para TS: esperamos que venga { appId: number }
  const { appId } = (state as LocationState) || {
    appId: 0,
  };

  const GoHome = async () => {
    navigate("/cliente");
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
        Tu servicio con ID #{appId} ha sido registrado con una controversia.
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant="body1"
        color="textSecondary"
        align="center"
        sx={{ maxWidth: 400 }}
      >
        Un administrador/a de Bid4care revisará tu solicitud para resolver la
        situación. Tu dinero, mientras tanto, se encuentra a salvo.
      </Typography>

      {/* Botón de envío */}
      <B4CButton
        variant="primary"
        label="Enviar calificación"
        onClick={GoHome}
        sx={{ mt: 2, width: 240 }}
      />
    </Box>
  );
};
