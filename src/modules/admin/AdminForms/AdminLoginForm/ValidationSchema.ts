import * as Yup from "yup";
export const ValidationSchema = Yup.object({
  email: Yup.string()
    .required("Campo obligatorio")
    .matches(/^\S*$/, "No se permiten espacios en blanco"),
  password: Yup.string()
    .required("Campo obligatorio")
    .matches(/^\S*$/, "No se permiten espacios en blanco"),
});