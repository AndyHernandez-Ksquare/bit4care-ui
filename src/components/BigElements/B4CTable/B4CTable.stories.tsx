import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import { B4CTable } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";

const meta = {
  title: "B4CComponents/BigElements/B4CTable",
  component: B4CTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CTable>;

const columns: GridColDef[] = [
  {
    field: "id",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderHeader: (_params: GridColumnHeaderParams) => (
      <Typography variant="body-normal">{"ID"}</Typography>
    ),
    width: 150,
  },
  {
    field: "name",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderHeader: (_params: GridColumnHeaderParams) => (
      <Typography variant="body-normal">{"Nombre"}</Typography>
    ),
    width: 150,
  },
  {
    field: "lastName",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderHeader: (_params: GridColumnHeaderParams) => (
      <Typography variant="body-normal">{"Apellido"}</Typography>
    ),
    width: 150,
  },
  {
    field: "userName",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderHeader: (_params: GridColumnHeaderParams) => (
      <Typography variant="body-normal">{"Usuario"}</Typography>
    ),
    width: 150,
  },

  {
    field: "actions",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    hideable: true,
    renderHeader: (_params: GridColumnHeaderParams) => (
      <Typography variant="body-normal">{"Acciones"}</Typography>
    ),
    width: 150,
    renderCell: (params: GridCellParams) => (
      <Box
        display="flex"
        alignItems="center"
        sx={{ width: "100px", paddingBlock: "16px" }}
      >
        <Typography variant="body-normal">{"Acciones"}</Typography>
      </Box>
    ),
  },
];

const data = [
  {
    id: 1,
    name: "Braulio",
    lastName: "Estrada Alfonso",
    userName: "Braulio1195",
  },
  {
    id: 2,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 3,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 4,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 5,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 6,
    name: "Braulio",
    lastName: "Estrada Alfonso",
    userName: "Braulio1195",
  },
  {
    id: 7,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 8,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 9,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 10,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
  {
    id: 11,
    name: "Pedro",
    lastName: "Perez",
    userName: "Pedro1195",
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    columns: columns,
    dataTable: data,
  },
};
