import { Box, Typography } from "@mui/material";
import loginColaboratorImg from "@/assets/images/colaborators-login.png";
import { B4CLogo } from "@/assets/images/B4CLogo";
import React, { useState } from "react";
import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { B4CTextfield } from "@/components/B4CTextfield";

export const ColaboratorLogin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Box display={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Box
        sx={{
          width: "50vw",
          background: "linear-gradient(180deg, #E4EEFC 0%, #FFFFFF 100%)",
          display: "flex",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            marginInline: "14rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
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
          ></B4CButton>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50vw",
          backgroundImage: `url(${loginColaboratorImg})`,
          backgroundSize: "cover", // Esto hará que la imagen cubra todo el Box
          backgroundPosition: "center", // Esto centrará la imagen
          backgroundRepeat: "no-repeat",
        }} // Evita que la imagen se repita
      ></Box>
      <B4CModal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            paddingInline: "4rem",
            paddingBlock: "6rem",
          }}
        >
          <Typography variant="h4">Bienvenido/a de vuelta</Typography>
          <Typography color="#545454">
            Ingresa tu correo y contraseña registrados
          </Typography>
          <B4CTextfield placeholder="Usuario"></B4CTextfield>
          <B4CTextfield placeholder="Contraseña" isPassword></B4CTextfield>
          <B4CButton fullWidth label="Entrar"></B4CButton>
          <Typography>Olvidé mi contraseña</Typography>
        </Box>
      </B4CModal>
    </Box>
  );
};
