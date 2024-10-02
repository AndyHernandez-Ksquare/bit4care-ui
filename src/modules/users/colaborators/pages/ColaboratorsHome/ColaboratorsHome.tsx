import { PageLayout } from "@/components/B4CPageLayout";
import { B4CTab } from "@/components/B4CTab/B4CTab";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import { ActiveServices } from "../ActiveServices/ActiveServices";
import { InactiveServices } from "../InactiveServices/InactiveServices";

export const ColaboratorsHome = () => {
  const [tab, setTab] = useState(0);

  const serviceStatus = [
    <ActiveServices key={"activeServices"} />,
    <InactiveServices key={"inactiveServices"} />,
  ];
  return (
    <PageLayout title="Mis Servicios">
      <Grid container>
        <Grid size={{ xs: 12 }}>
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
        </Grid>
        <Grid size={{ xs: 12 }} marginBottom={spacings.spacing2}>
          {serviceStatus[tab]}
        </Grid>
      </Grid>
    </PageLayout>
  );
};
