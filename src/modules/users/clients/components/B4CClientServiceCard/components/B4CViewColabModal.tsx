import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { useGetOneCareer } from "@/context/api/hooks/useGetOneCareer";
import { Size } from "@/ts/enums";
import { Avatar, Box, Divider, Typography } from "@mui/material";

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
  const { data } = useGetOneCareer(colabId);
  return (
    <B4CModal open={openViewColab} onClose={handleOpenViewColabModal}>
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
            <Avatar src={""} alt={"asdad"} sx={{ width: 128, height: 128 }} />
            <Typography variant="h5" style={{ color: "#6C6C6C" }}></Typography>
            <Typography variant="h4"></Typography>
            <B4CStarRating rating={5} />
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
              <Typography variant="h4"></Typography>
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
              }}
            >
              <Typography variant="h4"></Typography>
              <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
                Años de Exp.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginBottom: "2rem" }}>
            <Typography
              variant="body-large"
              sx={{ color: "#6C6C6C" }}
            ></Typography>
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
          <B4CButton
            fullWidth
            size={Size.Small}
            label="Volver a mis servicios"
          />
        </Box>
      </>
    </B4CModal>
  );
};
