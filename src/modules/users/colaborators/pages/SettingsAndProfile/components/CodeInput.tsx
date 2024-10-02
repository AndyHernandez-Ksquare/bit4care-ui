import { EditFieldIcons } from "@/assets/svgIcons/editIcons/EditFieldIcons";
import { RepeatIcon } from "@/assets/svgIcons/ReturnIcon/RepeatIcon";
import {
  Button,
  Grid2 as Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

interface CodeInputProps {
  countryCode: string;
  phoneNumber: string;
}

export const CodeInput = ({ countryCode, phoneNumber }: CodeInputProps) => {
  return (
    <Fragment>
      <Grid
        container
        spacing={12}
        sx={{
          marginLeft: 0,
          border: `1px solid #BDBDBD`,
          borderRadius: "8px",
          width: "100%",
          overflow: "hidden",
          maxHeight: "80px",
        }}
      >
        <Grid size={{ xs: 12 }}>
          <Typography>{`${countryCode}-${phoneNumber}`}</Typography>
        </Grid>
        <Grid size={{ xs: 12, desktop: 11 }}>
          <Typography>{`Numero aun no confirmado`}</Typography>
        </Grid>
        <Grid size={{ xs: 12, desktop: 1 }}>
          <IconButton>
            <EditFieldIcons />
          </IconButton>
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
        <Grid size={{ xs: 12, desktop: 10 }}>
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
        <Grid size={{ xs: 12, desktop: 2 }}>
          <Button
            startIcon={<RepeatIcon />}
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
            Enviar otra vez
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
