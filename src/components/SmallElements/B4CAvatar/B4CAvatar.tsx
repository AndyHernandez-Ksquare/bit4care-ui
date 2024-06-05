import { colorPalette } from "@/style/partials/colorPalette";
import { Avatar, Stack } from "@mui/material";
import React from "react";

interface IB4CAvatar {
  alt?: string;
  imageLink?: string;
  width?: number;
  height?: number;
}

export const B4CAvatar = ({
  alt,
  imageLink,
  width = 64,
  height = 64,
}: IB4CAvatar) => {
  return (
    <Avatar
      alt={alt}
      src={imageLink}
      sx={{
        bgcolor: colorPalette.primary,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};
