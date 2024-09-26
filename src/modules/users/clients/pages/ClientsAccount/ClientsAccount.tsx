import { PageLayout } from "@/components/B4CPageLayout";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { B4CCustomTabPanel } from "../../../../../components/B4CCustomTabPanel";
import { B4CClientProfileSettings } from "../../components/B4CClientProfileSettings";

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
      <B4CCustomTabPanel value={tabValue} index={0}>
        <B4CClientProfileSettings />
      </B4CCustomTabPanel>
      <B4CCustomTabPanel value={tabValue} index={1}></B4CCustomTabPanel>
    </PageLayout>
  );
};
