import { Photos } from "@/assets/svgIcons/photos/photos";
import { B4CTextfield } from "@/components/B4CTextfield";
import { PageLayout } from "@/modules/admin/PageLayout";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export const Settings = () => {
  return (
    <PageLayout title="Ajustes de cuenta">
      <Box
        sx={{
          width: "95%",
          border: "1px solid #B9B9B9",
          padding: "4rem",
          borderRadius: "8px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            sx={{ marginBottom: "2rem" }}
          >
            <IconButton
              sx={{
                marginInline: "auto",
                backgroundColor: "#ECECEE",
                width: "80px",
                height: "80px",
              }}
            >
              <Photos />
            </IconButton>
            <Typography variant="body-small-bold" sx={{ marginInline: "auto" }}>
              Cambiar foto
            </Typography>
          </Grid>
          <Grid
            item
            desktop={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              paddingInline: "1rem",
            }}
          >
            <B4CTextfield label="Nombre de administrador" />
          </Grid>
          <Grid
            item
            desktop={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              paddingInline: "1rem",
            }}
          >
            <B4CTextfield label="Contraseña" isPassword />
            <B4CTextfield label="Repetir contraseña" isPassword />
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
};
