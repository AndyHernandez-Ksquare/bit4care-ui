import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { specialityOptions } from "../utils/specialityOptions";
import { experienceNeededOptions } from "../utils/requestExperience";
import { generosOptions } from "../utils/genderOptions";
import { driversLicenseNeeded } from "../utils/driversLicenseNeeded";
import { CreateAppReq } from "@/ts/types/api/applicationRequest";
import { ReactNode } from "react";

interface ServiceSpecsProps {
  formData: CreateAppReq;
  disabled?: boolean;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export const ServiceSpecs = ({
  formData,
  disabled = false,
  onChange,
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
            id="carer_speciality"
            name="carer_speciality"
            label="Especialidad del cuidador"
            value={formData.carer_speciality} // Conectar valor al estado
            onChange={onChange}
            disabled={disabled} // Deshabilitar el campo si es necesario
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
            id="carer_years_of_experience"
            name="carer_years_of_experience"
            label="Experiencia del cuidador"
            value={String(formData.carer_years_of_experience)} // Convertir número a string
            onChange={onChange}
            disabled={disabled}
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
            id="carer_gender"
            name="carer_gender"
            label="Género del cuidador"
            value={formData.carer_gender} // Conectar valor al estado
            onChange={onChange}
            disabled={disabled}
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
            id="carer_has_driving_license"
            name="carer_has_driving_license"
            label="Licencia de conducir"
            value={String(formData.carer_has_driving_license)} // Convertir booleano a string
            onChange={onChange}
            disabled={disabled}
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
