import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CImage } from "@/components/BigElements/B4CImage";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { User } from "@/services/colaboratorsServices";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import React, { Fragment } from "react";

interface ISingleCollaboratorsCardProps {
  user: User | null;
  open: boolean;
  onClose?: () => void;
}

export const SingleCollaboratorsCard = ({
  user,
  open,
  onClose,
}: ISingleCollaboratorsCardProps) => {
  return (
    <B4CModal
      open={open}
      onClose={onClose}
      bgColor={`linear-gradient( #F6F9FE, #FFFFFF)`}
    >
      {user ? (
        <Fragment>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{
              alignItems: "center",
              maxWidth: "570px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <Avatar
                src={user.profileImg ? user.profileImg : ""}
                alt={"asdad"}
                sx={{ width: 128, height: 128 }}
              />
              <Typography variant="h5" style={{ color: "#6C6C6C" }}>
                {user.roleId}
              </Typography>
              <Typography variant="h4">{user.name}</Typography>
              <B4CStarRating rating={user.carrerProfile.stars} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                verticalAlign: "middle",
                marginBlock: "2rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">
                  {user.carrerProfile.totalServices}
                </Typography>
                <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
                  Servicios
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                sx={{
                  height: "69px",
                  alignSelf: "flex-start",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginInline: "2rem",
                }}
              >
                <Typography variant="h4">
                  {user.carrerProfile.reviews}
                </Typography>
                <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
                  Reseñas
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                sx={{
                  height: "69px",
                  alignSelf: "flex-start",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">
                  {user.carrerProfile.expYears}
                </Typography>
                <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
                  Años de Exp.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginBottom: "2rem" }}>
              <Typography variant="body-large" sx={{ color: "#6C6C6C" }}>
                {user.carrerProfile.speciality}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginInline: "auto",
                alignItems: "center",
              }}
            >
              {user.carrerProfile.qualifications.map((qualification, index) => {
                return <B4CTag key={index} label={qualification.name} />;
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              width: "100%",
            }}
          >
            <B4CButton size={Size.Small} label="Conectar con cliente" />
            <B4CButton size={Size.Small} label="Dar de baja" />
          </Box>
        </Fragment>
      ) : (
        <Typography variant="h3">Error al encontrar usuario</Typography>
      )}
    </B4CModal>
  );
};
