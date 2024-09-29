import { PageLayout } from "@/components/B4CPageLayout";
import { B4CTab } from "@/components/B4CTab/B4CTab";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { B4CClientActiveServices } from "../../components/B4CClientActiveServices";
import { B4CInactiveServices } from "../../components/B4CInactiveServices";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import { useNavigate } from "react-router-dom";

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
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: spacings.spacing3,
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
        />
      </Grid>
      <Grid item xs={12} marginBottom={spacings.spacing2}>
        {serviceStatus[tab]}
      </Grid>
    </PageLayout>
  );
};
