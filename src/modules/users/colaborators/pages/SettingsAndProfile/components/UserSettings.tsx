import { B4CTextfield } from "@/components/B4CTextfield";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid2 as Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ChangeMobileNum } from "./ChangeMobileNum";
import { ChangePassword } from "./ChangePassword";
import { EditFieldIcons } from "@/assets/svgIcons/editIcons/EditFieldIcons";
import { B4CDragPhotoItem } from "@/components/B4CDragPhotoItem";
import { useFormik } from "formik";
import { useGetSelfCareer } from "@/context/api/hooks/carer/useGetSelfCareer";
import { useUpdateCarerProfile } from "@/context/api/hooks/carer/useUpdateCarerProfile";
import { UpdateCarerProfileDto } from "@/ts/types/api/carer/UpdateCarerProfileDto.type";
import { B4CButton } from "@/components/B4CButton";

interface FormValues {
  phone: string;
  name: string;
  address: string;
  postal_code: string;
  state: string;
  city: string;
  email: string;
}

export const UserSettings = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalPasswordOpen, setModalPasswordOpen] = useState<boolean>(false);

  const { data: profile, loading, error } = useGetSelfCareer();

  // ✏️ Hook para hacer el PATCH
  const {
    updateProfile,
    loading: updating,
    error: updateError,
  } = useUpdateCarerProfile();

  const formik = useFormik<FormValues>({
    initialValues: {
      phone: profile?.User.phone ?? "",
      name: profile?.User.name ?? "",
      address: "",
      postal_code: profile?.postal_code ?? "",
      state: profile?.state ?? "",
      city: "",
      email: profile?.User.email ?? "",
    },
    enableReinitialize: true, // repuebla cuando profile cambie
    onSubmit: async (values, { setStatus }) => {
      setStatus(null);
      const body: UpdateCarerProfileDto = Object.entries(values).reduce(
        (acc, [key, val]) => {
          // si val === "" lo dejamos undefined
          (acc as any)[key] = val === "" ? undefined : val;
          return acc;
        },
        {} as UpdateCarerProfileDto,
      );
      const updated = await updateProfile(body);
      if (updated) {
        setStatus({ success: "Perfil actualizado correctamente." });
      } else {
        setStatus({ success: undefined });
      }
    },
  });

  useEffect(() => {
    console.log("profile", profile);
  }, [profile]);

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

  // cuando profile llegue, Formik re-inicializa porque enableReinitialize=true
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
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
            <B4CTextfield
              name="phone"
              label="Numero de telefono"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
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
                  mt: 8,
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
            <B4CTextfield label="Nombre completo" />
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
            <B4CTextfield
              name="postal_code"
              label="Codigo postal"
              value={formik.values.postal_code}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, desktop: 4 }}>
            <B4CTextfield
              name="state"
              label="Estado"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, desktop: 4 }}>
            <B4CTextfield label="Ciudad" onChange={formik.handleChange} />
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
        {/* Botón de submit */}
        <Box sx={{ textAlign: "right", mt: 16 }}>
          <B4CButton
            isSubmit
            variant="primary"
            disabled={updating}
            isLoading={updating}
            label={updating ? "...Guardando" : "Guardar cambios"}
          />
        </Box>
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
              mt: 8,
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
