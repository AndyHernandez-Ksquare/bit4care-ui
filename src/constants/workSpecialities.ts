export interface SpecialityOption {
  label: string;
  value: string;
}

export interface Speciality {
  label: string;
  value: string;
  checked: boolean;
}

export interface WorkSpecialityOptions {
  técnicos: SpecialityOption[];
  hogar: SpecialityOption[];
  general: SpecialityOption[];
  automotriz: SpecialityOption[];
  asistencia: SpecialityOption[];
}

export const workSpecialityOptions: WorkSpecialityOptions = {
  técnicos: [
    { label: "Electricidad", value: "electricidad" },
    {
      label: "Técnico de computación y redes",
      value: "tecnico_computacion_redes",
    },
    { label: "Técnico cercado eléctrico", value: "tecnico_cercado_electrico" },
    { label: "Doctor", value: "doctor" },
    { label: "Mantenimiento A/C", value: "mantenimiento_ac" },
  ],
  hogar: [
    { label: "Paseadores de perro", value: "paseadores_perro" },
    { label: "Plomería", value: "plomeria" },
    { label: "Jardinería", value: "jardineria" },
    { label: "Personal de limpieza", value: "personal_limpieza" },
    { label: "Pintura para el hogar", value: "pintura_hogar" },
    { label: "Lava tinacos y cisternas", value: "lava_tinacos" },
    { label: "Limpieza de patios", value: "limpieza_patios" },
    { label: "Limpieza de albercas", value: "limpieza_albercas" },
  ],
  general: [
    { label: "Mudanzas", value: "mudanzas" },
    { label: "Cerrajeros", value: "cerrajeros" },
    { label: "Ayudante en general", value: "ayudante_general" },
    { label: "Aluminería", value: "alumineria" },
  ],
  automotriz: [
    { label: "Lava autos", value: "lava_autos" },
    { label: "Mecánicos", value: "mecanicos" },
    { label: "Vulcanizadora a domicilio", value: "vulcanizadora_domicilio" },
    { label: "Cambio de llantas", value: "cambio_llantas" },
  ],
  asistencia: [
    { label: "Cuidadores", value: "cuidadores" },
    { label: "Enfermeros", value: "enfermeros" },
    { label: "Niñeras", value: "nineras" },
  ],
};
