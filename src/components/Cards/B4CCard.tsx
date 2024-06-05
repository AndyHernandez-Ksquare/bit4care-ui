import { Box, Typography } from "@mui/material";
import React from "react";
import { B4CButton } from "../B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { spacingScale, spacings } from "@/style/partials/spacings";
import Image from "next/image";

interface IB4CCardProps {
  title: string;
  subtitle?: string;
  content: string;
  header?: string;
  buttonLabel?: string;
  outlined?: boolean;
  imageSrc?: string;
  hasImage?: boolean;
  hasButton?: boolean;
  theme?: "primary" | "negative" | "blue" | "backgroundImage";
}

export const B4CCard = ({
  header,
  buttonLabel,
  content,
  outlined,
  hasButton,
  hasImage,
  imageSrc,
  subtitle,
  title,
  theme = "primary", // Default value is "primary"
}: IB4CCardProps) => {
  const textColors = {
    primary: {
      title: colorPalette.primary,
      content: colorPalette.grey1,
      backgroundColor: colorPalette.white,
      border: colorPalette.primary,
    },
    negative: {
      title: colorPalette.white,
      content: colorPalette.white,
      backgroundColor: colorPalette.primary,
      border: colorPalette.white,
    },
    blue: {
      title: colorPalette.primary,
      content: colorPalette.primary,
      backgroundColor: colorPalette.white,
      border: colorPalette.primary,
    },
    backgroundImage: {
      title: colorPalette.white,
      content: colorPalette.white,
      backgroundColor: imageSrc,
      border: colorPalette.white,
    },
  };

  const {
    title: titleColor,
    content: contentColor,
    backgroundColor: backgroundColor,
    border: borderColor,
  } = textColors[theme];
  return (
    <Box
      sx={{
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        boxShadow: 24,
        maxWidth: "325px",
        overflow: "hidden",
        border: outlined ? `1px solid ${borderColor}` : "none",
        backgroundImage:
          theme === "backgroundImage" ? `url(${imageSrc})` : undefined,
        backgroundColor: backgroundColor,
      }}
    >
      {theme === "backgroundImage" && <Box height={297}></Box>}
      {hasImage && (
        <Image
          src={imageSrc ? imageSrc : ""}
          alt={`image-${title}`}
          height={297}
          width={325}
        />
      )}
      {header && (
        <Box
          width="100%"
          borderBottom={`1px solid ${borderColor}`}
          sx={{
            paddingBlock: spacings.spacing3,
            paddingInline: spacings.spacing2,
          }}
        >
          <Typography variant="body-normal" sx={{ color: titleColor }}>
            {header}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          paddingInline: spacings.spacing2,
          paddingBlock: spacings.spacing2,
          display: "flex",
          flexDirection: "column",
          gap: spacings.spacing2,
        }}
      >
        <Typography variant="h5" sx={{ color: titleColor }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body-normal" sx={{ color: colorPalette.grey4 }}>
            {subtitle}
          </Typography>
        )}
        <Typography variant="body-normal" sx={{ color: contentColor }}>
          {content}
        </Typography>
        {hasButton && buttonLabel && <B4CButton label={buttonLabel} />}
      </Box>
    </Box>
  );
};
