/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { B4CTable } from "@/components/BigElements/B4CTable";
import {
  Box,
  CircularProgress,
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
import { PageLayout } from "@/modules/admin/PageLayout";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { EditClientModal } from "./EditClientModal";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";
import { colorPalette } from "@/style/partials/colorPalette";
import { useAdminClientList } from "@/context/api/hooks/client/useAdminClientList";
import { AdminClientList } from "@/ts/types/api/client/AdminClientList.type";

// formateadores
const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
const dateTimeFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export const ClientsPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<{
    id: string;
    name: string;
    status: string;
    email: string;
    phone: string;
    activity: string;
    __raw: AdminClientList;
  }>({
    id: "",
    name: "",
    status: "",
    email: "",
    phone: "",
    activity: "",
    __raw: {
      id: 0,
      is_active: false,
      User: {
        id: 0,
        name: "",
        email: "",
        phone: "",
        last_login: new Date(),
      },
    },
  } as any); // inicializamos con un objeto vacío

  const handleRowClick = (params: GridRowParams) => {
    setSelectedClient(params.row);
    setOpen(true);
  };

  // ▶️ aquí consumimos el hook
  const { data: clients, loading, error, refetch } = useAdminClientList();

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
      renderCell: (params: GridCellParams) => {
        return (
          <Typography
            variant="body-small-bold"
            sx={{ cursor: "pointer", color: colorPalette.primary }}
            onClick={() => handleRowClick({ row: params.row } as GridRowParams)}
          >
            {params.value as string}
          </Typography>
        );
      },
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

  // ▶️ parseamos CarerProfile[] a la forma que necesita la tabla
  const rows = (clients ?? []).map((profile) => ({
    id: profile.id.toString().padStart(5, "0"),
    name: profile.User.name,
    status: profile.is_active ? "Activo" : "Inactivo",
    email: profile.User.email,
    phone: profile.User.phone,
    activity: dateTimeFormatter.format(new Date(profile.User.last_login)),
    // guardamos también todo el profile para el modal
    __raw: profile,
  }));

  return (
    <PageLayout title="Clientes">
      {/* manejo de loading y error */}
      {loading && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}

      {!loading && !error && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ minWidth: 200, mr: 2 }}>
              <InputLabel id="batch-actions-label">Acciones en lote</InputLabel>
              <Select
                labelId="batch-actions-label"
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
                <MenuItem value="Eliminar inactivos">
                  Eliminar inactivos
                </MenuItem>
                <MenuItem value="Eliminar">Eliminar</MenuItem>
              </Select>
            </FormControl>
            <B4CButton label="Aplicar" size={Size.Small} onClick={refetch} />
          </Box>

          <Box
            sx={{
              flexWrap: "wrap",
              display: "flex",
              width: "100%",
            }}
          >
            <B4CTable dataTable={rows} columns={columns} />
          </Box>
        </Box>
      )}

      <EditClientModal
        open={open}
        onClose={() => setOpen(false)}
        client={selectedClient}
      />
    </PageLayout>
  );
};
