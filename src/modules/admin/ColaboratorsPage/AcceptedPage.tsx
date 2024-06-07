import { getAcceptedUsers, User } from "@/services/colaboratorsServices";
import { spacings } from "@/style/partials/spacings";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SingleCollaboratorsCard } from "./SingleCollaboratorsCard";
import { colorPalette } from "@/style/partials/colorPalette";

export const AcceptedPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpen = (user: User | null) => (_event: any) => {
    setSelectedUser(user);
    setOpenModal(!!user);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAcceptedUsers();
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
        <Grid item xs={12} tablet={4} desktop={3} key={`${user.name}-${index}`}>
          <Box
            onClick={handleOpen(user)}
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
              "&:hover": {
                backgroundColor: "rgba(184, 214, 255, 0.3)",
              },
              "&:hover img": {
                transform: "scale(1.5)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Avatar
              src={user.profileImg ? user.profileImg : ""}
              alt={`${user.name}-${user.roleId}`}
              sx={{ width: 128, height: 128 }}
            />

            <Typography variant="body-small-bold">{user.name}</Typography>
            <Typography variant="body-small" sx={{ fontSize: "14px" }}>
              {user.roleId}
            </Typography>
            <Typography variant="body-small" sx={{ fontSize: "14px" }}>
              {user.email}
            </Typography>
          </Box>
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
