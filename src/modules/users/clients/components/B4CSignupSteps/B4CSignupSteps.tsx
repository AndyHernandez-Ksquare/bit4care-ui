import { B4CButton } from "@/components/B4CButton";
import { B4CPhoneInput } from "@/components/B4CPhoneInput";
import { B4CStepper } from "@/components/B4CStepper";
import { Size } from "@/ts/enums";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useState } from "react";
import { B4CConfirmationCodeInput } from "../B4CConfirmationCodeInput";
import { B4CTextfield } from "@/components/B4CTextfield";
import { useFormik } from "formik";
import { phoneValidationSchema } from "./validators/phoneValidationSchema";
import { userDataValidationSchema } from "./validators/userValidationSchema";
import { B4CSelect } from "@/components/B4CSelect";
import { statesOptions } from "@/constants/mexicanStates";

export const B4CSignupSteps = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const steps = ["paso1", "paso2", "paso3"];

  const formik = useFormik({
    initialValues: {
      countryCode: "+52", // Mexico como codigo telefónico default
      phoneNumber: "",
    },
    validationSchema: phoneValidationSchema,
    onSubmit: ({ countryCode, phoneNumber }) => {
      // Handle form submission
      console.log("Form Submitted:", `${countryCode}${phoneNumber}`);
      handleActiveStep(1);
    },
  });

  const userDataFormik = useFormik({
    initialValues: {
      names: "",
      fatherLastName: "",
      motherLastName: "",
      address: "",
      postalCode: "",
      state: "",
      city: "",
      email: "",
      password: "",
    },
    validationSchema: userDataValidationSchema,
    onSubmit: (values) => {
      console.log("Formulario Enviado:", values);
    },
  });

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const handleConfirm = () => {
    handleActiveStep(2);
  };

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
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.names}
                touched
                helper={userDataFormik.errors.names}
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 6 }}>
              <B4CTextfield
                label="Apellido paterno"
                name="fatherLastName"
                value={userDataFormik.values.fatherLastName}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.fatherLastName}
                helper={userDataFormik.errors.fatherLastName}
                touched
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 6 }}>
              <B4CTextfield
                label="Apellido materno"
                name="motherLastName"
                value={userDataFormik.values.motherLastName}
                onChange={userDataFormik.handleChange}
                error={
                  userDataFormik.touched.motherLastName &&
                  Boolean(userDataFormik.errors.motherLastName)
                }
                helper={
                  userDataFormik.touched.motherLastName
                    ? userDataFormik.errors.motherLastName
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
            justifyContent={"center"}
          >
            <Grid size={{ xs: 12 }}>
              <B4CTextfield
                label="Dirección"
                name="address"
                value={userDataFormik.values.address}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.address}
                helper={userDataFormik.errors.address}
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 4 }}>
              <B4CTextfield
                label="Código postal"
                name="postalCode"
                value={userDataFormik.values.postalCode}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.postalCode}
                helper={userDataFormik.errors.postalCode}
                touched
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 4 }}>
              <B4CSelect
                label="Estado"
                name="state"
                value={userDataFormik.values.state}
                options={statesOptions}
                onChange={userDataFormik.handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, desktop: 4 }}>
              <B4CTextfield
                label="Ciudad"
                name="city"
                value={userDataFormik.values.city}
                onChange={userDataFormik.handleChange}
                error={
                  userDataFormik.touched.city &&
                  Boolean(userDataFormik.errors.city)
                }
                helper={
                  userDataFormik.touched.city ? userDataFormik.errors.city : ""
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
                label="Correo electronico"
                name="email"
                value={userDataFormik.values.email}
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.email}
                helper={userDataFormik.errors.email}
                touched
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
                onChange={userDataFormik.handleChange}
                error={!!userDataFormik.errors.password}
                helper={userDataFormik.errors.password}
                touched
              />
            </Grid>
          </Grid>
          <B4CButton
            disabled={!userDataFormik.isValid}
            label="Confirmar"
            variant="primary"
            onClick={handleConfirm}
            size={Size.Small}
          />
        </Box>
      )}
    </Box>
  );
};
