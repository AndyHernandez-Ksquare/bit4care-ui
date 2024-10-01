import { B4CRadioButtonGroup } from "@/components/B4CRadioButtonGroup";
import { B4CSelect } from "@/components/B4CSelect";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { genders } from "@/constants/genders";
import { maritalStatusOptions } from "@/constants/maritalStatus";
import { statesOptions } from "@/constants/mexicanStates";
import { nacionalitiesOptions } from "@/constants/nacionality";
import { Box, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

interface RegisterFormProps {
  onFormValidChange: (isValid: boolean) => void;
}

export const RegisterForm = ({ onFormValidChange }: RegisterFormProps) => {
  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    gender: "",
    email: "",
    state: "",
    nacionality: "",
    maritalStatus: "",
    acceptedTerms: false,
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, acceptedTerms: event.target.checked });
  };

  useEffect(() => {
    const isFormValid =
      Object.values(formState).every((value) => value) &&
      formState.acceptedTerms === true;

    onFormValidChange(isFormValid);
  }, [formState, onFormValidChange]);

  return (
    <Box
      component={"form"}
      onSubmit={() => console.log("Enviar formulario")}
      sx={{ px: 12, py: 24 }}
    >
      <Typography>
        Comienza por introducir tus <strong>datos personales</strong>
      </Typography>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CTextfield
          label="Nombre"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        <B4CTextfield
          label="Apellido(s)"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CTextfield
          label="Fecha de nacimiento"
          name="birthDate"
          value={formState.birthDate}
          onChange={handleChange}
        />
        <B4CSelect
          label="Género"
          name="gender"
          value={formState.gender}
          options={genders}
          onChange={handleChange}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CTextfield
          label="Dirección de correo electrónico"
          name="email"
          value={formState.email}
          onChange={handleChange}
          type="email"
        />
      </Box>

      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CSelect
          label="Estado de residencia"
          name="state"
          value={formState.state}
          options={statesOptions}
          onChange={handleChange}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CSelect
          label="Nacionalidad"
          name="nacionality"
          value={formState.nacionality}
          options={nacionalitiesOptions}
          onChange={handleChange}
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CSelect
          label="Estado Civil"
          name="maritalStatus"
          value={formState.maritalStatus}
          options={maritalStatusOptions}
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
          row
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CCheckbox
          label="Acepto los términos y condiciones"
          checked={formState.acceptedTerms}
          onChange={onChangeCheckbox}
        />
      </Box>
    </Box>
  );
};
