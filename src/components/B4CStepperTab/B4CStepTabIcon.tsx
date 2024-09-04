import { colorPalette } from "@/style/partials/colorPalette";
import Box from "@mui/material/Box/Box";
import { StepIconProps } from "@mui/material/StepIcon";
import React from "react";

export const B4CStepTabIcon = ({ active, completed }: StepIconProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "4px",
        backgroundColor:
          active || completed
            ? `${colorPalette.primary}`
            : `${colorPalette.grey5}`,
      }}
    />
  );
};
