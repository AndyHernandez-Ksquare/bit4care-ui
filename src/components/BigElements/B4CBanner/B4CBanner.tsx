import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface IB4CBannerProps {
  children: ReactNode;
}

export const B4CBanner = ({ children }: IB4CBannerProps) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        backgroundColor: colorPalette.primary,
        color: colorPalette.white,
        paddingInline: spacings.spacing4,
        paddingBlock: spacings.spacing2,
        maxWidth: "582px",
      }}
    >
      {children}
    </Box>
  );
};
