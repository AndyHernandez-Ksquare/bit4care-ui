import { colorPalette } from "@/style/partials/colorPalette";
import { color } from "@/ts/types/colors";
import { Badge } from "@mui/material";
import React, { ReactNode } from "react";

interface IB4CBadgeProps {
  badgeContent: ReactNode;
  children: ReactNode;
  color?: color;
}

export const B4CBadge = ({ badgeContent, children, color }: IB4CBadgeProps) => {
  return (
    <Badge
      overlap="circular"
      badgeContent={badgeContent}
      color={color}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      {children}
    </Badge>
  );
};
