import { NewCareProfileRequest } from "@/ts/types/api/carer/CreateCarerProfile.type";
import { CollaboratorRequest } from "@/ts/types/api/collaborator/registerCollaborator";
import { FormData1, FormData2 } from "@/ts/types/api/collaborator/requestData";

export const assembleRequestData = (
  formData1: FormData1,
  formData2: FormData2,
): NewCareProfileRequest => {
  const requestData: CollaboratorRequest = {
    name: `${formData1.name} ${formData1.lastName}`,
    email: formData1.email,
    password: formData1.password,
    address: formData1.direction,
    birth_date: formData1.birthDate,
    gender: formData1.gender,
    postal_code: formData1.postalCode,
    colony: formData1.neighborhood,
    state: formData1.state,
    nationality: formData1.nacionality,
    marital_status: formData1.maritalStatus,
    CURP: formData2.curp,
    RFC: formData2.rfc,
    NSS: formData2.nss,
    has_driving_license: formData2.driversLicense === "Sí",
    years_of_experience: parseYearsOfExperience(formData2.experienceYears),
    speciality: formData2.specialities
      .map((s: { label: string }) => s.label)
      .join(", "),
    motivation_letter: formData2.motivationLetter,
    // Datos mock
    payment_range: "5000-7000",
    availability: "Tiempo completo",
    qualifications: "Licenciatura en Enfermería",
    works_on_weekend: true,
    residency_status: "Residente permanente",
    test_score: 0,
    description: "Profesional dedicado con experiencia en cuidados intensivos.",
    creation_step: 3,
  };

  return requestData;
};

const parseYearsOfExperience = (experienceYears: string): number => {
  switch (experienceYears) {
    case "Menos de 1 año":
      return 0;
    case "+1 año":
      return 1;
    case "+3 años":
      return 3;
    case "+5 años":
      return 5;
    default:
      return 0;
  }
};
