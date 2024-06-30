import { Grid, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";

interface CodeInputProps {
  countryCode: string;
  phoneNumber: string;
}

export const CodeInput = ({ countryCode, phoneNumber }: CodeInputProps) => {
  return (
    <Fragment>
      <Grid
        container
        spacing={16}
        sx={{
          marginLeft: 0,
          maxWidth: "100%",
          border: `1px solid #BDBDBD`,
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Typography>{`${countryCode}-${phoneNumber}`}</Typography>
        </Grid>
        <Grid item xs={12} desktop={11} sx={{ display: "flex" }}>
          <Typography>{`Numero aun no confirmado`}</Typography>
        </Grid>
        <Grid item xs={12} desktop={1} sx={{ display: "flex" }}>
          <Typography>{`Editar`}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          marginLeft: 0,
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Grid item xs={12} desktop={10}>
          <TextField
            fullWidth
            variant="outlined"
            label="Código de confirmación"
            sx={{ marginBlock: "auto" }}
          />
          <Typography>
            Confirma tu número de teléfono con el código del mensaje de texto
            (SMS)
          </Typography>
        </Grid>
        <Grid item xs={12} desktop={2}>
          <Typography>Enviar otra vez</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};
