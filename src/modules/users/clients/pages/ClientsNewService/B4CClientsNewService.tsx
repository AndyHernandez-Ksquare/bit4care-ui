import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { PageLayout } from "@/components/B4CPageLayout";
import { B4CToggle } from "@/components/Selectors/B4CToggle";
import { colorPalette } from "@/style/partials/colorPalette";
import {
  Box,
  Breadcrumbs,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid2 as Grid,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "dayjs/locale/es";
import { Library } from "@googlemaps/js-api-loader";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const GOOGLE_MAPS_API_KEY = "AIzaSyCK4QwPfMHi-8SXl6s8UaX0L4q4LymW4a0";

const googleLibraries: Library[] = ["places", "geometry"];

// Configurar Day.js para usar el español
dayjs.locale("es");

interface Schedule {
  startTime: Dayjs | null;
  endTime: Dayjs | null;
}

export const B4CClientsNewService = () => {
  // State to store the start and end dates selected by the user
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  // State to store the list of dates between the selected start and end dates
  const [dates, setDates] = useState<string[]>([]);

  // State to store the schedules for each date (start and end times)
  const [schedules, setSchedules] = useState<Record<string, Schedule>>({});
  const [professionalNeeded, setProfessionalNeeded] = useState<boolean>(false);

  // Variables encargadas de setear las direcciones y ubicaciones
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: 19.432608, lng: -99.133209 }); // Default: CDMX

  // Fetch the user's location when the component mounts
  useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude }); // Set location with the user's coordinates

          // Optionally, reverse geocode the coordinates to get a readable address
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`,
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.results.length > 0) {
                setAddress(data.results[0].formatted_address); // Set address based on geolocation
              }
            })
            .catch((error) => {
              console.error("Error fetching address:", error);
            });
        },
        (error) => {
          console.error("Geolocation error:", error);
          // Optionally, handle error and set default location
        },
        { timeout: 10000 }, // Optional: Set a timeout for geolocation fetching
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Effect to generate dates when startDate or endDate changes
  useEffect(() => {
    if (startDate && endDate) {
      const start = dayjs(startDate);
      const end = dayjs(endDate);
      const newDates: string[] = [];
      let current = start;

      // Generate all dates between start and end date
      while (current.isBefore(end) || current.isSame(end, "day")) {
        newDates.push(current.format("YYYY-MM-DD"));
        current = current.add(1, "day");
      }

      // Set the generated dates in state
      setDates(newDates);

      // Initialize the schedules for each date
      setSchedules(
        newDates.reduce((acc: Record<string, Schedule>, date: string) => {
          acc[date] = { startTime: null, endTime: null };
          return acc;
        }, {}),
      );
    } else {
      setDates([]);
      setSchedules({});
    }
  }, [startDate, endDate]);

  // Function to update the schedule (start and end time) for a given date
  const handleScheduleChange = (
    date: string,
    key: keyof Schedule,
    value: Dayjs | null,
  ) => {
    setSchedules((prev) => ({
      ...prev,
      [date]: { ...prev[date], [key]: value },
    }));
  };

  const handleMarkerDragEnd = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setLocation({ lat, lng });

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      }
    }
  };

  return (
    <PageLayout title="Nueva solicitud de servicio">
      <Breadcrumbs separator={<B4CNextIcon />} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/cliente/">
          <Typography typography="body-normal">Mis servicios</Typography>
        </Link>
        <Typography typography="body-normal-bold" color={colorPalette.primary}>
          Nueva solicitud de servicio
        </Typography>
      </Breadcrumbs>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <Box sx={{ marginTop: "32px" }}>
          <Typography typography="body-normal">
            Llena los campos requeridos para enviar tu solicitud a los
            cuidadores disponibles.
          </Typography>
          <Grid container spacing={16}>
            <Grid size={{ xs: 12, desktop: 9 }}>
              <Box
                sx={{
                  border: `1px solid ${colorPalette.secondary}`,
                  padding: "1.5rem",
                  marginTop: "2rem",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  backgroundColor: colorPalette.white,
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <B4CToggle
                    checked={professionalNeeded}
                    onChange={() => {
                      setProfessionalNeeded(!professionalNeeded);
                    }}
                  />
                  <Typography typography="body-normal">
                    Quiero que el cuidador sea un enfermero con cédula
                    profesional.*
                  </Typography>
                </Box>
                {professionalNeeded && (
                  <Box display={"flex"} sx={{ gap: 8 }}>
                    <InfoOutlinedIcon sx={{ color: colorPalette.primary }} />
                    <Typography
                      typography={"body-small"}
                      color={colorPalette.grey3}
                    >
                      La tarifa de los enfermeros con cédula profesional es más
                      alta.
                    </Typography>
                  </Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <DatePicker
                    label="Fecha inicial"
                    value={startDate}
                    onChange={setStartDate}
                    disablePast
                    sx={{ width: "100%" }}
                  />
                  —
                  <DatePicker
                    label="Fecha final"
                    value={endDate}
                    onChange={setEndDate}
                    minDate={startDate || dayjs()}
                    sx={{ width: "100%" }}
                  />
                </Box>

                {dates.length > 0 && (
                  <Box>
                    <Typography typography="body-normal-bold">
                      Horarios de servicio
                    </Typography>
                    {dates.map((date) => (
                      <Box key={date} sx={{ marginTop: "1rem" }}>
                        <Typography typography="body-normal">
                          {dayjs(date).format("dddd, D [de] MMMM [del] YYYY")}
                        </Typography>
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                          <TimePicker
                            label="Hora de inicio"
                            value={schedules[date]?.startTime || null}
                            onChange={(value) =>
                              handleScheduleChange(date, "startTime", value)
                            }
                            sx={{ width: "100%" }}
                          />
                          <TimePicker
                            label="Hora de término"
                            value={schedules[date]?.endTime || null}
                            onChange={(value) =>
                              handleScheduleChange(date, "endTime", value)
                            }
                            sx={{ width: "100%" }}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Additional service description and address fields */}
                <Box>
                  <Typography typography="body-normal-bold">
                    Descripción del servicio
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Describe las actividades de tu cuidador"
                  />
                </Box>
                <Box>
                  <Typography typography="body-normal-bold">
                    Domicilio de servicio
                  </Typography>
                  <TextField
                    fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Detalla tu dirección o selecciónala en el mapa"
                  />
                </Box>
                <Box>
                  <LoadScript
                    googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                    libraries={googleLibraries}
                  >
                    <GoogleMap
                      center={location}
                      zoom={15}
                      mapContainerStyle={{ width: "100%", height: "300px" }}
                    >
                      <MarkerF
                        position={location}
                        onDragEnd={handleMarkerDragEnd} // added the drag event
                        draggable
                      />
                    </GoogleMap>
                  </LoadScript>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Typography typography="body-normal-bold">
                    Especificaciones del servicio
                  </Typography>
                  <Box sx={{ display: "flex", gap: "1rem", width: "100%" }}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Especialidad del cuidador
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Experiencia del cuidador
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", gap: "1rem", width: "100%" }}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Género del cuidador
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Licencia de conducir
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, desktop: 3 }}>
              <Box
                sx={{
                  border: `1px solid ${colorPalette.secondary}`,
                  padding: "1.5rem",
                  marginTop: "2rem",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  backgroundColor: colorPalette.white,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Typography
                    typography="body-normal-bold"
                    color={colorPalette.primary}
                  >
                    Pago mínimo sugerido
                  </Typography>
                  <Typography
                    typography="body-large-bold"
                    color={colorPalette.grey1}
                  >
                    {`$${professionalNeeded ? "2000" : "1500"}`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <Typography
                    typography="body-normal-bold"
                    color={colorPalette.primary}
                  >
                    Precio ofertado
                  </Typography>
                  <Typography
                    typography="body-large-bold"
                    color={colorPalette.grey1}
                  >
                    {`$${2000}`}
                  </Typography>
                </Box>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Oferta
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
                <Box display={"flex"} sx={{ gap: 8 }}>
                  <InfoOutlinedIcon sx={{ color: colorPalette.primary }} />
                  <Typography
                    typography={"body-small"}
                    color={colorPalette.grey3}
                  >
                    El precio recomendado puede ser hasta menos 15% sobre el
                    precio mínimo sugerido.
                  </Typography>
                </Box>
                <B4CButton label="Enviar" size={Size.Small} />\
                <Box display={"flex"} sx={{ gap: 8 }}>
                  <InfoOutlinedIcon sx={{ color: colorPalette.primary }} />
                  <Typography
                    typography={"body-small"}
                    color={colorPalette.grey3}
                  >
                    Tu solicitud será enviada a los cuidadores disponibles,
                    cuando alguno acepte, deberás confirmar el servicio mediante
                    el pago del mismo.
                  </Typography>
                </Box>
                <B4CButton
                  label="Cancelar"
                  variant="secondary"
                  size={Size.Small}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </PageLayout>
  );
};
