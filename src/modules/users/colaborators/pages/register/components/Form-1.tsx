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
import { FormData1 } from "@/ts/types/api/collaborator/requestData";

interface RegisterFormProps {
  onFormValidChange: (isValid: boolean) => void;
  onFormDataChange: (data: FormData1) => void;
}

export const RegisterForm = ({
  onFormValidChange,
  onFormDataChange,
}: RegisterFormProps) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    gender: "",
    email: "",
    password: "",
    confirmedPassword: "",
    direction: "",
    postalCode: "",
    neighborhood: "",
    state: "",
    nacionality: "",
    maritalStatus: "",
    acceptedTerms: false,
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, acceptedTerms: event.target.checked });
  };

  useEffect(() => {
    const isFormValid =
      Object.values(formState).every((value) => value) &&
      formState.acceptedTerms === true &&
      formState.password === formState.confirmedPassword;

    onFormValidChange(isFormValid);
    onFormDataChange(formState);
  }, [formState, onFormDataChange, onFormValidChange]);

  const passwordsMatch = formState.password === formState.confirmedPassword;

  console.log(formState);

  return (
    <Box
      component={"form"}
      onSubmit={() => console.log("Enviar formulario")}
      sx={{ px: 12, py: 24 }}
    >
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
          label="Correo electrónico"
          name="email"
          value={formState.email}
          onChange={handleChange}
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
          label="Contraseña"
          name="password"
          value={formState.password}
          onChange={handleChange}
          isPassword={true}
        />
        <B4CTextfield
          label="Confirmar contraseña"
          name="confirmedPassword"
          value={formState.confirmedPassword}
          onChange={handleChange}
          isPassword={true}
          touched={formState.confirmedPassword !== ""}
          error={!passwordsMatch && formState.confirmedPassword !== ""}
          helper={
            !passwordsMatch && formState.confirmedPassword !== ""
              ? "Las contraseñas no coinciden"
              : ""
          }
        />
      </Box>
      <Box mt={24} display={"flex"} gap={24} justifyContent={"space-between"}>
        <B4CTextfield
          label="Dirección"
          name="direction"
          value={formState.direction}
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
          label="Código Postal"
          name="postalCode"
          value={formState.postalCode}
          onChange={handleChange}
        />
        <B4CTextfield
          label="Colonia"
          name="neighborhood"
          value={formState.neighborhood}
          onChange={handleChange}
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
        <B4CCheckbox
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
          checked={formState.acceptedTerms}
          onChange={onChangeCheckbox}
        />
      </Box>
      <TermsAndConditionsModal open={open} handleClose={handleCloseModal} />
    </Box>
  );
};
