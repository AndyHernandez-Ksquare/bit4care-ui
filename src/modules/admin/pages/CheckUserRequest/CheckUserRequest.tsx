import { B4CButton } from "@/components/B4CButton";
import { B4CNextIcon } from "@/components/B4CNextIcon/B4CNextIcon";
import { useReviewCarer } from "@/context/api/hooks/carer/useReviewCarer";
import { useFileUrlsByUser } from "@/context/api/hooks/file/useFileUrlsByUser";
import { useGetOneCareer } from "@/context/api/hooks/useGetOneCareer";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { EvaluateCarerRequest } from "@/ts/types/api/carer/CreateCarerProfile.type";
import { FileUploadResponse } from "@/ts/types/api/file";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Grid2 as Grid,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const CheckUserRequest = () => {
  const [searchParams] = useSearchParams(); // Obtener los query params
  const careerId = searchParams.get("id"); // Obtener el ID del query param

  const [page, setPage] = useState(1);

  // Validar que se tenga un careerId válido
  if (!careerId) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" color="error">
          ID de carrera no válido.
        </Typography>
      </Box>
    );
  }

  // Utilizamos el custom hook para obtener la información del carer
  const { data: user, isLoading, error } = useGetOneCareer(parseInt(careerId));

  // 2️⃣ Archivos del carer
  const {
    data: files,
    loading: filesLoading,
    error: filesError,
    refetch: refetchFiles,
  } = useFileUrlsByUser(user?.User.id ?? null);

  // Custom hook para aceptar al carer
  const {
    reviewCarer,
    isLoading: reviewIsLoading,
    error: reviewError,
  } = useReviewCarer();

  const handleAccept = async () => {
    // Se crea el objeto de request con ambos valores en true.
    const requestBody: EvaluateCarerRequest = {
      is_approved: true,
      is_active: true,
    };
    try {
      await reviewCarer(requestBody, parseInt(careerId));
      // Aquí puedes agregar lógica adicional: mostrar notificación, redirigir, etc.
    } catch (err) {
      // El error ya se maneja en el hook (se guarda en reviewError)
      console.error("Error al aceptar al carer:", err);
    }
  };

  const handleReject = async () => {
    // Se crea el objeto de request con ambos valores en true.
    const requestBody: EvaluateCarerRequest = {
      is_approved: false,
      is_active: false,
    };
    try {
      await reviewCarer(requestBody, parseInt(careerId));
      // Aquí puedes agregar lógica adicional: mostrar notificación, redirigir, etc.
    } catch (err) {
      // El error ya se maneja en el hook (se guarda en reviewError)
      console.error("Error al rechazar al carer:", err);
    }
  };

  const DOC_LABELS: Record<string, string> = {
    cv: "Currículum",
    id: "Identificación",
    vid_mot: "Vídeo de introducción",
  };

  // Estado de carga
  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6">Cargando datos...</Typography>
      </Box>
    );
  }

  // Manejo de errores
  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  // En caso de que no se encuentre el usuario
  if (!user) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" color="error">
          No se encontró el usuario.
        </Typography>
      </Box>
    );
  }
  return (
    <>
      {user &&
        (page === 1 ? (
          <>
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
                {user.User.name}
              </Typography>
            </Breadcrumbs>
            <Grid
              container
              gap={"32px"}
              sx={{ paddingInline: "1rem", paddingTop: "3rem" }}
            >
              <Grid size={{ xs: 6 }}>
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{ alignItems: "center" }}
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
                      src={""}
                      alt={`${user.User.name}-${user.speciality}`}
                      sx={{ width: 128, height: 128 }}
                    />
                    <Typography variant="h5" style={{ color: "#6C6C6C" }}>
                      {user.speciality}
                    </Typography>
                    <Typography variant="h4">{user.User.name}</Typography>
                  </Box>
                  <Box sx={{ marginBottom: "2rem" }}>
                    <Typography variant="body-large" sx={{ color: "#6C6C6C" }}>
                      {user.speciality}
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
                    <B4CButton
                      fullWidth
                      label={
                        reviewIsLoading ? "Aceptando..." : "Aceptar solicitud"
                      }
                      onClick={handleAccept}
                      disabled={reviewIsLoading}
                    />
                    {reviewError && (
                      <Typography variant="body-small" color="error">
                        {reviewError}
                      </Typography>
                    )}
                    <Button
                      onClick={() => setPage(2)}
                      sx={{
                        backgroundColor: colorPalette.error,
                        color: colorPalette.white,
                        fontWeight: 700,
                        borderRadius: "16px",
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
              <Grid size={{ xs: 5 }}>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <Typography variant="body-medium-bold">
                    {"Número de teléfono: "}
                  </Typography>
                  <Typography variant="body-medium">
                    {user.User.phone}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <Typography variant="body-medium-bold">
                    {"Estado de residencia: "}
                  </Typography>
                  <Typography variant="body-medium">{user.state}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <Typography variant="body-medium-bold">
                    {"Años de experiencia "}
                  </Typography>
                  <Typography variant="body-medium">{`${user.years_of_experience} años`}</Typography>
                </Box>
                {/* 4️⃣ Aquí renderizamos los archivos: */}
                <Box
                  sx={{
                    marginTop: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Typography variant="body-medium-bold">
                    Documentos:
                  </Typography>

                  {filesLoading && <CircularProgress size={24} />}
                  {filesError && (
                    <Typography color="error">{filesError}</Typography>
                  )}

                  {!filesLoading && files?.length
                    ? files.map((f: FileUploadResponse) => (
                        <B4CButton
                          key={f.id}
                          variant="secondary"
                          size={Size.Small}
                          fullWidth
                          label={DOC_LABELS[f.name] ?? f.name}
                          onClick={() => window.open(f.url, "_blank")}
                        />
                      ))
                    : !filesLoading && (
                        <Typography variant="body-small">
                          No hay archivos disponibles.
                        </Typography>
                      )}
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
                    {user.motivation_letter}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </>
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
                src={""}
                alt={`${user.User.name}-${user.speciality}`}
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
              <B4CButton
                sx={{
                  width: "100%",
                  backgroundColor: colorPalette.error,
                  color: colorPalette.white,
                  fontWeight: 700,
                  borderRadius: "16px",
                  paddingBlock: "14px",
                  fontSize: "16px",
                  textTransform: "none",
                }}
                label={reviewIsLoading ? "Rechazando..." : "Rechazar solicitud"}
                onClick={handleReject}
                disabled={reviewIsLoading}
              />
            </Box>
          </Box>
        ))}
    </>
  );
};
