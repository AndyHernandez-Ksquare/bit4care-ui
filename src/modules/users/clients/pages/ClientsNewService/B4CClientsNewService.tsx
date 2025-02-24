import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { PageLayout } from "@/components/B4CPageLayout";
import { colorPalette } from "@/style/partials/colorPalette";
import {
  Box,
  Breadcrumbs,
  Link,
  TextField,
  Typography,
  Grid2 as Grid,
  Switch,
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "dayjs/locale/es";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { SubmitNewApplication } from "./components/SubmitNewApplication";
import { CreateAppReq } from "@/ts/types/api/applicationRequest";
import { ServiceLocation } from "./components/ServiceLocation";
import { Schedule, ScheduleForm } from "./components/ScheduleForm";
import { ServiceSpecs } from "./components/ServiceSpecs";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneAppRequest } from "@/context/api/hooks/useGetOneAppRequest";
import { useCreateApplicationRequest } from "@/context/api/hooks/useCreateApplicationRequest";
import { useFormik } from "formik";
import { newServiceValidationSchema } from "./newServiceValidationSchema";
import { B4CClientsNewServiceProps } from "@/ts/types/components";
import { initialFormValues } from "./utils/constants";
import { transformSchedulesToWorkShift } from "./utils/transformSchedulesToWorkshift";
import { getHourlyRate } from "./utils/getHourlyRate";
import { fillSchedulesWithWorkShift } from "./utils/fillSchedulesWithWorkShifts";
import { useUpdateApplicationRequest } from "@/context/api/hooks/useUpdateApplicationRequest";

// Configurar Day.js para usar el español
dayjs.locale("es");

export const B4CClientsNewService = ({
  mode = "create",
}: B4CClientsNewServiceProps) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const { data, getOneAppLoading } = useGetOneAppRequest(id);

  // State to store the list of dates between the selected start and end dates
  const [dates, setDates] = useState<string[]>([]);
  // State to store the schedules for each date (start and end times)
  const [schedules, setSchedules] = useState<Record<string, Schedule>>({});

  const [location, setLocation] = useState({ lat: 19.432608, lng: -99.133209 }); // Default: CDMX

  // Nuevo estado para el total de horas
  const [totalHoursWorked, setTotalHoursWorked] = useState<number>(0);

  const [thisPageLoading, setThisPageLoading] = useState(false);

  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const formik = useFormik<CreateAppReq>({
    initialValues: initialFormValues,
    validationSchema: newServiceValidationSchema,
    onSubmit: (values) => {
      console.log("Formulario enviado:", values);
    },
  });

  const { createApplication, createAppLoading } = useCreateApplicationRequest();

  const { updateApplication, updateAppLoading } = useUpdateApplicationRequest();

  const pageTitle =
    mode === "create"
      ? "Nueva solicitud de servicio"
      : "Editar solicitud de servicio";

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    const finalRequest: CreateAppReq = {
      ...formik.values,
      patient_phone: `+52${formik.values.patient_phone}`, // Eliminar caracteres no numéricos
      payment_rate: getHourlyRate(
        formik.values.is_carer_certified,
        totalHoursWorked,
      ),
      carer_has_driving_license: Boolean(
        formik.values.carer_has_driving_license,
      ),
      WorkShift: transformSchedulesToWorkShift(schedules), // Convertir horarios
    };

    if (mode == "create") {
      try {
        await createApplication(finalRequest); // Llama al custom hook para hacer el POST
        setSnackbar({
          open: true,
          message: "Solicitud creada exitosamente",
          severity: "success",
        });
        // Redirigir después de 1.5 segundos
        setTimeout(() => navigate("/cliente"), 1500);
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Ocurrió un error, intenta nuevamente",
          severity: "error",
        });
      }
    }

    if (mode == "edit") {
      finalRequest.carer_has_driving_license = `${finalRequest.carer_has_driving_license}`;
      finalRequest.carer_years_of_experience = `${finalRequest.carer_years_of_experience}`;
      console.log(finalRequest);
      try {
        await updateApplication(id || "", finalRequest); // Llama al custom hook para hacer el POST
        setSnackbar({
          open: true,
          message: "Solicitud actualizada exitosamente",
          severity: "success",
        });
        setTimeout(() => navigate("/cliente"), 1500);
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Ocurrió un error, intenta nuevamente",
          severity: "error",
        });
      }
    }
  };

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

  // Cargar datos en el formulario cuando `data` está disponible (modo edición)
  useEffect(() => {
    if (mode === "edit" && data) {
      formik.setValues({
        address: data.address || "",
        patient_name: data.patient_name || "",
        patient_phone: data.patient_phone.slice(3) || "",
        description: data.description || "",
        comments: data.comments || "",
        amount: data.amount || 0,
        start_date: data.start_date || "",
        end_date: data.end_date || "",
        job_interval: data.job_interval || 2,
        payment_rate: data.payment_rate,
        is_carer_certified: data.is_carer_certified || false,
        carer_speciality: data.carer_speciality || "",
        carer_years_of_experience: data.carer_years_of_experience || 0,
        carer_gender: data.carer_gender as "Male" | "Female" | "",
        carer_has_driving_license: data.carer_has_driving_license || false,
        WorkShift: data.WorkShift || [],
      });
    }

    const horarios = fillSchedulesWithWorkShift(
      schedules,
      data?.WorkShift || [],
    );
    setSchedules(horarios);
  }, [data]);

  // 🔹 Se activa si cualquiera de los hooks está en loading
  useEffect(() => {
    setThisPageLoading(createAppLoading);
  }, [createAppLoading]);

  useEffect(() => {
    if (mode === "edit") {
      setThisPageLoading(updateAppLoading);
    }
  }, [updateAppLoading]);

  // 🔹 Se activa si cualquiera de los hooks está en loading
  useEffect(() => {
    if (mode === "edit") {
      setThisPageLoading(getOneAppLoading);
    }
  }, [getOneAppLoading]);

  return (
    <PageLayout title={pageTitle}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.modal + 1 }}
        open={thisPageLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* 🔹 Snackbar para mostrar notificaciones */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Breadcrumbs separator={<B4CNextIcon />} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/cliente/">
          <Typography typography="body-normal">Mis servicios</Typography>
        </Link>
        <Typography typography="body-normal-bold" color={colorPalette.primary}>
          {pageTitle}
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
                  <Switch
                    id="is_carer_certified"
                    name="is_carer_certified"
                    checked={formik.values.is_carer_certified}
                    focusRipple={false}
                    onChange={formik.handleChange}
                  />

                  <Typography typography="body-normal">
                    Quiero que el cuidador sea un enfermero con cédula
                    profesional.*
                  </Typography>
                </Box>
                {formik.values.is_carer_certified && (
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
                    id="patient_name"
                    name="patient_name"
                    value={formik.values.patient_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Importante para marcar como "touched"
                    error={
                      formik.touched.patient_name &&
                      Boolean(formik.errors.patient_name)
                    }
                    helperText={
                      formik.touched.patient_name && formik.errors.patient_name
                    }
                    placeholder="Nombre del paciente"
                  />
                </Box>

                <Box>
                  <Typography typography="body-normal-bold">
                    Número del paciente
                  </Typography>

                  <TextField
                    id="patient_phone"
                    name="patient_phone"
                    fullWidth
                    value={formik.values.patient_phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Importante para marcar como "touched"
                    error={
                      formik.touched.patient_phone &&
                      Boolean(formik.errors.patient_phone)
                    }
                    helperText={
                      formik.touched.patient_phone &&
                      formik.errors.patient_phone
                    }
                    placeholder="Número de teléfono del paciente"
                  />
                </Box>

                <ScheduleForm
                  mode={mode}
                  startDate={formik.values.start_date}
                  endDate={formik.values.end_date}
                  onChange={formik.setFieldValue}
                  dates={dates}
                  schedules={schedules}
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
                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Importante para marcar como "touched"
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                    multiline
                    rows={4}
                    placeholder="Describe las actividades de tu cuidador"
                  />
                </Box>
                <ServiceLocation
                  address={formik.values.address} // ✅ Ahora usa formik
                  onChange={(event) => formik.handleChange(event)}
                  setAddress={(value) => formik.setFieldValue("address", value)} // ✅ Formik maneja el valor
                  setLocation={setLocation}
                  location={location}
                />
                <ServiceSpecs
                  formData={formik.values}
                  onChange={formik.handleChange}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Typography typography="body-normal-bold">
                    Comentarios adicionales
                  </Typography>
                  <TextField
                    id="comments"
                    name="comments"
                    value={formik.values.comments}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Importante para marcar como "touched"
                    error={
                      formik.touched.comments && Boolean(formik.errors.comments)
                    }
                    helperText={
                      formik.touched.comments && formik.errors.comments
                    }
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
                validForm={
                  formik.isValid &&
                  !!transformSchedulesToWorkShift(schedules).length &&
                  dates.length ===
                    transformSchedulesToWorkShift(schedules).length
                }
                offerPrice={formik.values.amount}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                onSubmit={handleSubmit}
                hoursWorked={totalHoursWorked}
                professionalNeeded={formik.values.is_carer_certified}
              />
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </PageLayout>
  );
};
