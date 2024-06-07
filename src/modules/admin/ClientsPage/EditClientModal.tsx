import { B4CButton } from "@/components/B4CButton";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";
import React, { useState } from "react";

interface IEditClientModal {
  open: boolean;
  onClose?: () => void;
}

export const EditClientModal = ({ open, onClose }: IEditClientModal) => {
  const [phone, setPhone] = useState("33-55-54-54-55");
  const [email, setEmail] = useState("mar.hdz@test.com");

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <B4CModal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" sx={{ marginRight: "70%" }}>
          Editar perfil
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "center",
            marginRight: "35%",
          }}
        >
          <Avatar
            alt="Andrew Bojangles"
            src="/path/to/avatar.jpg" // Cambia esto a la ruta de la imagen real
            sx={{ width: 115, height: 115, mb: 1 }}
          />
          <Box>
            <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
              Activo
            </Typography>
            <Typography variant="h6">Andrew Bojangles</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <B4CTextfield
            label="Número de teléfono"
            onChange={handlePhoneChange}
          />
          <B4CTextfield
            label="Dirección de correo electrónico"
            onChange={handleEmailChange}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <B4CButton label={"Guardar"} />

          <B4CButton
            variant="outlined"
            label={"Cancelar edicion"}
            size={Size.Small}
            onClick={onClose}
          />
        </Box>
      </Box>
    </B4CModal>
  );
};
