import { B4CDefinitionComponentProps } from "@/ts/types/B4CComponents.type";
import { Box, Typography } from "@mui/material";
import React from "react";

export const B4CDefinitionComponent = ({
  label,
  children,
}: B4CDefinitionComponentProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
      <Typography variant="body-small">{label}</Typography>
      {children}
    </Box>
  );
};
