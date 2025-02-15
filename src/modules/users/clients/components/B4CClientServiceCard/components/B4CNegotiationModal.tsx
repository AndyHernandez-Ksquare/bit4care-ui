import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CModal } from "@/components/BigElements/B4CModal";
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
  Divider,
  TextField,
  Typography,
} from "@mui/material";

interface B4CNegotiationModalProps {
  open: boolean;
  onClose: () => void;
}

export const B4CNegotiationModal = ({
  open,
  onClose,
}: B4CNegotiationModalProps) => {
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
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box display="flex" alignItems="center" gap={"1rem"} mb={2}>
            <Avatar src="/profile.png" sx={{ width: 64, height: 64 }} />
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Typography variant="h6" fontWeight="bold">
                María Pérez
              </Typography>
              <Chip
                label="Cuidadora profesional"
                sx={{ bgcolor: colorPalette.grey5 }}
              />
            </Box>
          </Box>

          {/* Calificación y estado de pago */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={"1rem"}
            mb={2}
          >
            <B4CStarRating rating={4} />

            <Chip label="Por pagar" color="warning" />
          </Box>
        </Box>

        {/* Información del servicio */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box display="flex" flexDirection="column" gap={"1rem"}>
            <Box display="flex" alignItems="center">
              <CalendarMonth color="primary" />
              <Typography variant="body2">
                04/04/2025 - 06/04/2025 (17 horas)
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <AttachMoney color="primary" />
              <Typography variant="body2">$2500</Typography>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap={"1rem"}>
            <Box display="flex" alignItems="center">
              <MedicalInformationRounded color="primary" />
              <Typography variant="body2">
                Cuidador general, cualquier especialidad, cualquier experiencia
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOn color="primary" />
              <Typography variant="body2">
                Calle de los Arcos 123, Colonia Centro Histórico, Querétaro,
                QRO, 76000
              </Typography>
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
              $2500
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gap={1} mb={2}>
            <Typography variant="body2" fontWeight="bold">
              Oferta (Bid) de Cliente
            </Typography>
            <TextField
              placeholder="Introduce tu oferta"
              size="small"
              fullWidth
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
              label="Contraofertar"
            />
          </Box>
        </Box>

        <B4CButton
          size={Size.Small}
          label=" Pagar y agendar servicio"
          fullWidth
        />
      </Box>
    </B4CModal>
  );
};
