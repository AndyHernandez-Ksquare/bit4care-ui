import { B4CButton } from "@/components/B4CButton";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { Size } from "@/ts/enums/Size";
import { AdminClientList } from "@/ts/types/api/client/AdminClientList.type";
import { Avatar, Box, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface IEditClientModal {
  client: {
    id: string;
    name: string;
    status: string;
    email: string;
    phone: string;
    activity: string;
    __raw: AdminClientList;
  };
  open: boolean;
  onClose?: () => void;
}

export const EditClientModal = ({
  client,
  open,
  onClose,
}: IEditClientModal) => {
  const [phone, setPhone] = useState("33-55-54-54-55");
  const [email, setEmail] = useState("mar.hdz@test.com");

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          Información de contacto
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
            {client.status === "Activo" ? (
              <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
                Activo
              </Typography>
            ) : (
              <Typography variant="body2" color="error.main" sx={{ mb: 2 }}>
                Activo
              </Typography>
            )}
            <Typography variant="h6">{client.name}</Typography>
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
            value={client.phone}
            disabled
          />
          <B4CTextfield
            label="Dirección de correo electrónico"
            value={client.email}
            disabled
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}></Box>
      </Box>
    </B4CModal>
  );
};
