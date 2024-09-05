/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { B4CTable } from "@/components/BigElements/B4CTable";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
  GridRowParams,
} from "@mui/x-data-grid";
import React, { useState } from "react";
import { PageLayout } from "@/modules/admin/PageLayout";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { EditClientModal } from "./EditClientModal";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";
export const ClientsPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedClient(params.row);
    setOpen(true);
  };

  const columns: GridColDef[] = [
    {
      field: "select",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"SELECT"}</Typography>
      ),
      width: 100,
      renderCell: (params: GridCellParams) => {
        return <B4CCheckbox />;
      },
    },
    {
      field: "name",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"NOMBRE"}</Typography>
      ),
      width: 200,
    },
    {
      field: "status",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ESTATUS"}</Typography>
      ),
      width: 150,
    },
    {
      field: "email",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">
          {"CORREO ELECTRÓNICO"}
        </Typography>
      ),
      width: 250,
    },

    {
      field: "phone",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">
          {"NÚMERO DE TELÉFONO"}
        </Typography>
      ),
      width: 200,
    },
    {
      field: "activity",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ACTIVIDAD"}</Typography>
      ),
      width: 100,
    },
  ];

  const data = [
    {
      id: "00001",
      name: "Braulio Estrada Alfonso",
      status: "Activo",
      email: "summerdreams87@email.com",
      phone: "123456789",
      activity: "2 days ago",
    },
    {
      id: "00002",
      name: "Braulio Estrada Alfonso",
      status: "Activo",
      email: "summerdreams87@email.com",
      phone: "123456789",
      activity: "2 days ago",
    },
    {
      id: "00003",
      name: "Braulio Estrada Alfonso",
      status: "Activo",
      email: "summerdreams87@email.com",
      phone: "123456789",
      activity: "2 days ago",
    },
  ];
  return (
    <PageLayout title="Clientes">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <FormControl sx={{ minWidth: 200, mr: 2 }}>
            <InputLabel id="status-select-label">
              Estatus de Servicio
            </InputLabel>
            <Select
              labelId="status-select-label"
              label="Acciones en lote"
              defaultValue=""
              input={
                <OutlinedInput
                  notched
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { borderWidth: 0 },
                  }}
                />
              }
            >
              <MenuItem value="Eliminar inactivos">Eliminar inactivos</MenuItem>
              <MenuItem value="Eliminar">Eliminar</MenuItem>
              {/* Agrega más opciones según sea necesario */}
            </Select>
          </FormControl>
          <B4CButton label="Aplicar" size={Size.Small} />
        </Box>
        <Box
          sx={{
            margin: "auto",
            flexWrap: "wrap",
            display: "flex",
            width: "100%",
          }}
        >
          <B4CTable
            dataTable={data}
            columns={columns}
            onRowClick={handleRowClick}
          />
        </Box>
      </Box>
      <EditClientModal open={open} onClose={() => setOpen(false)} />
    </PageLayout>
  );
};
