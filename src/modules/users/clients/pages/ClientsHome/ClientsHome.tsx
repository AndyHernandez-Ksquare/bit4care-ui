import { AssistanceIcon } from "@/assets/svgIcons/assistanceIcons/AssistanceIcon";
import { AutomovilIcon } from "@/assets/svgIcons/automovilIcons/AutomovilIcon";
import { EventsIcon } from "@/assets/svgIcons/eventsIcons/EventsIcon";
import { GeneralIcon } from "@/assets/svgIcons/gnralIcons/GeneralIcon";
import { HomeIcon } from "@/assets/svgIcons/homeIcons/HomeIcon";
import { TechIcons } from "@/assets/svgIcons/techIcons/TechIcons";
import { PageLayout } from "@/components/B4CPageLayout";
import { colorPalette } from "@/style/partials/colorPalette";
import {
  Box,
  Button,
  SxProps,
  Tab,
  Tabs,
  TextField,
  Theme,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { B4CHogarProviders } from "../../components/B4CHogarProviders/B4CHogarProviders";
import "./ClientsHome.css";

const tabStyle: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: "700",
  color: colorPalette.grey3,
  gap: "8px",
  marginInline: "16px",
};

const filterButtonStyle: SxProps<Theme> = {
  textTransform: "none",

  borderRadius: "8px",
  whiteSpace: "nowrap",
};

export const ClientsHome = () => {
  const [tabValue, setTabValue] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  const getColor = (index: number) =>
    tabValue === index ? colorPalette.primary : undefined;

  const getFilterButtonStyle = (isActive: boolean): SxProps<Theme> => ({
    ...filterButtonStyle,
    border: `1px solid ${isActive ? colorPalette.primary : colorPalette.grey3}`,
    color: isActive ? colorPalette.white : colorPalette.grey3,
    backgroundColor: isActive ? colorPalette.primary : "transparent",
  });

  return (
    <PageLayout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ width: "50%" }}
            placeholder="¿Qué proveedor buscas?"
          />
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
            onChange={handleTabChange}
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
        <Box
          sx={{
            minWidth: "700px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Button
            sx={getFilterButtonStyle(activeFilter === "Mayor disponibilidad")}
            onClick={() => handleFilterClick("Mayor disponibilidad")}
          >
            Mayor disponibilidad
          </Button>
          <Button
            sx={getFilterButtonStyle(activeFilter === "Mis favoritos")}
            onClick={() => handleFilterClick("Mis favoritos")}
          >
            Mis favoritos
          </Button>
          <Button
            sx={getFilterButtonStyle(activeFilter === "Entre semana")}
            onClick={() => handleFilterClick("Entre semana")}
          >
            Entre semana
          </Button>
          <Button
            sx={getFilterButtonStyle(activeFilter === "Mejor calificación")}
            onClick={() => handleFilterClick("Mejor calificación")}
          >
            Mejor calificación
          </Button>
          <Button
            sx={getFilterButtonStyle(activeFilter === "Menor tarifa")}
            onClick={() => handleFilterClick("Menor tarifa")}
          >
            Menor tarifa
          </Button>
        </Box>
        {tabValue == 0 && <B4CHogarProviders />}
      </Box>
    </PageLayout>
  );
};
