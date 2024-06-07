/* eslint-disable @typescript-eslint/no-unused-vars */
import { B4CTable } from "@/components/BigElements/B4CTable";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
  GridRowParams,
} from "@mui/x-data-grid";
import React, { useState } from "react";
import { color } from "@/ts/types/colors";
import { PageLayout } from "@/modules/admin/PageLayout";
import { FilterIcon } from "@/assets/svgIcons/filterIcon/FilterIcon";
import { ReturnIcon } from "@/assets/svgIcons/ReturnIcon/ReturnIcon";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import { ServiceDetailModalPage } from "./ServiceDetailModalPage";

export const ServicePage = () => {
  // const [value, setValue] = useState<Dayjs | null>(dayjs(null));
  const [openModal, setOpenModal] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedService(params.row);
    setOpenModal(true);
  };

  const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    // "& .MuiInputAdornment-root": {
    //   display: "none",
    // },
  }));

  const columns: GridColDef[] = [
    {
      field: "id",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ID"}</Typography>
      ),
      width: 80,
    },
    {
      field: "name",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"NOMBRE"}</Typography>
      ),
      width: 150,
    },
    {
      field: "address",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"DIRECCIÓN"}</Typography>
      ),
      width: 300,
    },
    {
      field: "dates",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"FECHAS"}</Typography>
      ),
      width: 250,
    },

    {
      field: "cost",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"COSTO"}</Typography>
      ),
      width: 150,
    },
    {
      field: "status",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ESTATUS"}</Typography>
      ),
      width: 150,
      renderCell: (params: GridCellParams) => {
        const status = params.value as string;
        let color: color = "primary";
        if (status === "pagado") {
          color = "success";
        } else if (status === "por pagar") {
          color = "warning";
        }
        return <B4CTag label={status} color={color} />;
      },
    },
  ];

  const data = [
    {
      id: "00001",
      name: "Braulio",
      address:
        "Calle Juárez #123, Colonia Centro, Ciudad de México, CDMX, México.",
      dates: "13.05.2025 - 15.05.2025",
      cost: "$8000",
      status: "pagado",
    },
    {
      id: "00002",
      name: "Pedro Pérez",
      address:
        "Calle Juárez #123, Colonia Centro, Ciudad de México, CDMX, México.",
      dates: "13.05.2025 - 15.05.2025",
      cost: "$8000",
      status: "por pagar",
    },
  ];
  return (
    <PageLayout title="Servicios">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",

          gap: 32,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #e0e0e0",
            borderRadius: 4,
            backgroundColor: "#F9F9FB",
            paddingBlock: "0.6rem",
          }}
        >
          <Box
            sx={{
              borderRight: "1px solid #e0e0e0",
              height: "100%",
              width: "10%",
              display: "flex",
              paddingBlock: "0.6rem",
              marginRight: "1rem",
            }}
          >
            <Box sx={{ margin: "auto" }}>
              <FilterIcon />
            </Box>
          </Box>
          <Box
            sx={{
              borderRight: "1px solid #e0e0e0",
              height: "100%",
              width: "10%",
              display: "flex",
              marginRight: "1rem",
              alignItems: "center",
              paddingBlock: "0.6rem",
            }}
          >
            <Typography variant="body-small-bold" sx={{ mr: 2 }}>
              Filtrar por
            </Typography>
          </Box>
          <FormControl sx={{ minWidth: 120, mr: 2, border: "none" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <CustomDatePicker label="Fecha" name="startDate" />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>
          <FormControl sx={{ minWidth: 200, mr: 2 }}>
            <InputLabel id="status-select-label">
              Estatus de Servicio
            </InputLabel>
            <Select
              labelId="status-select-label"
              label="Estatus de Servicio"
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
              <MenuItem value="Pagado">Pagado</MenuItem>
              <MenuItem value="Por pagar">Por pagar</MenuItem>
              {/* Agrega más opciones según sea necesario */}
            </Select>
          </FormControl>
          <Box
            sx={{
              borderLeft: "1px solid #e0e0e0",
              height: "100%",
              width: "50%",
              display: "flex",
              paddingBlock: "0.6rem",
            }}
          >
            <Button
              variant="text"
              color="secondary"
              sx={{ color: "#EA0234", fontWeight: 600, textTransform: "none" }}
            >
              <Box sx={{ paddingRight: "0.5rem" }}>
                <ReturnIcon />
              </Box>
              Reiniciar filtro
            </Button>
          </Box>
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
      {selectedService && (
        <ServiceDetailModalPage
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </PageLayout>
  );
};
