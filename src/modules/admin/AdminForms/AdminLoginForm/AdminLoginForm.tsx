import { B4CButton } from "@/components/B4CButton";
import { B4CTextfield } from "@/components/B4CTextfield";
import { Box, Link, Typography } from "@mui/material";
import { useFormik } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import { AdminLoginService } from "@/services/adminServices/AdminLoginService";
import { useAdminSession } from "@/context/session/AdminSessionContext";
import { UserSelfService } from "@/services/userServices/userServices";
import { Roles } from "@/ts/enums";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AdminLoginForm = () => {
  const { setToken } = useAdminSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true); // Iniciar loading
      setErrorMessage(""); // Limpiar mensajes de error
      try {
        const userData = await AdminLoginService(values.email, values.password);
        if (userData) {
          const userSessionData = await UserSelfService(userData.token);
          if (userSessionData && userSessionData.role === Roles.Admin) {
            localStorage.setItem("adminToken", userData.token);
            setToken(userData.token);
            setTimeout(() => {
              navigate("/admin");
            }, 100);
          } else {
            setErrorMessage(
              "No tienes permisos para acceder a este panel de administrador.",
            );
          }
        }
      } catch (error: any) {
        console.log(error.statusCode);
        if (error.response) {
          // Verificar el código de estado de la respuesta
          if (error.statusCode === 401) {
            setErrorMessage(
              "Credenciales incorrectas. Por favor, intenta de nuevo.",
            );
          } else if (error.statusCode >= 500) {
            setErrorMessage(
              "Error del servidor. Por favor, intentalo más tarde.",
            );
          } else {
            setErrorMessage("Ocurrió un error. Por favor, intentalo de nuevo.");
          }
        } else {
          // Error sin respuesta (por ejemplo, problemas de red)
          setErrorMessage(
            "No se pudo conectar con el servidor. Por favor, verifica tu conexión.",
          );
        }
      } finally {
        setIsLoading(false); // Detener loading
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "inherit",
        flexDirection: "inherit",
        gap: "inherit",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          width: "70%",
          marginInline: "auto",
          color: "#666666",
        }}
      >
        {
          "Por favor, complete sus datos de inicio de sesión de administrador únicos a continuación."
        }
      </Typography>

      <B4CTextfield
        label="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        name="email"
        required
      />

      <Box>
        <B4CTextfield
          label="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          isPassword
          required
        />

        <Typography
          variant="body-large-bold"
          sx={{
            display: "inline",
            marginLeft: "65%",
            marginTop: "16px",
            color: "#999999",
          }}
        >
          <Link
            href={"/admin/login/olvide-contrasena"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {"¿Olvidaste tu contraseña?"}
          </Link>
        </Typography>
      </Box>

      <B4CButton
        onClick={formik.handleSubmit}
        variant="primary"
        label={isLoading ? "Cargando..." : "Entrar a Admin Dashboard"}
        disabled={isLoading}
      />

      {errorMessage && (
        <Typography
          variant="body2"
          color="error"
          sx={{ mt: 2, textAlign: "center" }}
        >
          {errorMessage}
        </Typography>
      )}
    </form>
  );
};
