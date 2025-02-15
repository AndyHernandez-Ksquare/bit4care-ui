import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { useGetOneCareer } from "@/context/api/hooks/useGetOneCareer";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

interface B4CViewColabModalProps {
  colabId: number;
  openViewColab: boolean;
  handleOpenViewColabModal: () => void;
}

export const B4CViewColabModal = ({
  colabId,
  openViewColab,
  handleOpenViewColabModal,
}: B4CViewColabModalProps) => {
  const { data, isLoading, error } = useGetOneCareer(colabId);

  return (
    <B4CModal open={openViewColab} onClose={handleOpenViewColabModal}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="570px"
      >
        {/* Estado de carga */}
        {isLoading && <CircularProgress color="primary" />}

        {/* Estado de error */}
        {error && (
          <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
            Error al cargar la información del colaborador
          </Alert>
        )}

        {/* Contenido si no hay carga ni error */}
        {!isLoading && !error && data && (
          <>
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
                alt={data?.User.name}
                sx={{ width: 128, height: 128 }}
              />
              <Typography variant="h5" sx={{ color: "#6C6C6C" }}>
                {data?.User.name}
              </Typography>
              <B4CStarRating rating={4} />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                justifyContent: "center",
                maxWidth: "80%",
                mt: 2,
              }}
            >
              <Chip
                sx={{ background: colorPalette.grey3, borderRadius: "1rem" }}
                label={data?.description}
              />
              <Chip
                sx={{ background: colorPalette.grey3, borderRadius: "1rem" }}
                label={data?.gender}
              />
              <Chip
                sx={{ background: colorPalette.grey3, borderRadius: "1rem" }}
                label={
                  data?.has_driving_license
                    ? "Con licencia de manejo"
                    : "Sin licencia de manejo"
                }
              />
              <Chip
                sx={{ background: colorPalette.grey3, borderRadius: "1rem" }}
                label={data?.speciality}
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
                <Typography variant="h4">{data?.completed_services}</Typography>
                <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
                  Servicios
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                sx={{ height: "69px", alignSelf: "flex-start" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">
                  {data?.years_of_experience}
                </Typography>
                <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
                  Años de Exp.
                </Typography>
              </Box>
            </Box>
          </>
        )}

        {/* Botón de cerrar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            width: "100%",
          }}
        >
          <B4CButton
            fullWidth
            size={Size.Small}
            label="Volver a mis servicios"
            onClick={handleOpenViewColabModal}
          />
        </Box>
      </Box>
    </B4CModal>
  );
};
