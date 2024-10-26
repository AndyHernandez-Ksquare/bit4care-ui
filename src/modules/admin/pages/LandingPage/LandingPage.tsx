import Visuals from "@/assets/images/Visuals.png";
import { B4CBenefitsCard } from "@/components/B4CBenefitsCard";
import { B4CFooter } from "@/components/B4CFooter.tsx";
import { benefits } from "@/constants/benefits";
import { NavBar } from "@/modules/users/colaborators/components/NavBar/NavBar";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Grid2 as Grid, Typography } from "@mui/material";

export const LandingPage = () => {
  return (
    <>
      <Grid
        sx={{
          background: colorPalette.backgroundLinearGradient,
        }}
      >
        <NavBar alternative />
        <Grid
          container
          mt={{
            xs: 130,
            tablet: 200,
          }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          columns={24}
        >
          <Grid size={{ xs: 24, tablet: 7 }}>
            <Box
              maxWidth={650}
              padding={{
                xs: "0 20px",
              }}
              textAlign={{ xs: "center", tablet: "left" }}
              sx={{
                textWrap: "balance",
              }}
            >
              <Typography variant="h1" gutterBottom zIndex={2}>
                Encuentra el personal que necesitas
              </Typography>
              <Typography variant="body-normal" mt={2} gutterBottom>
                Conecta con una amplia red de proveedores de servicios, desde
                reparaciones del hogar hasta servicios profesionales, ¡todo en
                un solo lugar!
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 24, tablet: 7 }}
            mt={{
              xs: 12,
              tablet: 0,
            }}
          >
            <Box
              display="flex"
              justifyContent={{
                xs: "center",
                tablet: "flex-end",
              }}
            >
              <Box
                component={"picture"}
                style={{
                  width: "100%",
                  maxWidth: "650px",
                }}
                justifyContent={{
                  xs: "center",
                  tablet: "flex-end",
                }}
                display={"flex"}
              >
                <img
                  src={Visuals}
                  alt="Landing Page Visual"
                  style={{
                    zIndex: 1,
                    position: "relative",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          mt={120}
          justifyContent="center"
          alignItems="center"
          spacing={3}
          columns={24}
          mb={120}
        >
          <Grid size={15} textAlign={"center"}>
            <Typography variant="h4" gutterBottom>
              Estos son los servicios que podrás encontrar
            </Typography>
            <Typography variant="body-normal" gutterBottom>
              Escoge de entre decenas de personas que están listas a realizar el
              servicio que necesitas
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            mt={24}
            columns={{
              xs: 24,
              mobile: 12,
            }}
            padding={{
              xs: "0 50px",
            }}
            maxWidth={1280}
          >
            {benefits.map((benefit, index) => (
              <Grid
                key={index}
                size={{
                  xs: 24,
                  mobile: 12,
                  tablet: 8,
                  desktop: 6,
                  desktopHD: 4,
                }}
                justifyContent={"center"}
                display={"flex"}
                mt={10}
              >
                <B4CBenefitsCard
                  title={benefit.title}
                  subtitle={benefit.subtitle}
                  color={benefit.color}
                  icon={benefit.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <B4CFooter />
    </>
  );
};
