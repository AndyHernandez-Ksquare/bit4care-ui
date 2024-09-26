import { B4CButton } from "@/components/B4CButton";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { unacceptedUsersMockData } from "@/constants/mockData/colaborators";
import { User } from "@/services/colaboratorsServices";
import { colorPalette } from "@/style/partials/colorPalette";
import { ModalController } from "@/ts/types/shared/ModalController";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface RejectRequestProps extends ModalController {
  userId: number;
}

export const RejectRequest = ({
  userId,
  isOpen,
  onClose,
}: RejectRequestProps) => {
  const [user, setUser] = useState<User | null>(null); // Estado para el usuario

  useEffect(() => {
    if (userId) {
      const foundUser = unacceptedUsersMockData.find(
        (user) => user.id === userId,
      );
      if (foundUser) setUser(foundUser); // Asigna el usuario encontrado
    }
  }, [userId]);
  return (
    <B4CModal open={isOpen} onClose={onClose}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <Avatar
            src={user?.profileImg ? user.profileImg : ""}
            alt={`${user?.name}-${user?.roleId}`}
            sx={{ width: 128, height: 128 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Typography variant="h5">Confirmar rechazo de solicitud</Typography>
            <Typography variant="body-small">
              Esta acción no se puede deshacer
            </Typography>
          </Box>
          <B4CButton fullWidth label="Seguir considerando" />
          <Button
            sx={{
              width: "100%",
              backgroundColor: colorPalette.error,
              color: colorPalette.white,
              fontWeight: 700,
              borderRadius: "8px",
              paddingBlock: "14px",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Rechazar solicitud
          </Button>
        </Box>
      </Box>
    </B4CModal>
  );
};
