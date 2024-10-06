import { NavBar } from "@/modules/users/colaborators/components/NavBar/NavBar";
import { Box, Grid2 as Grid, Typography } from "@mui/material";

export const Index = () => {
  return (
    <>
      <NavBar toggleDrawer={() => () => {}} alternative />
      <Grid container mt={90} width={"100%"} justifyContent={"center"}>
        <Grid maxWidth={1280}>
          <Box mt={20} display="flex" justifyContent="center">
            <Typography variant="h1">
              Encuentra el personal que necesitas
            </Typography>
            <Typography variant="h1">
              Conecta con una amplia red de proveedores de servicios, desde
              reparaciones del hogar hasta servicios profesionales, ¡todo en un
              solo lugar!
            </Typography>
          </Box>
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
};
