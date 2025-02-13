import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { color } from "@/ts/types/shared/colors";
import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { B4CClientServicesCardProps } from "@/ts/types/components/B4CClientServicesCard.type";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { spacings } from "@/style/partials/spacings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import dayjs from "dayjs";
import { useState } from "react";
import { B4CModal } from "@/components/BigElements/B4CModal";

export const B4CClientServiceCard = ({
  id,
  carerName,
  address,
  service,
  status,
  startDate,
  endDate,
  carerSpecialty,
  isAssigned = false,
  amount,
  carerDescription,
}: B4CClientServicesCardProps) => {
  const statusTagInfo: { [key: string]: { color: string; label: string } } = {
    pending: { color: "warning", label: "Solicitado" },
    realizado: { color: "success", label: "Realizado" },
    accepted: { color: "success", label: "Aceptado" },
    "no realizado": { color: "error", label: "No Realizado" },
  };

  // Estado para controlar la apertura del modal de cancelacion
  const [openCancelModal, setOpenCancelModal] = useState(false);
  // Convertir `status` a string y en minúsculas
  const normalizedStatus = String(status).toLowerCase();

  // Convertir fechas a un formato legible
  const formattedStartDate = startDate
    ? dayjs(startDate).format("DD [de] MMMM [de] YYYY")
    : "Sin fecha";
  const formattedEndDate = endDate
    ? dayjs(endDate).format("DD [de] MMMM [de] YYYY")
    : "Sin fecha";
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleEdit = () => {
    navigate(`/cliente/mis-servicios/${id}`); // Redirige al formulario de edición con el ID
  };

  // Función para abrir y cerrar el modal
  const handleOpenCloseCancelModal = () => {
    setOpenCancelModal(!openCancelModal);
  };

  // Función que se ejecuta al confirmar la cancelación
  const handleConfirmCancel = () => {
    console.log("Solicitud cancelada:", id);
    setOpenCancelModal(false);
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "615px",
          border: `1px solid ${colorPalette.grey5}`,
          borderRadius: "20px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          backgroundColor: colorPalette.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", desktop: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "start", desktop: "center" },
            gap: { xs: spacings.spacing2, desktop: spacings.spacing0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Avatar
              sx={{ width: "64px", height: "64px" }}
              alt={isAssigned || carerName ? "Juan Perez" : undefined}
              src=" image url"
            />
            <Box>
              <Typography variant="h5" sx={{ color: colorPalette.primary }}>
                {isAssigned || carerName
                  ? "Juan Perez"
                  : "Cuidador no asignado"}
              </Typography>
              {isAssigned && (
                <Typography
                  variant="body-normal"
                  sx={{ color: colorPalette.grey4 }}
                >
                  {carerDescription}
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {isAssigned && <B4CStarRating rating={4} />}
            <B4CTag
              label={statusTagInfo[normalizedStatus].label}
              color={statusTagInfo[normalizedStatus].color as color}
            />
          </Box>
        </Box>
        <Grid container spacing={{ xs: "8px" }}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon sx={{ color: colorPalette.primary }} />
            <Typography>{`${formattedStartDate} - ${formattedEndDate} `}</Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <AttachMoneyIcon
              sx={{
                color: colorPalette.primary,
              }}
            />
            <Typography variant="body-normal">
              {new Intl.NumberFormat("es-MX", {
                style: "currency",
                currency: "MXN",
              }).format(amount)}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <MedicalInformationIcon sx={{ color: colorPalette.primary }} />
            <Typography variant="body-normal">{carerSpecialty}</Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              gap: spacings.spacing1,
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ color: colorPalette.primary }} />
            <Typography variant="body-normal">{address}</Typography>
          </Grid>
        </Grid>
        {isAssigned && (
          <B4CButton fullWidth size={Size.Small} label="Pagar solicitud" />
        )}
        {isAssigned ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: { xs: "column", desktop: "row" },
              justifyContent: "space-around",
              gap: "1rem",
            }}
          >
            <B4CButton
              variant="secondary"
              fullWidth
              size={Size.Small}
              label="Negociar"
            />
            <B4CButton
              fullWidth
              variant="secondary"
              size={Size.Small}
              label="Ignorar"
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: { xs: "column", desktop: "row" },
              justifyContent: "space-around",
              gap: "1rem",
            }}
          >
            <B4CButton
              fullWidth
              size={Size.Small}
              label="Editar"
              onClick={handleEdit}
            />
            <B4CButton
              fullWidth
              variant="secondary"
              size={Size.Small}
              label="Cancelar"
              onClick={handleOpenCloseCancelModal}
            />
          </Box>
        )}
      </Box>

      <B4CModal open={openCancelModal} onClose={handleOpenCloseCancelModal}>
        <DialogTitle>Cancelar solicitud de Servicio</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Al presionar el botón, confirmas la cancelación de tu solicitud y la
            eliminación del mismo. Tendrás que crear una nueva solicitud para
            poder acceder a los servicios de nuestros cuidadores.{" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <B4CButton
            fullWidth
            onClick={handleConfirmCancel}
            label="Confirmar"
          />
        </DialogActions>
      </B4CModal>
    </>
  );
};
