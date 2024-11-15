import { B4CButton } from "@/components/B4CButton";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { colorPalette } from "@/style/partials/colorPalette";
import {
  Grid2 as Grid,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Availability {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

interface CaregiverData {
  id: number;
  payment_range: string;
  availability: Availability;
  qualifications: string;
  residency_status: string;
  years_of_experience: number;
  speciality: string;
  motivation_letter: string;
  test_score: number;
  is_active: boolean;
  worked_hours: number;
  description: string;
  completed_services: number;
  birth_date: string;
  gender: string;
  postal_code: string;
  colony: string;
  state: string;
  nationality: string;
  marital_status: string;
  is_approved: boolean;
  CURP: string;
  RFC: string;
  NSS: string;
  has_driving_license: boolean;
  license_type: string;
  reviewed: boolean;
}

// Mapeo de los días de la semana en inglés a español
const dayTranslations: { [key in keyof Availability]: string } = {
  monday: "Lunes",
  tuesday: "Martes",
  wednesday: "Miércoles",
  thursday: "Jueves",
  friday: "Viernes",
  saturday: "Sábado",
  sunday: "Domingo",
};

export const B4CServiceSpecs = () => {
  const [caregiverData, setCaregiverData] = useState<CaregiverData | null>(
    null,
  );
  // Estado para almacenar la selección de horarios
  const [selectedTimes, setSelectedTimes] = useState<{ [day: string]: string }>(
    {},
  );

  // Simulación de obtención de datos desde el backend
  useEffect(() => {
    // Simulando la llamada al backend
    const fetchData = async () => {
      const data: CaregiverData = {
        id: 1,
        payment_range: "$20 - $30 per hour",
        availability: {
          monday: "9:00-17:00",
          tuesday: "9:00-17:00",
          // Otros días se pueden añadir aquí según el backend
        },
        qualifications: "Certified Nurse, CPR Certified",
        residency_status: "Permanent Resident",
        years_of_experience: 5,
        speciality: "Elderly Care",
        motivation_letter:
          "I am passionate about providing the best care for the elderly.",
        test_score: 85,
        is_active: true,
        worked_hours: 1200,
        description:
          "Experienced caregiver with a focus on elderly care and special needs.",
        completed_services: 150,
        birth_date: "1985-03-22",
        gender: "Female",
        postal_code: "12345",
        colony: "Sunset Colony",
        state: "California",
        nationality: "American",
        marital_status: "Single",
        is_approved: true,
        CURP: "JDOE850322HCA",
        RFC: "JDOE850322XXX",
        NSS: "123456789",
        has_driving_license: true,
        license_type: "Class C",
        reviewed: true,
      };
      setCaregiverData(data);
    };

    fetchData();
  }, []);

  // Manejar la selección de horarios
  const handleTimeSelection = (day: string, time: string) => {
    setSelectedTimes((prevSelectedTimes) => ({
      ...prevSelectedTimes,
      [day]: time,
    }));
  };

  return (
    <Box
      sx={{
        marginTop: "32px",
        border: `1px solid ${colorPalette.grey4}`,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        paddingBlock: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          paddingInline: "32px",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <B4CTextfield label="Nombre del paciente a cuidar" />
          <B4CCheckbox label="Usar mi nombre registrado" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <B4CTextfield label="Número de teléfono" />
          <B4CCheckbox label="Usar mi número registrado" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "32px",
          gap: 32,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <B4CTextfield label="Domicilio del servicio" />
          <B4CCheckbox label="Usar dirección registrada" />
        </Box>
        <B4CTextfield label="Descripción de solicitud" isMultiline />
        <Box>
          <Typography variant="h6" gutterBottom>
            Disponibilidad del Cuidador
          </Typography>
          <Box sx={{ padding: 4 }}>
            {caregiverData ? (
              <Grid container spacing={2}>
                {Object.entries(caregiverData.availability).map(
                  ([day, times]) => (
                    <Grid size={{ xs: 12, tablet: 6, desktop: 4 }} key={day}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {dayTranslations[day as keyof Availability]}:
                      </Typography>
                      {times ? (
                        <Select
                          value={selectedTimes[day] || ""}
                          onChange={(event) =>
                            handleTimeSelection(
                              day,
                              event.target.value as string,
                            )
                          }
                          displayEmpty
                          fullWidth
                          variant="outlined"
                        >
                          <MenuItem value="" disabled>
                            Seleccione un horario
                          </MenuItem>
                          {times.split(",").map((time: string) => (
                            <MenuItem key={time} value={time}>
                              {time}
                            </MenuItem>
                          ))}
                        </Select>
                      ) : (
                        <Typography variant="body2">No disponible</Typography>
                      )}
                    </Grid>
                  ),
                )}
              </Grid>
            ) : (
              <Typography variant="body2">
                Cargando disponibilidad...
              </Typography>
            )}
          </Box>
        </Box>
        <B4CTextfield label="Comentarios adicionales" isMultiline />
        <B4CButton label="Ver solicitud" />
      </Box>
    </Box>
  );
};
