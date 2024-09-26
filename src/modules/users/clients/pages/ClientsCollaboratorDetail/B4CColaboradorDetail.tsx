import { B4CDefinitionComponent } from "@/components/B4CDefinitionComponent/B4CDefinitionComponent";
import { B4CStarRating } from "@/components/B4CStarRating";
import { colorPalette } from "@/style/partials/colorPalette";

import {
  Avatar,
  Box,
  Breadcrumbs,
  Chip,
  Divider,
  Grid,
  Link,
  SxProps,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { B4CReviewComponent } from "../../components/B4CReviewComponent";
import { B4CMakeAppointment } from "../../components/B4CMakeAppointment";
import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { User } from "@/ts/types/api/User.type";

interface UserProfileProps {
  user: User;
}

const tabStyle: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: "700",
  color: colorPalette.grey3,
  gap: "8px",
  margin: 0,
};

export const B4CColaboradorDetail = ({ user }: UserProfileProps) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(tabValue);
    setTabValue(newValue);
  };

  const reviews = [
    {
      user: "JohnDoe",
      rating: 5,
      reviewDate: "2023-07-01",
      description: "Excellent service and friendly staff.",
    },
    {
      user: "JaneSmith",
      rating: 4,
      reviewDate: "2023-07-05",
      description: "Great experience, but the wait time was a bit long.",
    },
  ];

  return (
    <Fragment>
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
          <Typography
            typography="body-normal-bold"
            color={colorPalette.primary}
          >
            {user.name}
          </Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={24} sx={{ height: "100%" }}>
        <Grid item xs={12} desktop={9}>
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
                alt={user.name}
                src="/static/images/avatar/2.jpg"
                sx={{ width: "130px", height: "130px" }}
              />

              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <Typography variant="body-large-bold">{user.name}</Typography>
                <Typography
                  variant="body-normal-bold"
                  color={colorPalette.primary}
                >
                  {user.occupation}
                </Typography>

                {user.verified && (
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
                      {user.location}
                    </Typography>
                  </B4CDefinitionComponent>

                  <Box>
                    <Typography variant="body-small-bold">
                      Experiencia
                    </Typography>

                    <B4CDefinitionComponent label="Años de experiencia:">
                      <Typography variant="body-small-bold">
                        {user.experienceYears} años
                      </Typography>
                    </B4CDefinitionComponent>
                    <B4CDefinitionComponent label="Horas trabajadas:">
                      <Typography variant="body-small-bold">
                        {user.hoursWorked} horas
                      </Typography>
                    </B4CDefinitionComponent>

                    <B4CDefinitionComponent label="Calificación:">
                      <B4CStarRating rating={user.rating} />
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
                  {user.servicesCompleted}
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
                  ${user.rate}/h
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
              <Fragment>
                <Box
                  mt={16}
                  sx={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
                  <Typography variant="body-small-bold">Biografía:</Typography>
                  <Typography variant="body-small">{user.bio}</Typography>
                </Box>
                <Box
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
                </Box>
              </Fragment>
            )}
            {tabValue === 1 && (
              <Fragment>
                <B4CReviewComponent reviews={reviews} />
              </Fragment>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} desktop={3}>
          <B4CMakeAppointment />
        </Grid>
      </Grid>
    </Fragment>
  );
};
