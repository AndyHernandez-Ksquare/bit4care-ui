import { PageLayout } from "@/components/B4CPageLayout";
import { B4CTab } from "@/components/B4CTab/B4CTab";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid2 as Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { B4CClientActiveServices } from "../../components/B4CClientActiveServices";
import { B4CInactiveServices } from "../../components/B4CInactiveServices";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { colorPalette } from "@/style/partials/colorPalette";

export const ClientsServices = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleNewServiceClick = () => {
    navigate("/cliente/mis-servicios/nueva-solicitud");
  };

  const serviceStatus = [
    <B4CClientActiveServices key={"activeServices"} />,
    <B4CInactiveServices key={"inactiveServices"} />,
  ];
  return (
    <PageLayout title="Mis Servicios">
      <Grid size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            gap: { xs: spacings.spacing2, desktop: spacings.spacing3 },
            paddingBlock: spacings.spacing2,
          }}
        >
          <B4CTab
            label="Activos"
            active={tab === 0}
            onClick={() => setTab(0)}
          />
          <B4CTab
            label="Finalizados"
            active={tab === 1}
            onClick={() => setTab(1)}
          />
        </Box>
        <B4CButton
          label="Nuevo servicio"
          size={Size.Small}
          onClick={handleNewServiceClick}
          startIcon={<AddIcon fontSize="small" />}
          sx={{
            display: { xs: "none", desktop: "flex" },
            height: spacings.spacing6,
          }}
        />
        <IconButton
          aria-label="add"
          onClick={handleNewServiceClick}
          sx={{
            backgroundColor: colorPalette.primary,
            color: colorPalette.white,
            width: spacings.spacing6,
            height: spacings.spacing6,
            display: { xs: "flex", desktop: "none" },
          }}
        >
          <AddIcon />
        </IconButton>
      </Grid>
      <Grid
        size={{ xs: 12 }}
        marginBottom={spacings.spacing2}
        sx={{ paddingInline: { xs: "32px", desktop: 0 } }}
      >
        {serviceStatus[tab]}
      </Grid>
    </PageLayout>
  );
};
