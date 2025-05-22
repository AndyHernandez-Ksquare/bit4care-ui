import { spacings } from "@/style/partials/spacings";
import {
  Avatar,
  Box,
  CircularProgress,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SingleCollaboratorsCard } from "../ColaboratorsPage/SingleCollaboratorsCard";
import { useGetAllCareers } from "@/context/api/hooks/useGetAllCareers";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { useFileUrlsByUser } from "@/context/api/hooks/file/useFileUrlsByUser";
import { B4CButton } from "@/components/B4CButton";

export const AcceptedPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<GetOneCarer | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOpen = (user: GetOneCarer | null) => (_event: unknown) => {
    setSelectedUser(user);
    setOpenModal(!!user);
  };

  const { data, isLoading, error } = useGetAllCareers();

  // Estado de carga global
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={spacings.spacing4}>
        <CircularProgress />
      </Box>
    );
  }

  // Estado de error global
  if (error) {
    return (
      <Box textAlign="center" mt={spacings.spacing4}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
        <B4CButton
          label="Recargar"
          variant="primary"
          onClick={() => window.location.reload()}
          sx={{ mt: spacings.spacing2 }}
        />
      </Box>
    );
  }

  // Estado de data vacía
  if (!data || data.length === 0) {
    return (
      <Box textAlign="center" mt={spacings.spacing4}>
        <Typography variant="h6">No se encontraron colaboradores.</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={8}>
      {data?.map((user, index) => (
        <Grid size={{ xs: 6, tablet: 4 }} key={`${user.User.name}-${index}`}>
          <CollaboratorCard user={user} onClick={handleOpen(user)} />
        </Grid>
      ))}
      <SingleCollaboratorsCard
        user={selectedUser}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </Grid>
  );
};

// ─── Componente “hermano” dentro del mismo fichero ────────────────────────
interface CollaboratorCardProps {
  user: GetOneCarer;
  onClick: any;
}
const CollaboratorCard: React.FC<CollaboratorCardProps> = ({
  user,
  onClick,
}) => {
  const { data: fileUrls = [], loading } = useFileUrlsByUser(user.User.id);

  // Busca la URL de la imagen de perfil
  const profilePic = fileUrls?.find((f) => f.is_profile_pic)?.url ?? "";

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        alignItems: "center",
        height: "287px",
        borderRadius: "8px",
        boxShadow: "0px 8px 30px 0px #0000001F",
        paddingBlock: spacings.spacing4,
        gap: ".8vh",
        "&:hover": { backgroundColor: "rgba(184, 214, 255, 0.3)" },
        "&:hover img": {
          transform: "scale(1.5)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <Avatar
        src={loading ? undefined : profilePic}
        alt={user.User.name}
        sx={{
          width: { xs: 64, desktop: 128 },
          height: { xs: 64, desktop: 128 },
        }}
      />
      <Typography
        variant="body-small-bold"
        sx={{
          mt: spacings.spacing2,
          textAlign: "center",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {user.User.name}
      </Typography>
      <Typography
        variant="body-small"
        sx={{
          fontSize: { xs: "12px", desktop: "14px" },
          textAlign: "center",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {user.speciality ? user.speciality : "Sin especialidad"}
      </Typography>
      <Typography
        variant="body-small"
        sx={{
          fontSize: { xs: "12px", desktop: "14px" },
          textAlign: "center",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {user.User.email}
      </Typography>
    </Box>
  );
};
