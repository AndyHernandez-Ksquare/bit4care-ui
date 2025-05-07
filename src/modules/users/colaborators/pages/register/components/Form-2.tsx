import { B4CDragNDrop } from "@/components/B4CDragNDrop";
import { B4CRadioButtonGroup } from "@/components/B4CRadioButtonGroup";
import { B4CSelect } from "@/components/B4CSelect";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { workSpecialityOptions } from "@/constants/workSpecialities";
import { yesOrNoOptions } from "@/constants/yesOrNoOptions";
import { specialityOptions } from "@/modules/users/clients/pages/ClientsNewService/utils/specialityOptions";
import { colorPalette } from "@/style/partials/colorPalette";
import { FormData } from "@/ts/types/api/collaborator/requestData";
import { Box, Typography } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent, useEffect, useState } from "react";

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
  onFileDrop: (file: File) => void;
}

export const RegisterFormPart2 = ({
  values,
  errors,
  touched,
  handleChange,
  onFormValidChange,
  handleBlur,
  onFormDataChange,
  onFileDrop,
}: RegisterFormProps) => {
  const handleFormChange =
    (field: string) => (event: ChangeEvent<HTMLInputElement> | any) => {
      let value = event?.target?.value ?? event; // Si es un evento, toma `event.target.value`
      console.log(field, value); // Depuración
      onFormDataChange(field, value || null);
    };

  useEffect(() => {
    const isPartialFormValid =
      !errors.curp &&
      !errors.rfc &&
      !errors.nss &&
      !errors.driversLicense &&
      !errors.typeOfLicense &&
      !errors.experienceYears &&
      !errors.motivationLetter &&
      !errors.speciality;
    onFormValidChange(isPartialFormValid);
  }, [errors, values, onFormValidChange]);

  return (
    <Box
      component="form"
      onSubmit={() => console.log("Enviar formulario")}
      sx={{ px: 12, py: 24 }}
    >
      <Typography>
        Ahora es turno de introducir tu{" "}
        <strong>documentación y datos profesionales.</strong>
      </Typography>

      <Box mt={24}>
        <B4CTextfield
          id="curp"
          label="Introduce tu Clave Única de Registro de Población (CURP)"
          name="curp"
          value={values.curp}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.curp}
          error={touched.curp && !!errors.curp}
          helper={touched.curp && errors.curp}
        />
      </Box>

      <Box mt={24} display="flex" gap={24} justifyContent="space-between">
        <B4CTextfield
          id="rfc"
          label="Registro Federal de Contribuyentes (RFC)"
          name="rfc"
          value={values.rfc}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.rfc}
          error={touched.rfc && !!errors.rfc}
          helper={touched.rfc && errors.rfc}
        />
        <B4CTextfield
          id="nss"
          label="Número de Seguridad Social (NSS)"
          name="nss"
          value={values.nss}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.nss}
          error={touched.nss && !!errors.nss}
          helper={touched.nss && errors.nss}
        />
      </Box>

      <Box mt={24} display="flex" gap={24} justifyContent="space-between">
        <B4CSelect
          label="¿Cuentas con licencia de manejo?"
          name="driversLicense"
          value={values.driversLicense}
          options={yesOrNoOptions}
          onChange={handleChange}
          error={touched.driversLicense && !!errors.driversLicense}
        />
        <B4CTextfield
          id="typeOfLicense"
          label="Clase y número de licencia"
          name="typeOfLicense"
          value={values.typeOfLicense}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.typeOfLicense}
          error={touched.typeOfLicense && !!errors.typeOfLicense}
          helper={touched.typeOfLicense && errors.typeOfLicense}
        />
      </Box>

      <Box mt={24} display="flex" gap={24} justifyContent="space-between">
        <B4CSelect
          label="¿Cuentas con un grado académico en tu especialidad?"
          name="certified"
          value={values.certified}
          options={yesOrNoOptions}
          onChange={handleChange}
          error={touched.certified && !!errors.certified}
        />
        <B4CSelect
          label="Selecciona tu especialidad"
          name="speciality"
          value={values.speciality}
          options={specialityOptions}
          onChange={handleChange}
          error={touched.speciality && !!errors.speciality}
        />
      </Box>

      <Box mt={24}>
        <B4CRadioButtonGroup
          title="Años de experiencia"
          options={["Menos de 1 año", "+1 año", "+3 años", "+5 años"]}
          name="experienceYears"
          value={values.experienceYears}
          onChange={handleChange}
          row
        />
      </Box>

      <Box mt={30}>
        <Typography variant="body-normal-bold" color={colorPalette.black1}>
          Certificaciones o formación relevante:
        </Typography>
        <B4CDragNDrop onDrop={(files) => onFileDrop(files[0])} />
      </Box>

      <Box mt={30}>
        <B4CTextfield
          id="motivationLetter"
          label="Carta de motivación"
          name="motivationLetter"
          value={values.motivationLetter}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.motivationLetter}
          isMultiline
          placeholder="Escribe y detalla las razones por las que te gustaría formar parte de esta plataforma."
          rows={12}
          error={touched.motivationLetter && !!errors.motivationLetter}
          helper={touched.motivationLetter && errors.motivationLetter}
        />
      </Box>
    </Box>
  );
};
