import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { formatDateOnly } from "@/constants/formatDate";
import { useGetOneAppRequest } from "@/context/api/hooks/application-requests/useGetOneAppRequest";
import { useMakeNegotiation } from "@/context/api/hooks/application-requests/useMakeNegotiation";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import {
  AttachMoney,
  CalendarMonth,
  LocationOn,
  MedicalInformationRounded,
  Star,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface B4CNegotiationModalProps {
  open: boolean;
  onClose: () => void;
  appRequestId: string | undefined;
}

export const B4CNegotiationModal = ({
  appRequestId,
  open,
  onClose,
}: B4CNegotiationModalProps) => {
  const { data, getOneAppLoading, error } = useGetOneAppRequest(appRequestId);

  const [clientOffer, setClientOffer] = useState<string>("");

  // Hook para realizar la negociación (contraoferta)
  const {
    makeNegotiation,
    isLoading: negotiationLoading,
    error: negotiationError,
  } = useMakeNegotiation();

  // Handler para el botón de Contraofertar
  const handleContraofertar = async () => {
    // Validar que la oferta del cliente sea un número válido
    const offerByClient = parseFloat(clientOffer);
    if (isNaN(offerByClient)) {
      alert("Por favor, ingresa un número válido para la oferta.");
      return;
    }
    if (!data) return;

    const requestBody = {
      offer_by_client: offerByClient,
      caregiver_counter_offer: data.amount, // Se toma el monto actual del servicio
      status: "IN_PROGRESS" as const,
    };

    try {
      if (appRequestId) {
        await makeNegotiation(appRequestId, requestBody);
        // Opcional: se puede cerrar el modal o mostrar un mensaje de éxito
        onClose();
      }
    } catch (err) {
      console.error("Error en contraofertar:", err);
    }
  };

  return (
    <B4CModal open={open} onClose={onClose}>
      <Box
        sx={{
          maxWidth: "1100px",
          bgcolor: "white",
          borderRadius: "12px",
          p: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {getOneAppLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : data ? (
          <>
            {/* Header */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Box display="flex" alignItems="center" gap="1rem" mb={2}>
                <Avatar src={"/profile.png"} sx={{ width: 64, height: 64 }} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {data.patient_name}
                  </Typography>
                  <Chip
                    label={data.carer_speciality || "Cuidadora profesional"}
                    sx={{ bgcolor: colorPalette.grey5 }}
                  />
                </Box>
              </Box>
              {/* Calificación y estado de pago */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="1rem"
                mb={2}
              >
                <B4CStarRating rating={4} />
                <Chip label="Por pagar" color="warning" />
              </Box>
            </Box>

            {/* Información del servicio */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Box display="flex" flexDirection="column" gap="1rem">
                <Box display="flex" alignItems="center">
                  <CalendarMonth color="primary" />
                  <Typography variant="body2">
                    {data.start_date} - {data.end_date}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <AttachMoney color="primary" />
                  <Typography variant="body2">${data.amount}</Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Box display="flex" alignItems="center">
                  <MedicalInformationRounded color="primary" />
                  <Typography variant="body2">
                    {data.description || "Información no disponible"}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOn color="primary" />
                  <Typography variant="body2">{data.address}</Typography>
                </Box>
              </Box>
            </Box>

            {/* Oferta actual y contraoferta */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                mb: 2,
              }}
            >
              <Box mb={2}>
                <Typography variant="body2" fontWeight="bold">
                  Oferta actual
                </Typography>
                <Typography variant="h4" color="primary">
                  ${data.amount}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={1}
                mb={2}
                sx={{ flex: 1 }}
              >
                <Typography variant="body2" fontWeight="bold">
                  Oferta (Bid) de Cliente
                </Typography>
                <TextField
                  placeholder="Introduce tu oferta"
                  size="small"
                  fullWidth
                  value={clientOffer}
                  onChange={(e) => setClientOffer(e.target.value)}
                />
                <Typography variant="caption" color="gray">
                  El precio recomendado puede ser hasta menos 15% sobre el
                  precio mínimo sugerido.
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={1}
                mb={2}
                sx={{ marginBlock: "auto" }}
              >
                <B4CButton
                  size={Size.Small}
                  variant="secondary"
                  label={negotiationLoading ? "Procesando..." : "Contraofertar"}
                  onClick={handleContraofertar}
                  disabled={negotiationLoading}
                />
              </Box>
            </Box>

            <B4CButton
              size={Size.Small}
              label="Pagar y agendar servicio"
              fullWidth
            />
            {negotiationError && (
              <Typography variant="body2" color="error">
                {negotiationError}
              </Typography>
            )}
          </>
        ) : (
          <Typography>No se encontraron datos</Typography>
        )}
      </Box>
    </B4CModal>
  );
};
