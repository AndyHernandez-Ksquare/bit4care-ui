import { getAcceptedUsers, User } from "@/services/colaboratorsServices";
import { spacings } from "@/style/partials/spacings";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SingleCollaboratorsCard } from "../ColaboratorsPage/SingleCollaboratorsCard";
import { useGetAllCareers } from "@/context/api/hooks/useGetAllCareers";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { useFileUrlsByUser } from "@/context/api/hooks/file/useFileUrlsByUser";
import { GetPresignedUrlByUser } from "@/services/fileServices/FileServices";

export const AcceptedPage = () => {
  const [users, setUsers] = useState<GetOneCarer[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<GetOneCarer | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOpen = (user: GetOneCarer | null) => (_event: unknown) => {
    setSelectedUser(user);
    setOpenModal(!!user);
  };
  const { data } = useGetAllCareers();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = data;
        if (!usersData) {
          throw new Error("No se encontraron datos de usuarios.");
        }
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <Grid container spacing={8}>
      {users.map((user, index) => (
        <Grid
          size={{ xs: 6, tablet: 4, desktop: 3 }}
          key={`${user.User.name}-${index}`}
        >
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
        maxWidth: "262px",
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
        sx={{ width: 128, height: 128 }}
      />
      <Typography variant="body-small-bold">{user.User.name}</Typography>
      <Typography variant="body-small" sx={{ fontSize: "14px" }}>
        {user.speciality}
      </Typography>
      <Typography variant="body-small" sx={{ fontSize: "14px" }}>
        {user.User.email}
      </Typography>
    </Box>
  );
};
