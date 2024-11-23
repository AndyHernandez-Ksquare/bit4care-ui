export interface FormData1 {
  name: string;
  lastName: string;
  email: string;
  password: string;
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
  driversLicense: string;
  experienceYears: string;
  specialities: { label: string }[];
  motivationLetter: string;
}
