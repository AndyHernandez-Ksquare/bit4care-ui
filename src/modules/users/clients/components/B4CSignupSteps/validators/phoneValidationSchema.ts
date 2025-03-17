import * as yup from 'yup';
import 'yup-phone-lite'; // For phone number validation

export const phoneValidationSchema = yup.object({
  phoneNumber: yup.string()
    .phone("IN", 'Número inválido')
    .required('Este campo es requerido'),
  countryCode: yup.string().required('Country code is required'),
});