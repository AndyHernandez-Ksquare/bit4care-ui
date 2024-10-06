import { B4CLogo } from "@/assets/images/B4CLogo";
import { B4CButton } from "@/components/B4CButton";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Box, Typography } from "@mui/material";
import loginClientsImg from "@/assets/images/clients-login.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginService } from "@/services/auth/LoginService";
import { ClientSelfService } from "@/services/clientServices/ClientServices";
import { Roles } from "@/ts/enums";
import "./ClientLogin.css";

export const ClientLogin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleVisiblePassword = () => {
    setVisible(!visible);
  };

  const handleSignUp = () => {
    navigate(`/cliente/registro`);
  };

  const onClose = () => {
    setIsOpen(false);
    setErrorMessage("");
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
        const clientResponse = await LoginService(
          values.email,
          values.password,
        );
        if (clientResponse) {
          const userSessionData = await ClientSelfService(clientResponse.token);

          if (userSessionData) {
            if (userSessionData.role === Roles.Client) {
              console.log("Cliente conectado:", clientResponse);
              navigate(`/cliente`);
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
  return (
    <Box display={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Box className="left-panel">
        <Box className="left-panel-container">
          <B4CLogo />
          <Typography variant="h2">Plataforma de cliente</Typography>
          <Typography>
            Entra a nuestra aplicación con tu correo o, si aún no lo has hecho,
            registrate con tus datos.
          </Typography>
          <B4CButton
            fullWidth
            onClick={handleIsOpen}
            label={"Entrar a mi dashboard"}
            // Desactiva el botón mientras carga
          >
            {/* {isLoading && <CircularProgress size={24} />} */}
          </B4CButton>
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
          backgroundImage: `url(${loginClientsImg})`,
        }} // Evita que la imagen se repita
      ></Box>
      <B4CModal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            paddingInline: "2rem",
            paddingBlock: "3rem",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "inherit",
              flexDirection: "inherit",
              gap: "inherit",
            }}
          >
            <Typography variant="h4">Bienvenido/a de vuelta</Typography>
            <Typography color="#545454">
              Ingresa tu correo y contraseña registrados
            </Typography>
            {/* Mostrar mensaje de error si existe */}
            {errorMessage && (
              <Typography color="error">{errorMessage}</Typography>
            )}
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
              isVisible={visible}
              onClick={handleVisiblePassword}
            ></B4CTextfield>
            <B4CButton
              onClick={formik.handleSubmit}
              fullWidth
              label="Entrar"
              disabled={isLoading}
              isLoading={isLoading}
            ></B4CButton>
          </form>
          <Link className="custom-link" to="/cliente/olvide-contrasena">
            <Typography variant="body-normal">Olvidé mi contraseña</Typography>
          </Link>
        </Box>
      </B4CModal>
    </Box>
  );
};
