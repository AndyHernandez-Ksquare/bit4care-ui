import { B4CSelect } from "@/components/B4CSelect";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { genders } from "@/constants/genders";
import { maritalStatusOptions } from "@/constants/maritalStatus";
import { statesOptions } from "@/constants/mexicanStates";
import { nacionalitiesOptions } from "@/constants/nacionality";
import { Box, Link, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { TermsAndConditionsModal } from "./TermsAndConditionsModal";
import { FormData } from "@/ts/types/api/collaborator/requestData";
import { FormikErrors, FormikTouched } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { colorPalette } from "@/style/partials/colorPalette";

interface RegisterFormProps {
  values: FormData;
  touched: FormikTouched<FormData>;
  errors: FormikErrors<FormData>;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  onFormValidChange: (isValid: boolean) => void;
  onFormDataChange: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<void> | Promise<FormikErrors<FormData>>;
}

export const RegisterForm = ({
  values,
  touched,
  errors,
  onFormValidChange,
  handleChange,
  handleBlur,
  onFormDataChange,
}: RegisterFormProps) => {
  const [open, setOpen] = useState(false);

  const handleDateChange = (field: string) => (value: Dayjs | null) => {
    onFormDataChange(field, value ? value.toISOString() : null);
  };

  const handleFormChange =
    (field: string) => (event: ChangeEvent<HTMLInputElement> | any) => {
      let value = event?.target?.value ?? event; // Si es un evento, toma `event.target.value`
      console.log(field, value); // Depuración
      onFormDataChange(field, value || null);
    };

  const handleOpenModal = () => {
    setOpen(!open);
  };

  // Efecto para verificar la validez del formulario parcial
  useEffect(() => {
    const isPartialFormValid =
      !errors.name &&
      !errors.lastName &&
      !errors.birthDate &&
      !errors.gender &&
      !errors.email &&
      !errors.password &&
      !errors.confirmedPassword &&
      !errors.direction &&
      !errors.postalCode &&
      !errors.neighborhood &&
      !errors.state &&
      !errors.nacionality &&
      !errors.maritalStatus &&
      values.acceptedTerms; // Verifica si los términos están aceptados

    onFormValidChange(isPartialFormValid);
  }, [errors, values, onFormValidChange]);

  return (
    <Box sx={{ px: 12, py: 24 }}>
      <Typography>
        Comienza por introducir tus <strong>datos personales</strong>
      </Typography>
      <Box
        mt={24}
        display={"flex"}
        gap={24}
        justifyContent={"space-between"}
        flexDirection={{
          mobile: "column",
          desktop: "row",
        }}
      >
        <B4CTextfield
          id="name"
          name="name"
          label="Nombre"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur} // Importante para marcar como "touched"
          touched={touched.name}
          error={touched.name && Boolean(errors.name)}
          helper={touched.name && errors.name}
        />
        <B4CTextfield
          id="lastName"
          label="Apellido(s)"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.lastName}
          error={touched.lastName && Boolean(errors.lastName)}
          helper={touched.lastName && errors.lastName}
        />
      </Box>
      <Box
        mt={24}
        display={"flex"}
        gap={24}
        justifyContent={"space-between"}
        flexDirection={{
          mobile: "column",
          desktop: "row",
        }}
      >
        {/* Reemplazamos el campo de texto por un DatePicker */}
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DatePicker
            name="birthDate"
            label="Fecha de nacimiento"
            value={values.birthDate ? dayjs(values.birthDate) : null}
            onChange={handleDateChange("birthDate")}
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        <B4CSelect
          label="Género"
          name="gender"
          value={values.gender}
          options={genders}
          onChange={handleFormChange("gender")}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CTextfield
          id="email"
          label="Correo electrónico"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.email}
          error={touched.email && Boolean(errors.email)}
          helper={touched.email && errors.email}
          type="email"
        />
      </Box>
      <Box
        mt={24}
        display={"flex"}
        gap={24}
        justifyContent={"space-between"}
        flexDirection={{
          mobile: "column",
          desktop: "row",
        }}
      >
        <B4CTextfield
          id="password"
          label="Contraseña"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.password}
          error={touched.password && Boolean(errors.password)}
          helper={touched.password && errors.password}
          type="email"
          isPassword={true}
        />
        <B4CTextfield
          id="confirmedPassword"
          label="Confirmar contraseña"
          name="confirmedPassword"
          value={values.confirmedPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.confirmedPassword}
          error={touched.confirmedPassword && Boolean(errors.confirmedPassword)}
          helper={touched.confirmedPassword && errors.confirmedPassword}
          isPassword={true}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CTextfield
          label="Dirección"
          name="direction"
          value={values.direction}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.direction}
          error={touched.direction && Boolean(errors.direction)}
          helper={touched.direction && errors.direction}
        />
      </Box>
      <Box
        mt={24}
        display={"flex"}
        gap={24}
        justifyContent={"space-between"}
        flexDirection={{
          mobile: "column",
          desktop: "row",
        }}
      >
        <B4CTextfield
          id="postalCode"
          label="Código Postal"
          name="postalCode"
          value={values.postalCode}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.postalCode}
          error={touched.postalCode && Boolean(errors.postalCode)}
          helper={touched.postalCode && errors.postalCode}
        />
        <B4CTextfield
          id="neighborhood"
          label="Colonia"
          name="neighborhood"
          value={values.neighborhood}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.neighborhood}
          error={touched.neighborhood && Boolean(errors.neighborhood)}
          helper={touched.neighborhood && errors.neighborhood}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CSelect
          label="Estado de residencia"
          name="state"
          value={values.state}
          options={statesOptions}
          onChange={handleFormChange("state")}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CSelect
          label="Nacionalidad"
          name="nacionality"
          value={values.nacionality}
          options={nacionalitiesOptions}
          onChange={handleFormChange("nacionality")}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CSelect
          label="Estado Civil"
          name="maritalStatus"
          value={values.maritalStatus}
          options={maritalStatusOptions}
          onChange={handleFormChange("maritalStatus")}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CCheckbox
          name="acceptedTerms"
          checked={values.acceptedTerms}
          onChange={handleChange}
          label={
            <Typography variant="body-normal">
              Acepto los{" "}
              <Link
                component="button"
                onClick={handleOpenModal}
                sx={{
                  textDecoration: "none",
                }}
              >
                Términos y condiciones
              </Link>
            </Typography>
          }
        />
      </Box>
      <TermsAndConditionsModal open={open} handleClose={handleOpenModal} />
    </Box>
  );
};
