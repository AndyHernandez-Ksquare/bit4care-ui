import { InputBase, Paper } from "@mui/material";
import React from "react";

export const B4CSearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        backgroundColor: `#F5F6FA`,
        display: "flex",
        alignItems: "center",
        maxHeight: "34.74px",
        boxShadow: `none`,
        width: "37%",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};
