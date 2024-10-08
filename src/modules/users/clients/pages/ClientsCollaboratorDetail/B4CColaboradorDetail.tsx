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
  SxProps,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { B4CReviewComponent } from "../../components/B4CReviewComponent";
import { B4CMakeAppointment } from "../../components/B4CMakeAppointment";
import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CarerReview,
  GetOneCarer,
} from "@/ts/types/api/carer/GetOneCarer.type";
import { MockGetAllCarerRequests } from "@/services/careerServices/CareerMockData";

const tabStyle: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: "700",
  color: colorPalette.grey3,
  gap: "8px",
  margin: 0,
};

export const B4CColaboradorDetail = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [provider, setProvider] = useState<GetOneCarer | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Simula la obtención de datos
  const fetchProvider = async (providerId: number) => {
    const data = await MockGetAllCarerRequests();
    const singleProvider = data.find((provider) => provider.id === providerId);
    if (singleProvider) {
      setProvider(singleProvider);
    } else {
      setProvider(null);
    }
    setLoading(false);
  };

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    console.log(tabValue);
    setTabValue(newValue);
  };

  const handleSchedule = () => {
    navigate("/cliente/confirmar-y-pagar");
  };

  // Función para calcular el promedio de estrellas de las reseñas
  const calculateAverageRating = (reviews: CarerReview[] = []) => {
    if (reviews.length === 0) return 0; // Si no hay reseñas, el rating es 0
    const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
    return totalStars / reviews.length;
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const careerId = queryParams.get("careerId");

    if (careerId) {
      // Fetch user details if userId is present in query params
      fetchProvider(parseInt(careerId));
    }
  }, [location.search]);

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
                justifyContent="start"
                gap="16px"
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

                    <Box>
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

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  aria-label="basic tabs example"
                  sx={{ height: "40px" }}
                >
                  <Tab sx={tabStyle} label="Acerca de" iconPosition="start" />
                  <Tab sx={tabStyle} label="Reseñas" iconPosition="start" />
                </Tabs>
              </Box>

              {tabValue === 0 && (
                <>
                  <Box
                    mt={16}
                    sx={{ display: "flex", flexDirection: "row", gap: "8px" }}
                  >
                    <Typography variant="body-small-bold">
                      Biografía:
                    </Typography>
                    <Typography variant="body-small">
                      {provider?.description}
                    </Typography>
                  </Box>
                  {/* <Box
                  mt={16}
                  sx={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
                  <Typography variant="body-small-bold">
                    Habilidades:
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "16px" }}
                  >
                    {user.skills.map((skill) => (
                      <Chip color="primary" key={skill} label={skill} />
                    ))}
                  </Box>
                </Box> */}
                </>
              )}
              {tabValue === 1 &&
                (provider?.carerReviews?.length ? (
                  <B4CReviewComponent reviews={provider?.carerReviews} />
                ) : (
                  <Box sx={{ width: "100%", display: "flex", padding: "1rem" }}>
                    <Typography
                      variant="body-small"
                      sx={{ marginInline: "auto" }}
                    >
                      No hay reseñas disponibles para este cuidador
                    </Typography>
                  </Box>
                ))}
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
