import { PageLayout } from "@/components/B4CPageLayout";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { UserSettings } from "./components/UserSettings";
import { PaymentInfo } from "./components/PaymentInfo";
import { AvailabilitySettings } from "./components/AvailabilitySettings";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const SettingsAndProfile = () => {
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
        <Tab
          sx={{ textTransform: "none" }}
          label="Calendario y disponibilidad"
        />
      </Tabs>
      <CustomTabPanel value={tabValue} index={0}>
        <UserSettings />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <PaymentInfo />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        <AvailabilitySettings />
      </CustomTabPanel>
    </PageLayout>
  );
};
