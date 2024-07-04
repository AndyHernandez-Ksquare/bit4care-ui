import { Grid, TextField } from "@mui/material";
import React from "react";

export const NewPasswordInput = () => {
  return (
    <Grid
      container
      spacing={16}
      sx={{
        marginLeft: 0,
        maxWidth: "100%",
        border: `1px solid #BDBDBD`,
        borderRadius: "8px",
        p: "32px",
        width: "100%",
      }}
    >
      <Grid item xs={12} desktop={10} sx={{ display: "flex" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Introduce tu antigua contraseña"
          sx={{ marginBlock: "auto" }}
        />
      </Grid>
      <Grid item xs={12} desktop={10} sx={{ display: "flex" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Confirma tu nueva contraseña"
          sx={{ marginBlock: "auto" }}
        />
      </Grid>
    </Grid>
  );
};
