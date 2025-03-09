import { B4CDragNDrop } from "@/components/B4CDragNDrop";
import { B4CRadioButtonGroup } from "@/components/B4CRadioButtonGroup";
import { B4CSelect } from "@/components/B4CSelect";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { workSpecialityOptions } from "@/constants/workSpecialities";
import { yesOrNoOptions } from "@/constants/yesOrNoOptions";
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
}

export const RegisterFormPart2 = ({
  values,
  errors,
  touched,
  handleChange,
  onFormValidChange,
  handleBlur,
  onFormDataChange,
}: RegisterFormProps) => {
  const handleFormChange =
    (field: string) => (event: ChangeEvent<HTMLInputElement> | any) => {
      let value = event?.target?.value ?? event; // Si es un evento, toma `event.target.value`
      console.log(field, value); // Depuración
      onFormDataChange(field, value || null);
    };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    const updatedSpecialities = checked
      ? [
          ...values.specialities,
          { value, label: event.target?.labels?.[0]?.innerText || "" },
        ]
      : values.specialities.filter((speciality) => speciality.value !== value);

    console.log(updatedSpecialities); // Depuración
    onFormDataChange("specialities", updatedSpecialities, true);
  };

  useEffect(() => {
    const isPartialFormValid =
      !errors.curp &&
      !errors.rfc &&
      !errors.nss &&
      !errors.driversLicense &&
      !errors.typeOfLicense &&
      !errors.workSpeciality &&
      !errors.experienceYears &&
      !errors.motivationLetter &&
      values.specialities.length > 0;
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

      <Box mt={24}>
        <B4CRadioButtonGroup
          title="Especialidad de trabajo"
          options={Object.keys(workSpecialityOptions).map(
            (key) => key.charAt(0).toUpperCase() + key.slice(1),
          )}
          name="workSpeciality"
          value={values.workSpeciality}
          onChange={handleChange}
          row
        />
      </Box>

      <Box mt={24} display="flex" flexDirection="column" gap={16}>
        <Typography variant="body-normal-bold" color={colorPalette.black1}>
          Especialidades
        </Typography>
        <Box>
          {workSpecialityOptions[values.workSpeciality]?.map((speciality) => (
            <B4CCheckbox
              key={speciality.value}
              label={speciality.label}
              value={speciality.value}
              checked={values.specialities.some(
                (s) => s.value === speciality.value,
              )}
              onChange={onChangeCheckbox}
            />
          ))}
        </Box>
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
        <B4CDragNDrop />
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
