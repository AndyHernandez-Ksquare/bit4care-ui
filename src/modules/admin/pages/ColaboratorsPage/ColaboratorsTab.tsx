import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Typography } from "@mui/material";
import React from "react";

interface IColaboratorsTab {
  active?: boolean;
  label: string;
  onClick?: () => void;
}

export const ColaboratorsTab = ({
  active,
  label,
  onClick,
}: IColaboratorsTab) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        paddingInline: spacings.spacing2,
        paddingBlock: spacings.spacing1,
        borderRadius: "8px",
        backgroundColor: active ? colorPalette.secondary : colorPalette.white,
        color: active ? colorPalette.info : colorPalette.black1,
      }}
    >
      <Typography variant="body-small-bold">{label}</Typography>
    </Box>
  );
};
