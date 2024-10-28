import * as Yup from 'yup';

export const userDataValidationSchema = Yup.object({
  names: Yup.string()
    .trim("No se permiten espacios en blanco iniciales o finales")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El nombre solo debe contener letras")
    .required("Este campo es requerido"),
  fatherLastName: Yup.string()
    .trim("No se permiten espacios en blanco iniciales o finales")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El apellido solo debe contener letras")
    .required("Este campo es requerido"),
  motherLastName: Yup.string()
    .trim("No se permiten espacios en blanco iniciales o finales")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/, "El apellido solo debe contener letras"),
  address: Yup.string()
    .trim("No se permiten espacios en blanco iniciales o finales")
    .required("Este campo es requerido"),
  postalCode: Yup.string()
    .matches(/^\d{5}$/, "El código postal debe tener 5 dígitos")
    .required("Este campo es requerido"),
  state: Yup.string()
    .trim("No se permiten espacios en blanco iniciales o finales")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El estado solo debe contener letras")
    .required("Este campo es requerido"),
  city: Yup.string()
    .trim("No se permiten espacios en blanco iniciales o finales")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "La ciudad solo debe contener letras")
    .required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Este campo es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    // .matches(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
    // .matches(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
    // .matches(/\d/, "La contraseña debe contener al menos un número")
    // .matches(/[@$!%*?&]/, "La contraseña debe contener al menos un símbolo especial (@, $, !, %, *, ?, &)")
    .required("Este campo es requerido"),
});
