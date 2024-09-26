import { colorPalette } from "@/style/partials/colorPalette";
import { Link, Typography } from "@mui/material";
import { Fragment } from "react";

export const ForgotPassword = () => {
  return (
    <Fragment>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          width: "70%",
          marginInline: "auto",
          color: "#666666",
        }}
      >
        {
          "Contacta a tu administrador o desarrollador para que pueda proporcionarte nuevas credenciales."
        }
      </Typography>
      <Link
        href={"/admin/login/"}
        style={{
          textDecoration: "none",
          color: "inherit",
          backgroundColor: colorPalette.primary,
          borderRadius: "8px",
          display: "flex",
          paddingBlock: "20px",
        }}
      >
        <Typography
          sx={{ margin: "auto", color: colorPalette.white }}
          variant="body-large-bold"
        >
          {"Regresar al inicio de sesión"}
        </Typography>
      </Link>
    </Fragment>
  );
};
