import { B4CDragNDrop } from "@/components/B4CDragNDrop";
import { B4CRadioButtonGroup } from "@/components/B4CRadioButtonGroup";
import { B4CSelect } from "@/components/B4CSelect";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { yesOrNoOptions } from "@/constants/yesOrNoOptions";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

interface RegisterFormProps {
  onFormValidChange: (isValid: boolean) => void;
}

export const RegisterFormPart2 = ({ onFormValidChange }: RegisterFormProps) => {
  const [formState, setFormState] = useState({
    curp: "",
    rfc: "",
    nss: "",
    driversLicense: "",
    typeOfLicense: "",
    workSpeciality: "",
    experienceYears: "",
    specialities: [
      { label: "Cuidados intensivos", value: false },
      { label: "Geriatría", value: false },
      { label: "Salud mental", value: false },
    ],
    motivationLetter: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    const updatedSpecialities = formState.specialities.map((speciality) =>
      speciality.label === value
        ? { ...speciality, value: checked }
        : speciality,
    );

    setFormState({
      ...formState,
      specialities: updatedSpecialities,
    });
  };

  useEffect(() => {
    const isFormValid =
      formState.curp.trim() !== "" &&
      formState.rfc.trim() !== "" &&
      formState.nss.trim() !== "" &&
      formState.driversLicense.trim() !== "" &&
      formState.typeOfLicense.trim() !== "" &&
      formState.workSpeciality.trim() !== "" &&
      formState.experienceYears.trim() !== "" &&
      formState.specialities.some((speciality) => speciality.value);

    console.log(formState);

    onFormValidChange(isFormValid);
  }, [formState, onFormValidChange]);

  return (
    <Box
      component={"form"}
      onSubmit={() => console.log("Enviar formulario")}
      sx={{ px: 12, py: 24 }}
    >
      <Typography>
        Ahora es turno de introducir tu{" "}
        <strong>documentación y datos profesionales.</strong>
      </Typography>
      <Box mt={24} gap={24} justifyContent={"space-between"}>
        <B4CTextfield
          label="Introduce tu Clave Única de Registro de Población (CURP)"
          name="curp"
          value={formState.curp}
          onChange={handleChange}
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
          label="Registro Federal de Contribuyentes (RFC)"
          name="rfc"
          value={formState.rfc}
          onChange={handleChange}
        />
        <B4CTextfield
          label="Número de Seguridad Social (NSS)"
          name="nss"
          value={formState.nss}
          onChange={handleChange}
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
        <B4CSelect
          label="¿Cuentas con licencia de manejo?"
          name="driversLicense"
          value={formState.driversLicense}
          options={yesOrNoOptions}
          onChange={handleChange}
        />
        <B4CTextfield
          label="Clase y número de licencia"
          name="typeOfLicense"
          value={formState.typeOfLicense}
          onChange={handleChange}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CRadioButtonGroup
          title="Especialidad de trabajo"
          options={[
            "Hogar",
            "Asistencia",
            "Acompañamiento",
            "Cuidados",
            "Motriz",
            "Mental",
            "Nutrición",
            "Psicología",
            "Terapia",
            "Especialidad",
            "Otro",
          ]}
          name="workSpeciality"
          value={formState.workSpeciality}
          onChange={handleChange}
          row
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CRadioButtonGroup
          title="Años de experiencia"
          options={["Menos de 1 año", "+1 año", "+3 años", "+5 años"]}
          name="experienceYears"
          value={formState.experienceYears}
          onChange={handleChange}
          row
        />
      </Box>

      <Box
        mt={24}
        display={"flex"}
        flexDirection={"column"}
        gap={16}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="body-normal-bold" color={colorPalette.black1}>
            Especialidades
          </Typography>
        </Box>
        <Box>
          {formState.specialities.map((speciality) => (
            <B4CCheckbox
              key={speciality.label}
              label={speciality.label}
              value={speciality.label}
              checked={speciality.value}
              onChange={onChangeCheckbox}
            />
          ))}
        </Box>
      </Box>
      <Box mt={30}>
        <Typography variant="body-normal-bold" color={colorPalette.black1}>
          Certificaciones o formación relevante:
        </Typography>
        <B4CDragNDrop />
      </Box>
      <Box
        mt={30}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <B4CTextfield
          label="Carta de motivación"
          name="motivationLetter"
          value={formState.motivationLetter}
          onChange={handleChange}
          isMultiline
          placeholder="Escribe y detalla las razones por las que te gustaría formar parte de esta plataforma."
          rows={12}
        />
      </Box>
    </Box>
  );
};
