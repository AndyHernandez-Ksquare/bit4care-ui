import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Size } from "@/ts/enums";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import map from "@/assets/images/hero_maps_static_api.png";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CTextfield } from "@/components/B4CTextfield";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { MockGetAllApplicationRequests } from "@/services/applicationRequestServices/ApplicationRequestMockData";
import { GetAllApplication } from "@/ts/types/api/applicationRequest";
import { calculateTotalHours } from "@/constants/calculateTotalHours";
import { spacings } from "@/style/partials/spacings";

interface B4CClientServiceDetailProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

export const B4CClientServiceDetail = ({
  id,
  isOpen,
  onClose,
}: B4CClientServiceDetailProps) => {
  const [reclaim, setReclaim] = useState<boolean>(false);
  const [application, setApplication] = useState<GetAllApplication | null>(
    null,
  );
  const [hours, setHours] = useState<number>(0);

  const handleSetHour = (timeRange: string) => {
    setHours(calculateTotalHours(timeRange));
  };

  const fetchSingleApplication = async () => {
    const data = await MockGetAllApplicationRequests();
    const singleApplication = data.find((application) => application.id === id);
    if (singleApplication) {
      setApplication(singleApplication);
      handleSetHour(singleApplication.time_range);
    } else {
      setApplication(null);
    }
  };

  const handleRejecConfirmation = () => {
    setReclaim(!reclaim);
  };

  useEffect(() => {
    fetchSingleApplication();
  }, [id]);

  return (
    <B4CModal open={isOpen} onClose={onClose}>
      {!reclaim && application && (
        <Grid container spacing={16}>
          <Grid
            size={{ xs: 12 }}
            container
            sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Grid container>
              <Grid size={{ xs: 12, desktop: 6 }} className="header">
                <Avatar
                  sx={{ width: 128, height: 128, mr: 2 }}
                  alt={application.patient_name}
                  src="/broken-image.jpg"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: { xs: "center", desktop: "start" },
                  }}
                >
                  <Typography variant="h6">
                    {application.patient_name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {application.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="body-normal">
                  {application.comments}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{
                  display: "flex",
                  gap: spacings.spacing1,
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ color: colorPalette.primary }} />
                <Typography variant="body-normal">
                  {application.address}
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{
                  display: "flex",
                  gap: spacings.spacing1,
                  alignItems: "center",
                }}
              >
                <MonetizationOnIcon sx={{ color: colorPalette.primary }} />
                <Typography variant="body-normal">$8100</Typography>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{
                  display: "flex",
                  gap: spacings.spacing1,
                  alignItems: "center",
                }}
              >
                <WatchLaterIcon sx={{ color: colorPalette.primary }} />
                <Typography variant="body-normal">
                  {hours} {"hora"}
                  {hours === 1 ? "" : "s"}
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, desktop: 6 }}
                sx={{
                  display: "flex",
                  gap: spacings.spacing1,
                  alignItems: "center",
                }}
              >
                <WatchLaterIcon sx={{ color: colorPalette.primary }} />
                <Typography variant="body-normal">
                  {application.time_range}
                </Typography>
              </Grid>
            </Grid>
            <img
              src={map}
              alt="moc data del servicio google maps"
              style={{
                width: "100%",
                height: "300px",
              }}
            />

            <B4CButton
              fullWidth
              size={Size.Small}
              label="Confirmar y liberar pago completo"
              sx={{ backgroundColor: colorPalette.success }}
            />
            <B4CButton
              fullWidth
              size={Size.Small}
              label="Presentar problema con servicio"
              onClick={handleRejecConfirmation}
            />
          </Grid>
        </Grid>
      )}
      {reclaim && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "50vw",
          }}
        >
          <Typography variant="h4">Cuéntanos lo que pasó</Typography>

          <B4CTextfield
            isMultiline
            placeholder="Escribe y detalla las razones por las que no estás de acuerdo en liberar el pago."
          />

          <B4CButton
            fullWidth
            size={Size.Small}
            label="Enviar queja al administrador"
            onClick={handleRejecConfirmation}
          />
        </Box>
      )}
    </B4CModal>
  );
};
