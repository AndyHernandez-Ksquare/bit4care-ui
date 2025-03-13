import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { color } from "@/ts/types/shared/colors";
import {
  Alert,
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid2 as Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { B4CClientServicesCardProps } from "@/ts/types/components/B4CClientServicesCard.type";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { spacings } from "@/style/partials/spacings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import dayjs from "dayjs";
import { useState } from "react";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { useDeleteApplicationRequest } from "@/context/api/hooks/application-requests/useDeleteApplicationRequest";
import { B4CViewColabModal } from "./components/B4CViewColabModal";
import { B4CNegotiationModal } from "./components/B4CNegotiationModal";

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
  const [openViewColab, setOpenViewColab] = useState(false);

  // Estado para controlar la apertura del modal de cancelacion
  const [openNegotiationModal, setOpenNegotiationModal] = useState(false);
  // Estado para controlar la apertura del modal de cancelacion
  const [openCancelModal, setOpenCancelModal] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );
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

  const { deleteApplicationRequest } = useDeleteApplicationRequest();

  // Función para abrir y cerrar el modal
  const handleOpenCloseCancelModal = () => {
    setOpenCancelModal(!openCancelModal);
  };

  const handleOpenCloseNegotiationModal = () => {
    setOpenNegotiationModal(!openNegotiationModal);
  };

  // Función para abrir y cerrar el modal
  const handleOpenViewColabModal = () => {
    setOpenViewColab(!openViewColab);
  };

  // Función que se ejecuta al confirmar la cancelación
  const handleConfirmCancel = async () => {
    try {
      await deleteApplicationRequest(id.toString());
      setSnackbarMessage("Solicitud eliminada con éxito");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error al eliminar solicitud:", error);
      setSnackbarMessage("Error al eliminar la solicitud");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
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
              sx={{
                width: "64px",
                height: "64px",
                cursor: isAssigned ? "pointer" : "default",
              }}
              alt={isAssigned || carerName ? carerName : undefined}
              src=" image url"
              onClick={isAssigned ? handleOpenViewColabModal : undefined}
            />
            <Box>
              <Typography variant="h5" sx={{ color: colorPalette.primary }}>
                {isAssigned || carerName ? carerName : "Cuidador no asignado"}
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
              onClick={handleOpenCloseNegotiationModal}
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

      <B4CViewColabModal
        colabId={id}
        openViewColab={openViewColab}
        handleOpenViewColabModal={handleOpenViewColabModal}
      />

      <B4CNegotiationModal
        open={openNegotiationModal}
        onClose={handleOpenCloseNegotiationModal}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Se oculta después de 3 segundos
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
