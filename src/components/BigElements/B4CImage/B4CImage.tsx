"use client";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface IB4CImageProps {
  alt: string;
  src: string;
  height?: number;
  width?: number;
  imageTitle?: string;
}

export const B4CImage = ({
  alt,
  src,
  height,
  width,
  imageTitle,
}: IB4CImageProps) => {
  const [error, setError] = useState(false);
  return (
    <Box display="flex" flexDirection={"column"} gap={"4px"}>
      {!error ? (
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          style={{ borderRadius: "8px" }}
          onError={() => setError(true)}
        />
      ) : (
        <Box
          display="flex"
          sx={{
            backgroundColor: colorPalette.grey4,
            width: width,
            height: height,
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ margin: "auto", color: colorPalette.grey3 }}
          >
            No Image
          </Typography>
        </Box>
      )}
      {imageTitle && (
        <Typography variant="body-normal-bold">{imageTitle}</Typography>
      )}
    </Box>
  );
};
