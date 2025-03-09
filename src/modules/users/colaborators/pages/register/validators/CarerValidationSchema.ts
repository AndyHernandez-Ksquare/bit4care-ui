import * as Yup from "yup";

export const CarerValidationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  birthDate: Yup.string().required("La fecha de nacimiento es obligatoria"),
  gender: Yup.string().required("El género es obligatorio"),
  email: Yup.string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  password: Yup.string()
    .min(6, "Mínimo 6 caracteres")
    .required("La contraseña es obligatoria"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirmar contraseña es obligatorio"),
  direction: Yup.string().required("La dirección es obligatoria"),
  postalCode: Yup.string().required("El código postal es obligatorio"),
  neighborhood: Yup.string().required("La colonia es obligatoria"),
  state: Yup.string().required("El estado es obligatorio"),
  nacionality: Yup.string().required("La nacionalidad es obligatoria"),
  maritalStatus: Yup.string().required("El estado civil es obligatorio"),
  acceptedTerms: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones",
  ),
  curp: Yup.string()
    .matches(/^[A-Z0-9]{18}$/, "CURP inválida")
    .required("El CURP es obligatorio"),
  rfc: Yup.string()
    .matches(/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/, "RFC inválido")
    .required("El RFC es obligatorio"),
  nss: Yup.string()
    .matches(/^\d{11}$/, "NSS inválido")
    .required("El NSS es obligatorio"),

  typeOfLicense: Yup.string(),

  motivationLetter: Yup.string().required(
    "La carta de motivación es obligatoria",
  ),
});
