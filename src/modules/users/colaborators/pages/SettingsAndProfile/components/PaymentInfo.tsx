/* eslint-disable @typescript-eslint/no-unused-vars */
import { B4CTable } from "@/components/BigElements/B4CTable";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { Box, Typography } from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import { color } from "@/ts/types/colors";
import React, { Fragment } from "react";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";

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
  return (
    <Box paddingTop="2rem" sx={{ width: "100%" }}>
      <B4CButton label="Agregar cuenta a depositar" size={Size.Small} />
      <B4CTable dataTable={data} columns={columns} />
    </Box>
  );
};
