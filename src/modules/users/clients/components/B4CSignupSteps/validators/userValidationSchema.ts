import * as Yup from 'yup';

export const userDataValidationSchema = Yup.object({
  names: Yup.string().required("Este campo es requerido"),
  fatherLastName: Yup.string().required("Este campo es requerido"),
  motherLastName: Yup.string(),
  address: Yup.string().required("Este campo es requerido"),
  postalCode: Yup.string()
    .matches(/^\d{5}$/, "El código postal debe tener 5 dígitos")
    .required("Este campo es requerido"),
  state: Yup.string().required("Este campo es requerido"),
  city: Yup.string().required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Este campo es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Este campo es requerido"),
});
