import { B4CTextfield } from "@/components/B4CTextfield";
import { Box, Button, Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import { ChangeMobileNum } from "./ChangeMobileNum";
import { ChangePassword } from "./ChangePassword";
import { EditFieldIcons } from "@/assets/svgIcons/editIcons/EditFieldIcons";
import { B4CDragPhotoItem } from "@/components/B4CDragPhotoItem";

export const UserSettings = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalPasswordOpen, setModalPasswordOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleOpenModalPassword = () => {
    setModalPasswordOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseModalPassword = () => {
    setModalPasswordOpen(false);
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        margin: "auto",
      }}
    >
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        sx={{ marginBottom: "2rem", marginTop: "2rem" }}
      >
        <B4CDragPhotoItem />
      </Grid>
      <Box sx={{ flexGrow: "1", marginBottom: "2rem" }}>
        <Grid
          container
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Grid size={{ xs: 12 }}>
            <B4CTextfield label="Numero de telefono" />
            <Button
              startIcon={<EditFieldIcons />}
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              sx={{
                backgroundColor: "white",
                boxShadow: "none",
                textTransform: "none",
                color: "#2F80ED",
                "&:hover": {
                  backgroundColor: "white",
                  boxShadow: "none",
                  fontWeight: "600",
                },
              }}
            >
              Cambiar número de teléfono
            </Button>
            <ChangeMobileNum open={modalOpen} onClose={handleCloseModal} />
            <ChangePassword
              open={modalPasswordOpen}
              onClose={handleCloseModalPassword}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Grid
          container
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Grid size={{ xs: 12 }}>
            <B4CTextfield label="Nombre(s)" />
          </Grid>
          <Grid size={{ xs: 12, desktop: 6 }}>
            <B4CTextfield label="Apellido materno" />
          </Grid>
          <Grid size={{ xs: 12, desktop: 6 }}>
            <B4CTextfield label="Apellido paterno" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: "1", marginBottom: "2rem" }}>
        <Grid
          container
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
          justifyContent={"center"}
        >
          <Grid size={{ xs: 12 }}>
            <B4CTextfield label="Direccion" />
          </Grid>
          <Grid size={{ xs: 12, desktop: 4 }}>
            <B4CTextfield label="Codigo postal" />
          </Grid>
          <Grid size={{ xs: 12, desktop: 4 }}>
            <B4CTextfield label="Estado" />
          </Grid>
          <Grid size={{ xs: 12, desktop: 4 }}>
            <B4CTextfield label="Ciudad" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: "1", marginBottom: "2rem" }}>
        <Grid
          container
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Grid size={{ xs: 12 }}>
            <B4CTextfield label="Correo electronico" />
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={8}
        sx={{
          border: `1px solid #E2E4E5`,
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Grid size={{ xs: 12 }}>
          <B4CTextfield label="Contrase;a" isPassword />
          <Button
            startIcon={<EditFieldIcons />}
            variant="contained"
            color="primary"
            onClick={handleOpenModalPassword}
            sx={{
              backgroundColor: "white",
              boxShadow: "none",
              textTransform: "none",
              color: "#2F80ED",
              "&:hover": {
                backgroundColor: "white",
                boxShadow: "none",
                fontWeight: "600",
              },
            }}
          >
            Cambiar contraseña
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
