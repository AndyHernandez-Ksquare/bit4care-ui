import { B4CDragPhotoItem } from "@/components/B4CDragPhotoItem";
import { PageLayout } from "@/components/B4CPageLayout";
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

export const ClientsAccount = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <PageLayout title="Ajustes">
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          sx={{ textTransform: "none" }}
          label="Ajustes de cuenta y perfil"
        />
        <Tab sx={{ textTransform: "none" }} label="Informacion de pagos" />
      </Tabs>
      <B4CDragPhotoItem />
    </PageLayout>
  );
};
