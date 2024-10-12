import { B4CDefinitionComponent } from "@/components/B4CDefinitionComponent/B4CDefinitionComponent";
import { B4CStarRating } from "@/components/B4CStarRating";
import { colorPalette } from "@/style/partials/colorPalette";
import {
  Avatar,
  Box,
  Breadcrumbs,
  CircularProgress,
  Divider,
  Grid2 as Grid,
  Link,
  Typography,
} from "@mui/material";
import { B4CMakeAppointment } from "../../components/B4CMakeAppointment";
import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { ClientAboutAndReview } from "./components/ClientAboutAndReview";
import { Dispatch, SetStateAction } from "react";
import { calculateAverageRating } from "@/constants/calculateAverageRating";
import { useServiceData } from "../../context/NewServiceContext";

interface B4CColaboradorDetailProps {
  loading: boolean;
  setServiceStep: Dispatch<SetStateAction<number>>;
}

export const B4CColaboradorDetail = ({
  loading,
  setServiceStep,
}: B4CColaboradorDetailProps) => {
  const { provider } = useServiceData();
  const handleSchedule = () => {
    setServiceStep(1);
  };

  return (
    <>
      <Box
        sx={{
          marginBottom: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="h4" display={{ color: colorPalette.primary }}>
          Colaboradores
        </Typography>
        <Breadcrumbs separator={<B4CNextIcon />} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/cliente/">
            <Typography typography="body-normal">Explorar</Typography>
          </Link>
          {loading ? (
            <Typography typography="body-normal-bold">Cargando...</Typography>
          ) : (
            <Typography
              typography="body-normal-bold"
              color={colorPalette.primary}
            >
              {provider?.User.name}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>

      <Grid container spacing={24} sx={{ height: "100%" }}>
        <Grid size={{ xs: 12, desktop: 8 }}>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: 32 }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={{
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white,
                borderRadius: "20px",
                paddingInline: "24px",
                paddingBlock: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                display="flex"
                flexDirection={"row"}
                gap="16px"
                sx={{ alignText: "center" }}
              >
                <Avatar
                  alt={provider?.User.name}
                  src="/static/images/avatar/2.jpg"
                  sx={{ width: "130px", height: "130px" }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography variant="body-large-bold">
                    {provider?.User.name}
                  </Typography>
                  <Typography
                    variant="body-normal-bold"
                    color={colorPalette.primary}
                  >
                    {provider?.speciality}
                  </Typography>

                  {provider?.reviewed && (
                    <Typography
                      variant="body-small-bold"
                      color={colorPalette.success}
                    >
                      Cuenta verificada
                    </Typography>
                  )}

                  <Box
                    mt={"8px"}
                    display="flex"
                    flexDirection={"row"}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <B4CDefinitionComponent label="Locacion:">
                      <Typography variant="body-small-bold">
                        {`${provider?.colony}`}
                      </Typography>
                    </B4CDefinitionComponent>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <Typography variant="body-small-bold">
                        Experiencia
                      </Typography>

                      <B4CDefinitionComponent label="Años de experiencia:">
                        <Typography variant="body-small-bold">
                          {provider?.years_of_experience} años
                        </Typography>
                      </B4CDefinitionComponent>
                      <B4CDefinitionComponent label="Horas trabajadas:">
                        <Typography variant="body-small-bold">
                          {provider?.worked_hours} horas
                        </Typography>
                      </B4CDefinitionComponent>

                      <B4CDefinitionComponent label="Calificación:">
                        <B4CStarRating
                          rating={calculateAverageRating(
                            provider?.carerReviews,
                          )}
                        />
                      </B4CDefinitionComponent>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-around",
                  border: `1px solid ${colorPalette.primary}`,
                  borderRadius: "8px",
                  paddingBlock: "16px",
                  marginBlock: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body-small-bold">
                    {provider?.completed_services}
                  </Typography>
                  <Typography variant="body-small">
                    Servicios completados
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                ></Divider>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body-small-bold">
                    ${provider?.payment_range}/h
                  </Typography>
                  <Typography variant="body-small">Tarifa</Typography>
                </Box>
              </Box>
              <ClientAboutAndReview
                biography={provider?.description}
                reviews={provider?.carerReviews}
              />
            </Box>
          )}
        </Grid>
        <Grid size={{ xs: 12, desktop: 4 }}>
          <B4CMakeAppointment handleSchedule={handleSchedule} />
        </Grid>
      </Grid>
    </>
  );
};
