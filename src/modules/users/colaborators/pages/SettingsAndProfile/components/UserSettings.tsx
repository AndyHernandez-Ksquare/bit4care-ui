import { Photos } from "@/assets/svgIcons/photos/photos";
import { B4CTextfield } from "@/components/B4CTextfield";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { Fragment } from "react";

export const UserSettings = () => {
  return (
    <Fragment>
      <Grid
        container
        xs={12}
        display={"flex"}
        flexDirection={"column"}
        sx={{ marginBottom: "2rem" }}
      >
        <IconButton
          sx={{
            backgroundColor: "#ECECEE",
            width: "80px",
            height: "80px",
          }}
        >
          <Photos />
        </IconButton>
        <Typography variant="body-small-bold">Cambiar foto</Typography>
      </Grid>
      <Box sx={{ flexGrow: "1", marginBottom: "2rem" }}>
        <Grid
          container
          xs={12}
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Grid item xs={12}>
            <B4CTextfield label="Numero de telefono" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: "1", marginBottom: "2rem" }}>
        <Grid
          container
          xs={12}
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Grid item xs={12}>
            <B4CTextfield label="Nombre(s)" />
          </Grid>
          <Grid item xs={12} desktop={6}>
            <B4CTextfield label="Apellido materno" />
          </Grid>
          <Grid item xs={12} desktop={6}>
            <B4CTextfield label="Apellido paterno" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: "1", marginBottom: "2rem" }}>
        <Grid
          container
          xs={12}
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
          justifyContent={"center"}
        >
          <Grid item xs={12}>
            <B4CTextfield label="Direccion" />
          </Grid>
          <Grid item xs={12} desktop={4}>
            <B4CTextfield label="Codigo postal" />
          </Grid>
          <Grid item xs={12} desktop={4}>
            <B4CTextfield label="Estado" />
          </Grid>
          <Grid item xs={12} desktop={4}>
            <B4CTextfield label="Ciudad" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: "1", marginBottom: "2rem" }}>
        <Grid
          container
          xs={12}
          spacing={8}
          sx={{
            border: `1px solid #E2E4E5`,
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Grid item xs={12}>
            <B4CTextfield label="Correo electronico" />
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        xs={12}
        spacing={8}
        sx={{
          border: `1px solid #E2E4E5`,
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Grid item xs={12}>
          <B4CTextfield label="Contrase;a" isPassword />
        </Grid>
      </Grid>
    </Fragment>
  );
};
