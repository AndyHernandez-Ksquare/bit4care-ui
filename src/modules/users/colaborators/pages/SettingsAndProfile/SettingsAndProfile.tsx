import { PageLayout } from "@/components/B4CPageLayout";
import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { UserSettings } from "./components/UserSettings";
import { PaymentInfo } from "./components/PaymentInfo";
import { AvailabilitySettings } from "./components/AvailabilitySettings";
import { B4CCustomTabPanel } from "@/components/B4CCustomTabPanel";

export const SettingsAndProfile = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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
      <B4CCustomTabPanel value={tabValue} index={0}>
        <UserSettings />
      </B4CCustomTabPanel>
      <B4CCustomTabPanel value={tabValue} index={1}>
        <PaymentInfo />
      </B4CCustomTabPanel>
      <B4CCustomTabPanel value={tabValue} index={2}>
        <AvailabilitySettings />
      </B4CCustomTabPanel>
    </PageLayout>
  );
};
