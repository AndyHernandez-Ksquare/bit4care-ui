import * as Yup from "yup";

export const newServiceValidationSchema = Yup.object().shape({
  patient_name: Yup.string().required("El nombre del paciente es obligatorio"),
  patient_phone: Yup.string()
    .matches(/^\d+$/, "Debe ser un número válido")
    .required("El teléfono es obligatorio"),
  start_date: Yup.date().required("La fecha de inicio es obligatoria"),
  end_date: Yup.date().min(
    Yup.ref("start_date"),
    "Debe ser después de la fecha de inicio",
  ),
  description: Yup.string()
    .required("La descripción es obligatoria")
    .max(255, "La descripción no puede tener más de 255 caracteres"),
  address: Yup.string().required("La dirección es obligatoria"),
  comment: Yup.string().max(
    255,
    "Los comentarios adicionales no pueden tener más de 255 caracteres",
  ),
});
