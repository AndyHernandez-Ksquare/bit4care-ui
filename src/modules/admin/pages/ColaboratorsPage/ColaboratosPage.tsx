import { PageLayout } from "@/modules/admin/PageLayout";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid2 as Grid } from "@mui/material";

import { ColaboratorsTab } from "./ColaboratorsTab";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const ColaboratosPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determina cuál ruta está activa
  const activeTab =
    location.pathname.includes("pendientes") ||
    location.pathname.includes("solicitud")
      ? 1
      : 0;

  return (
    <PageLayout title="Colaboradores">
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: spacings.spacing3,
              marginBottom: spacings.spacing3,
            }}
          >
            <ColaboratorsTab
              label="Registrados"
              active={activeTab === 0}
              onClick={() => navigate("/admin/colaboradores/")}
            />
            <ColaboratorsTab
              label="Pendientes de registrar"
              active={activeTab === 1}
              onClick={() => navigate("/admin/colaboradores/pendientes")}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} marginBottom={spacings.spacing2}>
          <Outlet />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
