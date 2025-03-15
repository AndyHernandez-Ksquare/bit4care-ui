import {
  SpecialityOption,
  WorkSpecialityOptions,
} from "@/constants/workSpecialities";

export interface FormData1 {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmedPassword: string;
  direction: string;
  birthDate: string;
  gender: string;
  postalCode: string;
  neighborhood: string;
  state: string;
  nacionality: string;
  maritalStatus: string;
}

export interface FormData2 {
  curp: string;
  rfc: string;
  nss: string;
  driversLicense: "yes" | "no";
  typeOfLicense: string;
  certified: "yes" | "no";
  experienceYears: string;
  speciality: string;
  motivationLetter: string;
}

export interface FormData extends FormData1, FormData2 {
  acceptedTerms: boolean;
}
