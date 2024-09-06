/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box } from "@mui/material";
import React, { useState } from "react";
import { PageLayout } from "@/modules/admin/PageLayout";
import { Outlet } from "react-router-dom";

export const ServicePage = () => {
  return (
    <PageLayout title="Servicios">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Outlet />
      </Box>
    </PageLayout>
  );
};
