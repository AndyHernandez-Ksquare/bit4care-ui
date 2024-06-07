"use client";
import { PageLayout } from "@/modules/admin/PageLayout";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { ColaboratorsTab } from "./ColaboratorsTab";
import { AcceptedPage } from "./AcceptedPage";
import { PendingPage } from "./PendingPage";

export const ColaboratosPage = () => {
  const [tab, setTab] = useState(0);

  const colaboratorsStatus = [
    <AcceptedPage key={"colaborators"} />,
    <PendingPage key={"Pendientes"} />,
  ];
  return (
    <PageLayout title="Colaboradores">
      <Grid container>
        <Grid item xs={12}>
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
              active={tab === 0}
              onClick={() => setTab(0)}
            />
            <ColaboratorsTab
              label="Pendientes de registrar"
              active={tab === 1}
              onClick={() => setTab(1)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} marginBottom={spacings.spacing2}>
          {colaboratorsStatus[tab]}
        </Grid>
      </Grid>
    </PageLayout>
  );
};
