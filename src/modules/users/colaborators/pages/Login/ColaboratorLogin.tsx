import { Box, Typography } from "@mui/material";
import loginColaboratorImg from "@/assets/images/colaborators-login.png";
import { B4CLogo } from "@/assets/images/B4CLogo";
import { useEffect, useState } from "react";
import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { B4CTextfield } from "@/components/B4CTextfield";
import "./ColaboratorLogin.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useCollaboratorSession } from "@/context/auth/constants/useCollabSession";
import { useCollaboratorAuth } from "@/context/auth/constants/useCollabAuth";
import { LoginService } from "@/services/auth/LoginService";
import { GetSelfCollab } from "@/services/careerServices/CareerServices";
export const ColaboratorLogin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setToken } = useCollaboratorSession();

  const navigate = useNavigate();
  const { isCollaboratorAuthenticated } = useCollaboratorAuth();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSignUp = () => {
    navigate(`/colaborador/registro`);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true); // Iniciar loading
      setErrorMessage(""); // Limpiar mensajes de error
      try {
        const colabResponse = await LoginService(values.email, values.password);
        if (colabResponse) {
          const userSessionData = await GetSelfCollab(colabResponse.token);

          if (userSessionData) {
            if (userSessionData.is_approved) {
              localStorage.setItem("userToken", colabResponse.token);
              setToken(colabResponse.token);
              console.log("Colaborador conectado:", userSessionData);
              onClose(); // Cierra el modal
              setTimeout(() => {
                navigate("/colaborador");
              }, 1000); // Pequeño retraso para permitir que se cierre el modal
            }
          }
        }
      } catch (error: unknown) {
        console.log(error);
        setErrorMessage(
          "Credenciales incorrectas. Por favor, intenta de nuevo.",
        );
      } finally {
        setIsLoading(false); // Detener loading
      }
    },
  });

  useEffect(() => {
    if (isCollaboratorAuthenticated) {
      navigate("/colaborador");
    }
  }, []);

  return (
    <Box display={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Box className="left-panel">
        <Box className="left-panel-container">
          <B4CLogo />
          <Typography variant="h2">Plataforma de cuidador</Typography>
          <Typography>
            Entra a nuestra aplicación con tu correo o, si aún no lo has hecho,
            realiza una solicitud de registro a nuestra plataforma.
          </Typography>
          <B4CButton
            fullWidth
            onClick={handleIsOpen}
            label="Entrar a mi dashboard"
          ></B4CButton>
          <B4CButton
            variant="secondary"
            fullWidth
            label="Registrarme"
            onClick={handleSignUp}
          ></B4CButton>
        </Box>
      </Box>
      <Box
        className="right-panel"
        sx={{
          backgroundImage: `url(${loginColaboratorImg})`,
        }} // Evita que la imagen se repita
      ></Box>
      <B4CModal open={isOpen} onClose={onClose}>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "inherit",
            flexDirection: "inherit",
            gap: "inherit",
          }}
        >
          <Box className="login-modal-container">
            <Typography variant="h4">Bienvenido/a de vuelta</Typography>
            <Typography color="#545454">
              Ingresa tu correo y contraseña registrados
            </Typography>
            <B4CTextfield
              placeholder="Usuario"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            ></B4CTextfield>
            <B4CTextfield
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              placeholder="Contraseña"
              isPassword
            ></B4CTextfield>
            <B4CButton
              onClick={formik.handleSubmit}
              fullWidth
              label="Entrar"
              disabled={isLoading}
              isLoading={isLoading}
            ></B4CButton>

            <Typography>Olvidé mi contraseña</Typography>
          </Box>
        </form>
      </B4CModal>
    </Box>
  );
};
