import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { formatDateOnly } from "@/constants/formatDate";
import { useAcceptNegotiation } from "@/context/api/hooks/application-requests/useAcceptNegotiation";
import { useGetOneAppRequest } from "@/context/api/hooks/application-requests/useGetOneAppRequest";
import { useMakeNegotiation } from "@/context/api/hooks/application-requests/useMakeNegotiation";
import { useStartNegotiation } from "@/context/api/hooks/application-requests/useStartNegotiation";
import { useSnackbar } from "@/context/ui/SnackbarContext";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import { GetOneApplication } from "@/ts/types/api/applicationRequest";
import {
  AttachMoney,
  CalendarMonth,
  LocationOn,
  MedicalInformationRounded,
} from "@mui/icons-material";
import { Avatar, Box, Chip, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface B4CNegotiationModalProps {
  serviceId: string;
  open: boolean;
  onClose: () => void;
  data: GetOneApplication; // Datos que se reciben desde el padre
}

export const B4CCarerNegotiationModal = ({
  serviceId,
  open,
  onClose,
}: B4CNegotiationModalProps) => {
  // Renombramos error para evitar conflicto
  const {
    data,
    getOneAppLoading,
    error: appRequestError,
  } = useGetOneAppRequest(serviceId);

  const {
    startNegotiation,
    loading,
    negotiation,
    error: startNegotiationError,
  } = useStartNegotiation();

  const {
    makeNegotiation,
    isLoading: negotiationLoading,
    error: negotiationError,
  } = useMakeNegotiation();

  const { acceptNegotiation } = useAcceptNegotiation();

  const { open: openSnackbar } = useSnackbar();

  const [bid, setBid] = useState<string>("");

  // Función para manejar la contraoferta
  const handleCounterOffer = async () => {
    if (!bid) return;
    const bidValue = parseFloat(bid);
    if (isNaN(bidValue)) return; // Validación adicional

    try {
      // Aquí usamos el operador ! porque ya verificamos que data no es nulo
      if (!data!.Negotiation || data!.Negotiation.length === 0) {
        await startNegotiation({
          applicationRequestId: data!.id,
          caregiver_counter_offer:
            bidValue / (1 - parseFloat(data!.commision_percentage)),
        });
      } else {
        await makeNegotiation(
          data!.Negotiation[data!.Negotiation.length - 1].id.toString(),
          {
            offer_by_client:
              data!.Negotiation[data!.Negotiation.length - 1].offer_by_client,
            caregiver_counter_offer:
              bidValue / (1 - parseFloat(data!.commision_percentage)),
            status: "IN_PROGRESS",
          },
        );
      }
      openSnackbar("Negociación iniciada correctamente", "success");
      onClose();
    } catch (err) {
      openSnackbar("Error al iniciar la negociación", "error");
    }
  };

  // Si los datos aún no están listos, mostramos un mensaje de carga
  if (getOneAppLoading || !data) {
    return (
      <B4CModal open={open} onClose={onClose}>
        <Box p={2}>
          <Typography>Cargando...</Typography>
        </Box>
      </B4CModal>
    );
  }

  // Dentro del componente, antes del return:
  const lastNegotiation =
    data.Negotiation && data.Negotiation.length > 0
      ? data.Negotiation[data.Negotiation.length - 1]
      : null;

  // Si hay negociación, usamos offer_by_client del último elemento; de lo contrario, data.amount.
  const baseAmount = lastNegotiation
    ? lastNegotiation.offer_by_client
    : data.amount;

  // Calculamos la comisión usando el baseAmount.
  const commission = baseAmount * parseFloat(data.commision_percentage);

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
        <>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box display="flex" alignItems="center" gap="1rem" mb={2}>
              <Avatar
                src={"/default-profile.png"}
                sx={{ width: 64, height: 64 }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
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
          </Box>

          {/* Información del servicio */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Box display="flex" alignItems="center">
                <CalendarMonth color="primary" />
                <Typography variant="body2">
                  {formatDateOnly(data.start_date)} -{" "}
                  {formatDateOnly(data.end_date)}
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
                ${baseAmount - commission}
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
                Oferta (Bid) de Colaborador
              </Typography>
              <TextField
                placeholder="Introduce tu oferta"
                size="small"
                fullWidth
                value={bid}
                onChange={(e) => setBid(e.target.value)}
              />
              <Typography variant="caption" color="gray">
                El precio recomendado puede ser hasta menos 15% sobre el precio
                mínimo sugerido.
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
                label={loading ? "Procesando..." : "Contraofertar"}
                onClick={handleCounterOffer}
                disabled={loading}
              />
            </Box>
          </Box>

          <B4CButton
            size={Size.Small}
            label="Aceptar oferta"
            fullWidth
            onClick={() => {
              if (data?.Negotiation && data.Negotiation.length > 0) {
                acceptNegotiation(
                  data.Negotiation[data.Negotiation.length - 1].id.toString(),
                );
              }
            }}
          />
          {(appRequestError || negotiationError) && (
            <Typography variant="body2" color="error">
              {(appRequestError || startNegotiationError?.message) ?? "Error"}
            </Typography>
          )}
          {negotiation && (
            <Typography variant="body2" color="success.main">
              Negociación iniciada correctamente
            </Typography>
          )}
        </>
      </Box>
    </B4CModal>
  );
};
