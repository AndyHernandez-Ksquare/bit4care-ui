import { B4CButton } from "@/components/B4CButton";
import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { B4CStarRating } from "@/components/B4CStarRating";
import { unacceptedUsersMockData } from "@/constants/mockData/colaborators";
import { User } from "@/services/colaboratorsServices";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const CheckUserRequest = () => {
  const [user, setUser] = useState<User | null>(null); // Estado para el usuario
  const [searchParams] = useSearchParams(); // Obtener los query params
  const userId = searchParams.get("id"); // Obtener el ID del query param

  const [page, setPage] = useState(1);

  useEffect(() => {
    return () => {
      setPage(1);
    };
  }, []);

  useEffect(() => {
    if (userId) {
      const foundUser = unacceptedUsersMockData.find(
        (user) => user.id === parseInt(userId as string),
      );
      if (foundUser) setUser(foundUser); // Asigna el usuario encontrado
    }
  }, [userId]);

  return (
    <Fragment>
      {user &&
        (page === 1 ? (
          <Fragment>
            <Breadcrumbs separator={<B4CNextIcon />} aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href="/admin/colaboradores/"
              >
                <Typography typography="body-normal">Colaboradores</Typography>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/admin/colaboradores/pendientes"
              >
                <Typography typography="body-normal">
                  Pendientes de aceptar
                </Typography>
              </Link>
              <Typography
                typography="body-normal-bold"
                color={colorPalette.primary}
              >
                {user.name}
              </Typography>
            </Breadcrumbs>
            <Grid
              container
              gap={"32px"}
              sx={{ paddingInline: "1rem", paddingTop: "3rem" }}
            >
              <Grid item xs={6}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{
                    alignItems: "center",
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
                      alt={`${user.name}-${user.roleId}`}
                      sx={{ width: 128, height: 128 }}
                    />
                    <Typography variant="h5" style={{ color: "#6C6C6C" }}>
                      {user.roleId}
                    </Typography>
                    <Typography variant="h4">{user.name}</Typography>
                    <B4CStarRating rating={user.carrerProfile.stars} />
                  </Box>
                  <Box sx={{ marginBottom: "2rem" }}>
                    <Typography variant="body-large" sx={{ color: "#6C6C6C" }}>
                      {user.carrerProfile.speciality}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "1rem",
                    }}
                  >
                    <B4CButton fullWidth label="Aceptar solicitud" />
                    <Button
                      onClick={() => setPage(2)}
                      sx={{
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
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <Typography variant="body-medium-bold">
                    {"Número de teléfono: "}
                  </Typography>
                  <Typography variant="body-medium">{"9389239"}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <Typography variant="body-medium-bold">
                    {"Estado de residencia: "}
                  </Typography>
                  <Typography variant="body-medium">{"Queretaro"}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <Typography variant="body-medium-bold">
                    {"Años de experiencia "}
                  </Typography>
                  <Typography variant="body-medium">{"4 años"}</Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                  }}
                >
                  <B4CButton variant="outlined" label="CV" size={Size.Small} />
                  <B4CButton variant="outlined" label="CV" size={Size.Small} />
                </Box>
                <Box
                  sx={{
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                  }}
                >
                  <Typography variant="body-medium-bold">
                    Carta de motivacion
                  </Typography>
                  <Typography variant="body-medium">
                    {user.carrerProfile.motivationLetter}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Fragment>
        ) : (
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
                src={user.profileImg ? user.profileImg : ""}
                alt={`${user.name}-${user.roleId}`}
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
                <Typography variant="h5">
                  Confirmar rechazo de solicitud
                </Typography>
                <Typography variant="body-small">
                  Esta acción no se puede deshacer
                </Typography>
              </Box>
              <B4CButton
                fullWidth
                label="Seguir considerando"
                onClick={() => setPage(1)}
              />
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
        ))}
    </Fragment>
  );
};
