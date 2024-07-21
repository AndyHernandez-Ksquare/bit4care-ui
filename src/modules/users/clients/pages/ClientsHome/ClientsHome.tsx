import { AssistanceIcon } from "@/assets/svgIcons/assistanceIcons/AssistanceIcon";
import { AutomovilIcon } from "@/assets/svgIcons/automovilIcons/AutomovilIcon";
import { EventsIcon } from "@/assets/svgIcons/eventsIcons/EventsIcon";
import { GeneralIcon } from "@/assets/svgIcons/gnralIcons/GeneralIcon";
import { HomeIcon } from "@/assets/svgIcons/homeIcons/HomeIcon";
import { TechIcons } from "@/assets/svgIcons/techIcons/TechIcons";
import { PageLayout } from "@/components/B4CPageLayout";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, SxProps, Tab, Tabs, TextField, Theme } from "@mui/material";
import React, { useState } from "react";
import { B4CHogarProviders } from "../../components/B4CHogarProviders/B4CHogarProviders";

const tabStyle: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: "700",
  color: colorPalette.grey3,
  gap: "8px",
  marginInline: "16px",
};

export const ClientsHome = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getColor = (index: number) =>
    tabValue === index ? colorPalette.primary : undefined;

  return (
    <PageLayout>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField sx={{ width: "50%" }} placeholder="¿Qué proveedor buscas?" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ height: "60px" }}
        >
          <Tab
            sx={tabStyle}
            label="Hogar"
            iconPosition="start"
            icon={<HomeIcon color={getColor(0)} />}
          />
          <Tab
            sx={tabStyle}
            label="Asistencia"
            iconPosition="start"
            icon={<AssistanceIcon color={getColor(1)} />}
          />
          <Tab
            sx={tabStyle}
            label="Automotriz"
            iconPosition="start"
            icon={<AutomovilIcon color={getColor(2)} />}
          />
          <Tab
            sx={tabStyle}
            label="Técnicos"
            iconPosition="start"
            icon={<TechIcons color={getColor(3)} />}
          />
          <Tab
            sx={tabStyle}
            label="General"
            iconPosition="start"
            icon={<GeneralIcon color={getColor(4)} />}
          />
          <Tab
            sx={tabStyle}
            label="Eventos"
            iconPosition="start"
            icon={<EventsIcon color={getColor(5)} />}
          />
        </Tabs>
      </Box>
      {tabValue == 0 && <B4CHogarProviders />}
    </PageLayout>
  );
};
