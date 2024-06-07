import { B4CButton } from "@/components/B4CButton";
import { getUnacceptedUsers, User } from "@/services/colaboratorsServices";
import { spacings } from "@/style/partials/spacings";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PendingCollaboratorsCard } from "./PendingCollaboratorsCard";

export const PendingPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpen = (user: User | null) => () => {
    setSelectedUser(user);
    setOpenModal(!!user);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUnacceptedUsers();
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
            sx={{
              display: "flex",
              flexDirection: "column",

              maxWidth: "262px",
              borderRadius: "8px",
              boxShadow: "0px 8px 30px 0px #0000001F",
              paddingBlock: spacings.spacing4,
              paddingInline: spacings.spacing2,
              gap: "4vh",
            }}
          >
            <Box
              display={"inherit"}
              flexDirection={"inherit"}
              sx={{ gap: ".8vh", alignItems: "center" }}
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
            <B4CButton
              label="Revisar solicitud"
              size={Size.Small}
              onClick={handleOpen(user)}
            />
          </Box>
        </Grid>
      ))}
      <PendingCollaboratorsCard
        user={selectedUser}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </Grid>
  );
};
