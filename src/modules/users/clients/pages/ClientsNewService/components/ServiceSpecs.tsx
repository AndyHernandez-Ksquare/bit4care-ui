import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { specialityOptions } from "../utils/specialityOptions";
import { experienceNeededOptions } from "../utils/requestExperience";
import { generosOptions } from "../utils/genderOptions";
import { driversLicenseNeeded } from "../utils/driversLicenseNeeded";
import { CreateAppReq } from "@/ts/types/api/applicationRequest";

interface ServiceSpecsProps {
  formData: CreateAppReq;
  updateFormData: (key: keyof CreateAppReq, value: any) => void;
}

export const ServiceSpecs = ({
  formData,
  updateFormData,
}: ServiceSpecsProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography typography="body-normal-bold">
        Especificaciones del servicio
      </Typography>
      <Box sx={{ display: "flex", gap: "1rem", width: "100%" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="carer-speciality-label">
            Especialidad del cuidador
          </InputLabel>
          <Select
            labelId="carer-speciality-label"
            id="carer-specialit-select"
            label="Especialidad del cuidador"
            value={formData.carer_speciality} // Conectar valor al estado
            onChange={(e) => updateFormData("carer_speciality", e.target.value)}
          >
            {specialityOptions.map((speciality) => (
              <MenuItem key={speciality.value} value={speciality.value}>
                {speciality.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="carer-experience-label">
            Experiencia del cuidador
          </InputLabel>
          <Select
            labelId="carer-experience-label"
            id="carer-experience-select"
            label="Experiencia del cuidador"
            value={formData.carer_years_of_experience} // Conectar valor al estado
            onChange={(e) =>
              updateFormData("carer_years_of_experience", e.target.value)
            }
          >
            {experienceNeededOptions.map((experience) => (
              <MenuItem key={experience.value} value={experience.value}>
                {experience.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", width: "100%" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="gender-select-label">Género del cuidador</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            label="Género del cuidador"
            value={formData.carer_gender} // Conectar valor al estado
            onChange={(e) => updateFormData("carer_gender", e.target.value)}
          >
            {generosOptions.map((genero) => (
              <MenuItem key={genero.value} value={genero.value}>
                {genero.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="driver-select-label">Licencia de conducir</InputLabel>
          <Select
            labelId="driver-select-label"
            id="driver-selectr"
            label="Licencia de conducir"
            value={String(formData.carer_has_driving_license)} // Convertir booleano a string
            onChange={(e) =>
              updateFormData(
                "carer_has_driving_license",
                e.target.value === "true",
              )
            }
          >
            {driversLicenseNeeded.map((license, index) => (
              <MenuItem key={index} value={String(license.value)}>
                {license.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
