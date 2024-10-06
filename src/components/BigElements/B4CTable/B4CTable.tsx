import { ChangeEvent } from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridColDef,
  GridColumnVisibilityModel,
  GridRowParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { colorPalette } from "@/style/partials/colorPalette";

export interface IB4CTableProps {
  dataTable: GridValidRowModel[];
  columns: GridColDef[];
  columnVisibilityModel?: GridColumnVisibilityModel | undefined;
  onRowClick?: (params: GridRowParams) => void;
}

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <>
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        renderItem={(props2) => <PaginationItem {...props2} />}
        onChange={(event: ChangeEvent<unknown>, value: number) =>
          apiRef.current.setPage(value - 1)
        }
      />
    </>
  );
}

export const B4CTable = ({
  dataTable,
  columns,
  columnVisibilityModel,
  onRowClick,
}: IB4CTableProps) => {
  return (
    <DataGrid
      onRowClick={onRowClick}
      autoHeight
      rows={dataTable}
      columns={columns}
      columnVisibilityModel={columnVisibilityModel}
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      slots={{
        pagination: CustomPagination,
      }}
      sx={{
        border: "none",
        "& .even": {
          backgroundColor: colorPalette.white,
        },
        "& .odd": {
          backgroundColor: `rgba(224, 224, 224, 0.4)`,
        },
      }}
    />
  );
};
