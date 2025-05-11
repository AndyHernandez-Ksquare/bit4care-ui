import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SnackbarBlock from "@/components/B4CSnackBarBlock";
import { Box, Typography } from "@mui/material";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CStepper } from "@/components/B4CStepper";
import { B4CButton } from "@/components/B4CButton";
import { RegisterForm } from "../components/Form-1";
import { RegisterFormPart2 } from "../components/Form-2";
import { RegisterFormPart3 } from "../components/Form-3";
import { assembleRequestData } from "../functions/assemblyForm";
import { FormData } from "@/ts/types/api/collaborator/requestData";
import { Layout } from "../components/Layout";
import { useCreateCarerProfile } from "@/context/api/hooks/useCreateCarerProfile";
import { useFormik } from "formik";
import { CarerValidationSchema } from "../validators/CarerValidationSchema";
import { useSnackbar } from "@/context/ui/SnackbarContext";
import { FileUploadMetadata, FileUploadResponse } from "@/ts/types/api/file";
import { useFileUpload } from "@/context/api/hooks/file/useFileUpload";
import { LoginService } from "@/services/auth/LoginService";
import axios from "@/services/baseService";
import { extractFileMeta } from "@/constants/extractFileMeta";

function ColaboratorsRegister() {
  const navigate = useNavigate();
  const { open } = useSnackbar();
  const { createCarerProfile } = useCreateCarerProfile();
  const { uploadFile, loading: uploading } = useFileUpload();

  const [canContinue, setCanContinue] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  // Temp files
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const formik = useFormik<FormData>({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: "",
      direction: "",
      gender: "",
      maritalStatus: "",
      nacionality: "",
      postalCode: "",
      neighborhood: "",
      state: "",
      curp: "",
      rfc: "",
      nss: "",
      driversLicense: "no",
      certified: "no",
      typeOfLicense: "",
      experienceYears: "",
      speciality: "",
      motivationLetter: "",
      acceptedTerms: false,
      confirmedPassword: "",
    },
    validationSchema: CarerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleContinue = async () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
      return;
    }

    const requestData = assembleRequestData(formik.values, formik.values);

    try {
      const user = await createCarerProfile(requestData);
      open("Solicitud enviada con éxito", "success");
      // now upload files to S3

      if (!user || typeof user.id !== "number") {
        open("No se pudo obtener el ID de usuario", "error");
        return;
      }

      // 2️⃣ Login temporal (no guardamos en localStorage)
      let token: string;

      try {
        const responseToken = await LoginService(
          formik.values.email,
          formik.values.password,
        );
        if (!responseToken) {
          open("Error en login temporal", "error");
          return;
        }
        token = responseToken.token; // ajusta según tu respuesta
        // inyectamos en axios para las siguientes llamadas
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } catch (err) {
        open("Error en login temporal", "error");
        return;
      }

      const uploads: Promise<FileUploadResponse>[] = [];
      if (cvFile) {
        uploads.push(uploadFile(extractFileMeta(cvFile), cvFile));
      }
      if (idFile) {
        uploads.push(uploadFile(extractFileMeta(idFile), idFile));
      }
      if (videoFile) {
        uploads.push(uploadFile(extractFileMeta(videoFile), videoFile));
      }
      await Promise.all(uploads);
      navigate("/colaborador/login");
    } catch (err) {
      open("Error al enviar la solicitud", "error");
    }
  };

  return (
    <Layout>
      <Box>
        <Box
          sx={{
            maxWidth: 200,
            display: "flex",
            justifyContent: "flex-start",
            mb: 24,
            ml: -20,
          }}
        >
          <B4CStepper
            activeStep={currentStep}
            steps={["Paso 1", "Paso 2", "Paso 3"]}
            spacing={2}
          />
        </Box>
        <Typography variant="h4" gutterBottom>
          Solicitud de Colaborador(a)
        </Typography>
        <Typography variant="subtitle1" mt={24}>
          Completa el siguiente formulario para solicitar tu registro en nuestra
          plataforma.
        </Typography>
      </Box>
      <Box sx={{ mt: 24, p: 12 }}>
        <SnackbarBlock />
      </Box>
      <Box
        sx={{
          mt: 24,
          p: 12,
          border: `1px solid ${colorPalette.grey4}`,
          borderRadius: "8px",
        }}
      >
        {/* Formulario */}
        {currentStep === 0 && (
          <RegisterForm
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            onFormValidChange={setCanContinue}
            onFormDataChange={formik.setFieldValue}
          />
        )}
        {currentStep === 1 && (
          <RegisterFormPart2
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            onFormValidChange={setCanContinue}
            onFormDataChange={formik.setFieldValue}
            onFileDrop={(file: File) => setCvFile(file)}
          />
        )}
        {currentStep === 2 && (
          <RegisterFormPart3
            onFormValidChange={setCanContinue}
            onIdDrop={(file: File) => setIdFile(file)}
            onVideoDrop={(file: File) => setVideoFile(file)}
          />
        )}
      </Box>
      <Box mt={24}>
        <Typography
          variant="body-medium"
          mb={24}
          display={"grid"}
          sx={{
            color: colorPalette.warning,
          }}
        >
          Tu solicitud está sujeta a aprobación.
        </Typography>
        <B4CButton
          label={
            currentStep === 2
              ? "Enviar solicitud"
              : "Continuar con la solicitud"
          }
          disabled={!canContinue || uploading}
          onClick={handleContinue}
        />
      </Box>
    </Layout>
  );
}

export default ColaboratorsRegister;
