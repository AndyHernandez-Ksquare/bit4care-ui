import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import Box from "@mui/material/Box/Box";
import { StepIconProps } from "@mui/material/StepIcon";
import React from "react";

export const B4CStepIcon = ({ active, completed }: StepIconProps) => {
  return (
    <Box
      sx={{
        width: spacings.spacing2,
        height: spacings.spacing2,
        margin: [10, 10, 0, 10],
        borderRadius: spacings.spacing1,
        backgroundColor:
          active || completed
            ? `${colorPalette.primary}`
            : `${colorPalette.white}`,
        border:
          active || completed
            ? `1px solid ${colorPalette.primary}`
            : `1px solid ${colorPalette.grey3}`,
      }}
    />
  );
};
