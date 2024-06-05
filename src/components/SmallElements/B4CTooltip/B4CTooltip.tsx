import { colorPalette } from "@/style/partials/colorPalette";
import { Popper, Tooltip } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";

interface IB4CTooltipProps {
  label: ReactNode;
  children: ReactElement<any, any>;
}

export const B4CTooltip = ({ children, label }: IB4CTooltipProps) => {
  return (
    <Tooltip title={label} arrow>
      {children}
    </Tooltip>
  );
};
