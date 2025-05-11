import { B4CTable } from "@/components/BigElements/B4CTable";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { Box, Button, Icon, Typography } from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import { color } from "@/ts/types/shared/colors";

import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";
import { colorPalette } from "@/style/partials/colorPalette";
import { useCreateConnectedAccount } from "@/context/api/hooks/stripe/useCreateConnectedAccount";
import { useEffect } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const PaymentInfo = () => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ID"}</Typography>
      ),
      width: 200,
    },
    {
      field: "status",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ESTATUS"}</Typography>
      ),
      width: 200,
      renderCell: (params: GridCellParams) => {
        const status = params.value as string;
        let color: color = "primary";
        if (status === "pagado") {
          color = "success";
        } else if (status === "por pagar") {
          color = "warning";
        } else if (status === "declinado") {
          color = "error";
        }
        return <B4CTag label={status} color={color} />;
      },
    },
    {
      field: "ammount",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"Cantidad"}</Typography>
      ),
      width: 200,
    },
    {
      field: "paymentMethod",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"Metodo"}</Typography>
      ),
      width: 250,
    },

    {
      field: "date",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"Fecha"}</Typography>
      ),
      width: 200,
    },
  ];
  const data = [
    {
      id: "06c1774-7f3d-46ad...90a8",
      status: "pagado",
      ammount: "19,000 MXN",
      paymentMethod: "13.05.2025 - 15.05.2025",
      date: new Date("Jul 12 2011"),
    },
  ];

  const { accountLink, createAccount, loading, error } =
    useCreateConnectedAccount();

  // Manejo del click en el botón
  const handleButtonClick = async () => {
    if (loading) return; // Evitar hacer clic mientras se está cargando

    // Llamar al hook para crear la cuenta conectada
    await createAccount();
  };

  // Redirigir automáticamente cuando `accountLink` cambie
  useEffect(() => {
    if (accountLink) {
      console.log("Redirecting to:", accountLink);
      window.open(accountLink, "_blank"); // Redirige a la URL de Stripe
    }
  }, [accountLink]); // Este efecto se ejecutará cada vez que accountLink cambie

  return (
    <Box
      paddingTop="2rem"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Button
        variant="outlined"
        onClick={handleButtonClick}
        disabled={loading} // Deshabilita el botón mientras se está cargando
        sx={{
          width: { xs: "100%", desktop: "300px" },
          display: "flex",
          borderRadius: "8px",
          backgroundColor: "#fff",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://images.icon-icons.com/2699/PNG/512/stripe_logo_icon_167962.png"
          alt="Stripe logo"
          style={{ width: "34px", height: "34px" }}
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <Typography variant="button" sx={{ textTransform: "none" }}>
            Conectar cuenta de Stripe
          </Typography>
          <Typography
            variant="body-small"
            sx={{ color: colorPalette.grey1, textTransform: "none" }}
          >
            https://stripe.com
          </Typography>
          {/* Icono openInNew de Material Icons */}
        </Box>
        <OpenInNewIcon />
      </Button>
      <B4CTable dataTable={data} columns={columns} />
    </Box>
  );
};
