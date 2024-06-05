import React, { Fragment } from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  useGridApiContext,
  useGridSelector,
  GridColDef,
  GridColumnVisibilityModel,
  GridCellParams,
  GridRowParams,
} from "@mui/x-data-grid";
import { Box, Pagination, Skeleton, Typography } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { colorPalette } from "@/style/partials/colorPalette";

export interface IB4CTableProps {
  dataTable: any[];
  columns: GridColDef[];
  columnVisibilityModel?: GridColumnVisibilityModel | undefined;
  onRowClick?: (params: GridRowParams) => void;
}

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Fragment>
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        // @ts-expect-error
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
          apiRef.current.setPage(value - 1)
        }
      />
    </Fragment>
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
