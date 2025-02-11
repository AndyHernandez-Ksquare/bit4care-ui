import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { PageLayout } from "@/components/B4CPageLayout";
import { B4CToggle } from "@/components/Selectors/B4CToggle";
import { colorPalette } from "@/style/partials/colorPalette";
import {
  Box,
  Breadcrumbs,
  Link,
  TextField,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import "dayjs/locale/es";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { SubmitNewApplication } from "./components/SubmitNewApplication";
import { CreateAppReq } from "@/ts/types/api/applicationRequest";
import { ServiceLocation } from "./components/ServiceLocation";
import { ScheduleForm } from "./components/ScheduleForm";
import { ServiceSpecs } from "./components/ServiceSpecs";
import { useParams } from "react-router-dom";
import { useGetOneAppRequest } from "@/context/api/hooks/useGetOneAppRequest";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const base_google_url =
  "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

// Configurar Day.js para usar el español
dayjs.locale("es");

export interface Schedule {
  startTime: Dayjs | null;
  endTime: Dayjs | null;
}

interface B4CClientsNewServiceProps {
  mode?: "create" | "edit";
}

export const B4CClientsNewService = ({
  mode = "create",
}: B4CClientsNewServiceProps) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const { data, loading, error } = useGetOneAppRequest(id);

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

  // Nuevo estado para el total de horas
  const [totalHoursWorked, setTotalHoursWorked] = useState<number>(0);

  const [formData, setFormData] = useState<CreateAppReq>({
    address: "",
    patient_name: "",
    patient_phone: "",
    description: "",
    comments: "",
    amount: 0,
    start_date: "",
    end_date: "",
    job_interval: 2,
    payment_rate: 6000,
    carerId: 1, // Simulado, en producción vendría del usuario autenticado
    is_carer_certified: false,
    carer_speciality: "",
    carer_years_of_experience: 0,
    carer_gender: "",
    carer_has_driving_license: false,
  });

  // Función para actualizar el formulario dinámicamente
  const updateFormData = (key: keyof CreateAppReq, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleMarkerDragEnd = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setLocation({ lat, lng });

      const response = await fetch(
        `${base_google_url}${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      }
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    if (!formData.patient_name || !formData.patient_phone) {
      console.error("Faltan datos obligatorios");
      return;
    }
    // Convertir fechas a formato ISO
    const formattedStartDate = startDate ? startDate.toISOString() : "";
    const formattedEndDate = endDate ? endDate.toISOString() : "";

    const finalRequest: CreateAppReq = {
      ...formData,
      address: address,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      is_carer_certified: professionalNeeded,
      amount: totalHoursWorked * formData.payment_rate, // Calcular monto total
    };

    console.log("Simulando envío de solicitud:", finalRequest);
  };

  // Cargar datos en el formulario cuando `data` está disponible
  useEffect(() => {
    console.log("Data:", data);
    if (mode === "edit" && data) {
      setFormData({
        address: data.address || "",
        patient_name: data.patient_name || "",
        patient_phone: data.patient_phone || "",
        description: data.description || "",
        comments: data.comments || "",
        amount: data.amount || 0,
        start_date: data.start_date || "",
        end_date: data.end_date || "",
        job_interval: data.job_interval || 2,
        payment_rate: data.payment_rate || 6000,
        carerId: data.carerId || 1,
        is_carer_certified: data.is_carer_certified || false,
        carer_speciality: data.carer_speciality || "",
        carer_years_of_experience: data.carer_years_of_experience || 0,
        carer_gender: (data.carer_gender as "" | "Male" | "Female") || "",
        carer_has_driving_license: data.carer_has_driving_license || false,
      });

      setStartDate(data.start_date ? dayjs(data.start_date) : null);
      setEndDate(data.end_date ? dayjs(data.end_date) : null);
      setAddress(data.address || "");
      setProfessionalNeeded(data.is_carer_certified || false);
    }
  }, [data, mode]);

  useEffect(() => {
    if (mode === "edit" && id) {
      console.log(`Cargando datos de la solicitud con ID: ${id}`);
      // Aquí puedes hacer una petición a la API para obtener los datos
    }
  }, [id]);

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
            `${base_google_url}${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`,
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

  // Función para calcular el total de horas trabajadas
  useEffect(() => {
    let totalHours = 0;

    dates.forEach((date) => {
      const { startTime, endTime } = schedules[date] || {};
      if (startTime && endTime) {
        const diff = endTime.diff(startTime, "hour", true); // Diferencia en horas con decimales
        totalHours += diff > 0 ? diff : 0; // Evitar valores negativos
      }
    });

    setTotalHoursWorked(totalHours);
  }, [schedules, dates]); // Se ejecuta cuando cambian los horarios o las fechas

  return (
    <PageLayout
      title={
        mode === "create"
          ? "Nueva solicitud de servicio"
          : "Editar solicitud de servicio"
      }
    >
      <Breadcrumbs separator={<B4CNextIcon />} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/cliente/">
          <Typography typography="body-normal">Mis servicios</Typography>
        </Link>
        <Typography typography="body-normal-bold" color={colorPalette.primary}>
          {mode === "create"
            ? "Nueva solicitud de servicio"
            : "Editar solicitud de servicio"}
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
                {/* Información básica del paciente */}
                <Box>
                  <Typography typography="body-normal-bold">
                    Nombre del paciente
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.patient_name}
                    onChange={(e) =>
                      updateFormData("patient_name", e.target.value)
                    }
                    placeholder="Nombre del paciente"
                  />
                </Box>

                <Box>
                  <Typography typography="body-normal-bold">
                    Número del paciente
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.patient_phone}
                    onChange={(e) =>
                      updateFormData("patient_phone", e.target.value)
                    }
                    placeholder="Número de teléfono del paciente"
                  />
                </Box>

                <ScheduleForm
                  mode={mode}
                  startDate={startDate}
                  endDate={endDate}
                  dates={dates}
                  schedules={schedules}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  setDates={setDates}
                  setSchedules={setSchedules}
                />

                {/* Additional service description and address fields */}
                <Box>
                  <Typography typography="body-normal-bold">
                    Descripción del servicio
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.description}
                    onChange={(e) =>
                      updateFormData("description", e.target.value)
                    }
                    multiline
                    rows={4}
                    placeholder="Describe las actividades de tu cuidador"
                  />
                </Box>
                <ServiceLocation
                  address={address}
                  setAddress={setAddress}
                  location={location}
                  handleMarkerDragEnd={handleMarkerDragEnd}
                  googleApiKey={GOOGLE_MAPS_API_KEY ?? ""}
                />
                <ServiceSpecs
                  formData={formData}
                  updateFormData={updateFormData}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Typography typography="body-normal-bold">
                    Comentarios adicionales
                  </Typography>
                  <TextField
                    value={formData.comments}
                    onChange={(e) => updateFormData("comments", e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Agrega comentarios adicionales para tu cuidador"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, desktop: 3 }}>
              <SubmitNewApplication
                updateFormData={updateFormData}
                onSubmit={handleSubmit}
                hoursWorked={totalHoursWorked}
                professionalNeeded={professionalNeeded}
              />
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </PageLayout>
  );
};
