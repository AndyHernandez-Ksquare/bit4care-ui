import { B4CButton } from "@/components/B4CButton";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ClassIcon from "@mui/icons-material/Class";
import { color } from "@/ts/types/shared/colors";
import { B4CStarRating } from "@/components/B4CStarRating";
import "./ColaboratorsServicesCard.css";
import { ColaboratorsServicesCardProps, Status } from "@/ts/types/components";
import { useEffect, useState } from "react";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { useNotInterested } from "@/context/api/hooks/application-requests/useNotInterested";
import { useSnackbar } from "@/context/ui/SnackbarContext";
import { useMarkAsInterested } from "@/context/api/hooks/application-requests/useMarkAsInterested";
import { B4CCarerNegotiationModal } from "./components/B4CCarerNegotiationModal";
import {
  GetAllApplication,
  GetOneApplication,
} from "@/ts/types/api/applicationRequest";
import { useNavigate } from "react-router-dom";
import { statusTagInfo } from "@/constants/serviceCardsTags";

export const ColaboratorsServicesCard = ({
  id,
  name,
  fee,
  data,
  schedule,
  address,
  service,
  negotiation,
  status,
  skills,
  isAssigned = false,
  profile_picture_url,
  comments,
  b4cfee = 0,
  onClick,
}: ColaboratorsServicesCardProps & { data: GetOneApplication }) => {
  const normalizedStatus = status.toLowerCase() as Status;
  const isPending = normalizedStatus === "pending";
  const isNegotiationActive = normalizedStatus === "active_negotiation";

  const isAccepted = normalizedStatus === "accepted";

  // Hardcodeando horarios de trabajo 🕒
  const workShifts = [
    { date: "09 de Marzo de 2025", start: "08:00 AM", end: "10:00 AM" },
  ];

  const { markAsNotInterested, loading, error, isSuccess } = useNotInterested();

  const { markAsInterested } = useMarkAsInterested();

  const [openModal, setOpenModal] = useState(false);
  const [openNegotiateModal, setOpenNegotiateModal] = useState(false);

  const [selectedRequest, setSelectedRequest] =
    useState<GetAllApplication | null>(null); // ✅ Estado para la solicitud seleccionada

  const { open } = useSnackbar(); // Usa el hook del Snackbar global

  const handleIgnoreRequest = async () => {
    try {
      await markAsNotInterested(id.toString()); // Llamada al API con el ID de la solicitud
      open("Solicitud ignorada con éxito", "success"); // Mostrar mensaje de éxito
    } catch (err) {
      open("Error al ignorar la solicitud", "error"); // Mostrar error
    }
  };

  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleDetail = () => {
    navigate(`/colaborador/mis-servicios/${id}`); // Redirige al formulario de edición con el ID
  };

  const filteredNegotiations =
    negotiation?.filter((item) => item.applicationRequestId === parseInt(id)) ||
    [];

  const amount = fee - b4cfee;

  const priceToDisplay = filteredNegotiations.length
    ? filteredNegotiations[filteredNegotiations.length - 1]
        .caregiver_counter_offer
    : amount;

  const canCarerOffer = filteredNegotiations.length
    ? filteredNegotiations[filteredNegotiations.length - 1]
        .last_modifier_role === "CARER"
    : false;

  useEffect(() => {
    console.log(status);
    status = status.toLowerCase() as Status;
  }, []);
  return (
    <>
      <Box className="colaborator-service-card-container">
        {/* === Header === */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              desktop: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: "64px", height: "64px" }}
              alt={name}
              src={profile_picture_url || undefined}
            />
            <Box>
              <Typography variant="h5" sx={{ color: colorPalette.primary }}>
                {name}
              </Typography>
              <Typography
                variant="body-medium-bold"
                sx={{ color: colorPalette.grey4 }}
              >
                {service}
              </Typography>
            </Box>
          </Box>
          {/* === Persona Asignada === */}
          <Box
            sx={{
              display: isAssigned ? "flex" : "none",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Avatar sx={{ width: "48px", height: "48px" }} />
            <Box>
              <Typography variant="body-normal">Maria Perez</Typography>
              <B4CStarRating rating={3} />
            </Box>
          </Box>
          {/* === Chip de Status === */}
          <Box
            sx={{
              mr: { xs: "auto", desktop: 0 },
            }}
          >
            <B4CTag
              label={statusTagInfo[normalizedStatus].label}
              color={statusTagInfo[normalizedStatus].color as color}
            />
          </Box>
        </Box>

        {/* === Body === */}
        <Grid container spacing={16}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MessageIcon
              sx={{
                color: colorPalette.primary,
                fontSize: "1.25lh",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="body-normal"
              sx={{
                textWrap: "balance",
              }}
            >
              {comments}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CalendarMonthIcon
              sx={{
                color: colorPalette.primary,
                fontSize: "1.25lh",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="body-normal"
              sx={{
                textWrap: "balance",
              }}
            >
              {schedule}
            </Typography>
            <Button
              onClick={() => setOpenModal(true)}
              sx={{
                textTransform: "none",
                marginLeft: "auto",
                color: colorPalette.primary,
                fontWeight: "bold",
              }}
            >
              Ver desglose de horas
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, desktop: 4 }}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <RequestQuoteIcon
              sx={{
                color: colorPalette.primary,
                fontSize: "1.25lh",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="body-normal"
              sx={{
                textWrap: "balance",
              }}
            >
              Recibirás <strong>${priceToDisplay}</strong> por el servicio
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, desktop: 4 }}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AttachMoneyIcon
              sx={{
                color: colorPalette.primary,
                fontSize: "1.25lh",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="body-normal"
              sx={{
                textWrap: "balance",
              }}
            >
              Costo total <strong>${fee}</strong>
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, desktop: 4 }}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MonetizationOnIcon
              sx={{
                color: colorPalette.primary,
                fontSize: "1.25lh",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="body-normal"
              sx={{
                textWrap: "balance",
              }}
            >
              La cuota de Bid4Care es de ${b4cfee}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ClassIcon
              sx={{
                color: colorPalette.primary,
                fontSize: "1.25lh",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="body-normal"
              sx={{
                textWrap: "balance",
              }}
            >
              {skills.join(", ")}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <LocationOnIcon
              sx={{
                color: colorPalette.primary,
                fontSize: "1.25lh",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="body-normal"
              sx={{
                textWrap: "balance",
              }}
            >
              {address}
            </Typography>
          </Grid>
        </Grid>
        {/*  Nota de Sergio: Esto lo voy a comentar porque está cool y seria un desperdicio borrarlo alv
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginInline: 0,
          alignItems: "left",
        }}
      >
        {skills.map((skill) => {
          return <B4CTag label={skill} />;
        })}
      </Box>*/}

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            flexDirection: "column",
          }}
        >
          {isAccepted && (
            <B4CButton
              size={Size.Small}
              label="Ver detalles de servicio"
              variant="primary"
              onClick={handleDetail}
              disabled={data.payment_intent_id === null}
              fullWidth
            />
          )}
          {isNegotiationActive && (
            <B4CButton
              size={Size.Small}
              label="Negociar Oferta (Bid)"
              variant="secondary"
              fullWidth
              disabled={canCarerOffer}
              onClick={() => setOpenNegotiateModal(true)}
            />
          )}
          {isPending && (
            <>
              <B4CButton
                size={Size.Small}
                label="Tomar Oferta"
                fullWidth
                onClick={() => markAsInterested(id.toString())}
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: {
                    xs: "column",
                    desktop: "row",
                  },
                }}
              >
                <B4CButton
                  size={Size.Small}
                  label="Negociar Oferta (Bid)"
                  variant="secondary"
                  fullWidth
                  onClick={() => setOpenNegotiateModal(true)}
                />
                <B4CButton
                  size={Size.Small}
                  label={loading ? "Ignorando..." : "Ignorar Solicitud"}
                  variant="secondary"
                  fullWidth
                  onClick={handleIgnoreRequest}
                  disabled={loading}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Modal para mostrar los horarios de trabajo */}
      <B4CModal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" mb={2}>
            Desglose de horarios
          </Typography>
          {workShifts.map((shift, index) => (
            <Typography key={index} variant="body-normal" mb={1}>
              📅 {shift.date}: {shift.start} - {shift.end}
            </Typography>
          ))}
        </Box>
      </B4CModal>

      {/* Modal de Negociación */}
      <B4CCarerNegotiationModal
        serviceId={id}
        open={openNegotiateModal}
        onClose={() => setOpenNegotiateModal(false)}
        data={data}
      />
    </>
  );
};
