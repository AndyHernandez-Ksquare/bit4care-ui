import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { formatDateOnly } from "@/constants/formatDate";
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
import { useState } from "react"; // Asegúrate de que la ruta sea la correcta

interface B4CNegotiationModalProps {
  serviceId: string;
  open: boolean;
  onClose: () => void;
  data: GetOneApplication; // Datos de la solicitud que se reciben desde el padre
}

export const B4CCarerNegotiationModal = ({
  data,
  open,
  onClose,
}: B4CNegotiationModalProps) => {
  // Hook para iniciar la negociación
  const { startNegotiation, loading, negotiation, error } =
    useStartNegotiation();
  // Estado para guardar la oferta (bid) ingresada por el cliente
  // Acceso al Snackbar para mostrar mensajes
  const { open: openSnackbar } = useSnackbar();

  const [bid, setBid] = useState<string>("");

  // Función que se ejecuta al presionar el botón "Contraofertar"
  const handleCounterOffer = async () => {
    // Validar que se haya ingresado un valor
    if (!bid) return;
    const bidValue = parseFloat(bid);
    if (isNaN(bidValue)) return; // Puedes agregar un mensaje de error o validación adicional

    try {
      // Se asume que "data.id" es el identificador de la solicitud (applicationRequestId)
      await startNegotiation({
        applicationRequestId: data.id,
        caregiver_counter_offer: bidValue,
      });
      // Mostrar mensaje de éxito y cerrar el modal
      openSnackbar("Negociación iniciada correctamente", "success");
      onClose();
    } catch (err) {
      // Aquí podrías manejar el error, por ejemplo, mostrando un snackbar de error:
      openSnackbar("Error al iniciar la negociación", "error");
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

          <B4CButton size={Size.Small} label="Aceptar oferta" fullWidth />
          {error && (
            <Typography variant="body2" color="error">
              {error.message}
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
