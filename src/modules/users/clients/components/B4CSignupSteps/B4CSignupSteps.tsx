import { B4CButton } from "@/components/B4CButton";
import { B4CPhoneInput } from "@/components/B4CPhoneInput";
import { B4CStepper } from "@/components/B4CStepper";
import { Size } from "@/ts/enums";
import {
  Alert,
  Box,
  Grid2 as Grid,
  Snackbar,
  SnackbarCloseReason,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { B4CConfirmationCodeInput } from "../B4CConfirmationCodeInput";
import { B4CTextfield } from "@/components/B4CTextfield";
import { useFormik } from "formik";
import { phoneValidationSchema } from "./validators/phoneValidationSchema";
import { userDataValidationSchema } from "./validators/userValidationSchema";
import { B4CSelect } from "@/components/B4CSelect";
import { statesOptions } from "@/constants/mexicanStates";
import { CreateClient } from "@/ts/types/api/client";
import { PhoneFormValues, UserDataFormValues } from "@/ts/forms";
import { useNavigate } from "react-router-dom";
import { colorPalette } from "@/style/partials/colorPalette";
import { Check } from "@mui/icons-material";
import { useCreateClient } from "@/context/api/hooks/useCreateClient";

const clientFormToCreateClientParser = (
  formValues: PhoneFormValues & UserDataFormValues,
): CreateClient => {
  return {
    address: `${formValues.address}, ${formValues.city}, ${formValues.state} ${formValues.postalCode}`,
    email: formValues.email,
    phone: `${formValues.countryCode}${formValues.phoneNumber}`,
    password: formValues.password,
    name: `${formValues.names} ${formValues.fatherLastName} ${formValues.motherLastName}`.trim(),
  };
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  // Usa una expresión regular para capturar las secciones del número telefónico
  const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);

  // Si coincide con el formato esperado, devuelve el número formateado
  if (match) {
    return `(${match[1]})-${match[2]}-${match[3]}`;
  }

  // En caso de que no coincida, devuelve el número original o lanza un error
  throw new Error(
    "El número telefónico no tiene el formato correcto de 10 dígitos",
  );
};

export const B4CSignupSteps = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const navigate = useNavigate();
  const { createClient } = useCreateClient();

  const steps = ["paso1", "paso2", "paso3"];

  const formik = useFormik<PhoneFormValues>({
    initialValues: {
      countryCode: "+52", // Mexico como codigo telefónico default
      phoneNumber: "",
    },
    validationSchema: phoneValidationSchema,
    onSubmit: ({ countryCode, phoneNumber }) => {
      // Handle form submission
      console.log("Form Submitted:", `${countryCode}${phoneNumber}`);
      setActiveStep(1);
    },
  });

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
    navigate("/cliente/login");
  };

  const userDataFormik = useFormik<UserDataFormValues>({
    initialValues: {
      names: "",
      fatherLastName: "",
      motherLastName: "",
      address: "",
      postalCode: "",
      state: statesOptions[0].value,
      city: "",
      email: "",
      password: "",
    },
    validationSchema: userDataValidationSchema,
    onSubmit: async () => {
      const clientData = clientFormToCreateClientParser({
        ...userDataFormik.values,
        ...formik.values,
      });
      const response = await createClient(clientData);
      console.log("Cliente creado exitosamente:", response);

      setOpenSnackbar(true);
    },
  });

  return (
    <Box
      sx={{
        maxWidth: "536px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: { xs: "center", desktop: "start" },
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          marginLeft: { xs: "0", desktop: "-32px" },
        }}
      >
        <B4CStepper activeStep={activeStep} steps={steps} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: { xs: "center", desktop: "start" },
          justifyContent: { xs: "center", desktop: "start" },
        }}
      >
        <Typography variant="h4">Registro de cliente</Typography>
        <Typography
          variant="body-medium"
          sx={{ textAlign: { xs: "center", desktop: "start" } }}
        >
          Rellena los datos de registro. Tomará un par de minutos. Todo lo que
          necesitas es un número de teléfono y un correo electrónico.
        </Typography>
      </Box>
      {activeStep === 0 && (
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <B4CPhoneInput
            countryCode={formik.values.countryCode}
            phoneNumber={formik.values.phoneNumber}
            phoneNumberError={formik.errors.phoneNumber}
            handleCountryCodeChange={(e) => {
              formik.setFieldValue("countryCode", e.target.value);
            }}
            handlePhoneNumberChange={(e) => {
              formik.setFieldValue("phoneNumber", e.target.value);
            }}
          />
          <B4CButton
            isSubmit
            label="Enviar código"
            variant="primary"
            disabled={!formik.isValid || !formik.dirty}
            size={Size.Small}
          />
        </form>
      )}
      {activeStep === 1 && (
        <>
          <B4CConfirmationCodeInput
            confirmation={confirmation}
            countryCode={formik.values.countryCode}
            phoneNumber={formik.values.phoneNumber}
            setActiveStep={setActiveStep}
            setConfirmation={setConfirmation}
          />
        </>
      )}
      {activeStep === 2 && (
        <Box
          component="form"
          onSubmit={userDataFormik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <Box
            sx={{
              padding: "16px",
              border: `1px solid ${colorPalette.success}`,
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography variant="body-normal">{`${formik.values.countryCode} ${formatPhoneNumber(formik.values.phoneNumber)}`}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
              }}
            >
              <Check sx={{ color: colorPalette.success }} />
              <Typography
                sx={{ color: colorPalette.success }}
              >{`Numero confirmado`}</Typography>
            </Box>
          </Box>
          <Grid
            container
            spacing={8}
            sx={{
              border: `1px solid #E2E4E5`,
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Grid size={{ xs: 12 }}>
              <B4CTextfield
                label="Nombre(s)"
                name="names"
                value={userDataFormik.values.names}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.names}
                touched={userDataFormik.touched.names}
                helper={
                  userDataFormik.touched.names
                    ? userDataFormik.errors.names
                    : ""
                }
                placeholder="Ej. Alberto o Alberto Eugenio"
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 6 }}>
              <B4CTextfield
                label="Apellido paterno"
                name="fatherLastName"
                value={userDataFormik.values.fatherLastName}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.fatherLastName}
                touched={userDataFormik.touched.fatherLastName}
                helper={
                  userDataFormik.touched.fatherLastName
                    ? userDataFormik.errors.fatherLastName
                    : ""
                }
                placeholder="Ej. Pérez"
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 6 }}>
              <B4CTextfield
                label="Apellido materno"
                name="motherLastName"
                value={userDataFormik.values.motherLastName}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.motherLastName}
                touched={userDataFormik.touched.motherLastName}
                helper={
                  userDataFormik.touched.motherLastName
                    ? userDataFormik.errors.motherLastName
                    : ""
                }
                placeholder="Ej. Martínez"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={8}
            sx={{
              border: `1px solid #E2E4E5`,
              padding: "16px",
              borderRadius: "8px",
            }}
            justifyContent={"center"}
          >
            <Grid size={{ xs: 12 }}>
              <B4CTextfield
                label="Dirección"
                name="address"
                value={userDataFormik.values.address}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.address}
                touched={userDataFormik.touched.address}
                helper={
                  userDataFormik.touched.address
                    ? userDataFormik.errors.address
                    : ""
                }
                placeholder="Ej. Calle de la Estrella #4"
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 4 }}>
              <B4CTextfield
                label="Código postal"
                name="postalCode"
                value={userDataFormik.values.postalCode}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.postalCode}
                touched={userDataFormik.touched.postalCode}
                helper={
                  userDataFormik.touched.postalCode
                    ? userDataFormik.errors.postalCode
                    : ""
                }
                placeholder="Ej. 45421"
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 4 }}>
              <B4CSelect
                label="Estado"
                name="state"
                value={userDataFormik.values.state}
                options={statesOptions}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.state}
                touched={userDataFormik.touched.state}
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 4 }}>
              <B4CTextfield
                label="Ciudad"
                name="city"
                value={userDataFormik.values.city}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.city}
                touched={userDataFormik.touched.city}
                helper={
                  userDataFormik.touched.city ? userDataFormik.errors.city : ""
                }
                placeholder="Ej. Tampico"
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={8}
            sx={{
              border: `1px solid #E2E4E5`,
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Grid size={{ xs: 12 }}>
              <B4CTextfield
                label="Correo electronico"
                name="email"
                value={userDataFormik.values.email}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.email}
                touched={userDataFormik.touched.email}
                helper={
                  userDataFormik.touched.email
                    ? userDataFormik.errors.email
                    : ""
                }
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={8}
            sx={{
              border: `1px solid #E2E4E5`,
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Grid size={{ xs: 12 }}>
              <B4CTextfield
                label="Contraseña"
                isPassword
                name="password"
                value={userDataFormik.values.password}
                onBlur={userDataFormik.handleBlur}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.password}
                touched={userDataFormik.touched.password}
                helper={
                  userDataFormik.touched.password
                    ? userDataFormik.errors.password
                    : ""
                }
              />
            </Grid>
          </Grid>
          <B4CButton
            disabled={!userDataFormik.isValid}
            label="Confirmar"
            variant="primary"
            size={Size.Small}
            isSubmit
          />
        </Box>
      )}

      {/* Snackbar for confirmation */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          ¡Cliente registrado exitosamente!
        </Alert>
      </Snackbar>
    </Box>
  );
};
