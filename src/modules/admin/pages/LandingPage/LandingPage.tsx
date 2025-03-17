import Visuals from "@/assets/images/Visuals.png";
import { B4CBenefitsCard } from "@/components/B4CBenefitsCard";
import { B4CButton } from "@/components/B4CButton";
import { B4CFooter } from "@/components/B4CFooter.tsx";
import { B4CLandingPageNavBar } from "@/components/B4CLandingPageNavBar/B4CLandingPageNavBar";
import { benefits } from "@/constants/benefits";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import { Box, Grid2 as Grid, Typography } from "@mui/material";

export const LandingPage = () => {
  return (
    <>
      <Grid
        sx={{
          background: colorPalette.backgroundLinearGradient,
        }}
      >
        <B4CLandingPageNavBar alternative />
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
            >
              <Typography
                variant="h1"
                gutterBottom
                zIndex={2}
                sx={{
                  textWrap: "balance",
                }}
              >
                Encuentra el personal que necesitas
              </Typography>
              <Typography variant="body-normal" mt={2} gutterBottom>
                Conecta con una amplia red de proveedores de servicios, desde
                reparaciones del hogar hasta servicios profesionales, ¡todo en
                un solo lugar!
              </Typography>
              <Box
                display={"flex"}
                my={16}
                gap={12}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={{
                  xs: "column",
                  desktopHD: "row",
                }}
              >
                <B4CButton
                  label="Regístrate como Colaborador"
                  size={Size.Small}
                  variant="secondary"
                  labelColor={colorPalette.info}
                  href="/colaborador"
                  sx={{
                    maxWidth: 280,
                    textWrap: "nowrap",
                    background: `${colorPalette.info}33`,
                  }}
                />
                <B4CButton
                  label="Agenda un servicio"
                  size={Size.Small}
                  href="/cliente"
                  sx={{
                    maxWidth: 280,
                    textWrap: "nowrap",
                    background: colorPalette.info,
                  }}
                />
              </Box>
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
                display={"flex"}
                justifyContent={{
                  xs: "center",
                  tablet: "flex-end",
                }}
              >
                <img
                  src={Visuals}
                  alt="Landing Page Visual"
                  style={{
                    maxWidth: "100%",
                    justifySelf: "center",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          mt={{
            xs: 40,
            tablet: 120,
          }}
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
