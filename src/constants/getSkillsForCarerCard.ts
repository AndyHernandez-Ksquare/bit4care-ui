import { GetOneApplication } from "@/ts/types/api/applicationRequest";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const getSkills = (request: GetOneApplication): string[] => {
  const skills: string[] = [];

  // Especialidad
  if (request.carer_speciality) {
    skills.push(capitalizeFirstLetter(request.carer_speciality));
  } else {
    skills.push("Especialidad no requerida");
  }

  // Certificación
  if (request.is_carer_certified) {
    skills.push("Cuidador certificado");
  } else {
    skills.push("No requiere certificación");
  }

  // Licencia de manejo
  if (request.carer_has_driving_license) {
    skills.push("Con licencia de manejo");
  } else {
    skills.push("No requiere licencia");
  }

  // Experiencia
  if (
    request.carer_years_of_experience &&
    request.carer_years_of_experience > 0
  ) {
    skills.push(`Experiencia: ${request.carer_years_of_experience} años`);
  } else {
    skills.push("Experiencia no requerida");
  }

  return skills;
};
