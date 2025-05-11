import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { calculateAverageRating } from "@/constants/calculateAverageRating";
import { useFileUrlsByUser } from "@/context/api/hooks/file/useFileUrlsByUser";
import { Size } from "@/ts/enums/Size";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface ISingleCollaboratorsCardProps {
  user: GetOneCarer | null;
  open: boolean;
  onClose?: () => void;
}

export const SingleCollaboratorsCard = ({
  user,
  open,
  onClose,
}: ISingleCollaboratorsCardProps) => {
  // 2️⃣ Llamamos siempre el hook (no dentro de useEffect)
  const { data: fileUrls, loading: filesLoading } = useFileUrlsByUser(
    user ? user.User.id : 0,
  );

  // 3️⃣ Estado para la URL de perfil final
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  // ── 5️⃣ Cuando cambien las URLs, buscamos la que tenga is_profile_pic === true ──
  useEffect(() => {
    // si cambiamos de usuario o no llegan urls, resetea
    if (!user || !fileUrls) {
      setAvatarUrl("");
      return;
    }

    // busca foto de perfil
    const profile = fileUrls.find((f) => f.is_profile_pic);
    // si la hay, úsala, si no, bórrala
    setAvatarUrl(profile?.url ?? "");
  }, [user, fileUrls]);

  return (
    <B4CModal
      open={open}
      onClose={onClose}
      bgColor={"linear-gradient(180deg, #FFFFFF 0%, #E4EEFC 100%)"}
    >
      {user ? (
        <>
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
                src={avatarUrl}
                alt={user.User.name}
                sx={{ width: 128, height: 128 }}
              />
              <Typography variant="h5" style={{ color: "#6C6C6C" }}>
                {user.speciality}
              </Typography>
              <Typography variant="h4">{user.User.name}</Typography>
              <B4CStarRating
                rating={calculateAverageRating(user.carerReviews)}
              />
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
                <Typography variant="h4">{user.completed_services}</Typography>
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
                <Typography variant="h4">{user.worked_hours}</Typography>
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
                <Typography variant="h4">{user.years_of_experience}</Typography>
                <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
                  Años de Exp.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginBottom: "2rem" }}>
              <Typography variant="body-large" sx={{ color: "#6C6C6C" }}>
                {user.speciality}
              </Typography>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginInline: "auto",
                justifyContent: "center",
              }}
            >
              {user.carrerProfile.qualifications.map((qualification, index) => {
                return <B4CTag key={index} label={qualification.name} />;
              })}
            </Box> */}
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
        </>
      ) : (
        <Typography variant="h3">Error al encontrar usuario</Typography>
      )}
    </B4CModal>
  );
};
