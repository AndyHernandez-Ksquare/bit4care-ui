import { B4CButton } from "@/components/B4CButton";
import { getUnacceptedUsers, User } from "@/services/colaboratorsServices";
import { spacings } from "@/style/partials/spacings";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PendingPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

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
        <Grid
          size={{ xs: 3, tablet: 4, desktop: 3 }}
          key={`${user.name}-${index}`}
        >
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
              onClick={() =>
                navigate(`/admin/colaboradores/solicitud?id=${user.id}`)
              }
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
