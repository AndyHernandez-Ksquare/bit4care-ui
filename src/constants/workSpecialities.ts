export interface SpecialityOption {
  label: string;
  value: string;
}
export interface WorkSpecialityOptions {
  técnicos: SpecialityOption[];
  hogar: SpecialityOption[];
  general: SpecialityOption[];
  automotriz: SpecialityOption[];
  asistencia: SpecialityOption[];
}

export const workSpecialityOptions = [
  { label: "Cuidadores", value: "cuidadores" },
  { label: "Enfermeros", value: "enfermeros" },
  { label: "Niñeras", value: "nineras" },
];
