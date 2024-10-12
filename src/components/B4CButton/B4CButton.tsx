import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { B4CButtonProps } from "@/ts/types/components/B4CButton.type";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ReactNode } from "react";

export const B4CButton = ({
  variant = "primary",
  disabled,
  label,
  fullWidth,
  isSubmit,
  size = Size.Normal,
  isLoading,
  startIcon,
  sx,
  onClick,
  onSubmit,
}: B4CButtonProps) => {
  const sizes = {
    small: {
      paddingBlock: `14px`,
      paddingInline: `${14 * 5}px`,
    },
    normal: {
      paddingBlock: `16px`,
      paddingInline: `${16 * 5}px`,
    },
    medium: {
      paddingBlock: `18px`,
      paddingInline: `${18 * 5}px`,
    },
    large: {
      paddingBlock: `20px`,
      paddingInline: `${20 * 5}px`,
    },
  };

  const renderIcon = (icon: ReactNode) => {
    if (icon) {
      return <Box sx={{ display: "flex", marginRight: "12px" }}>{icon}</Box>;
    }
    return null;
  };
  return (
    <Button
      type={isSubmit ? "submit" : "button"}
      variant={variant}
      startIcon={renderIcon(startIcon)}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
      fullWidth={fullWidth}
      sx={{
        paddingInline: sizes[size].paddingInline,
        paddingBlock: sizes[size].paddingBlock,
        borderRadius: "8px",
        ...sx,
        ":hover": {
          opacity: 0.8,
        },
      }}
    >
      {isLoading ? (
        <CircularProgress size={24} sx={{ color: colorPalette.white }} /> // Spinner en vez del label
      ) : (
        <Typography
          variant={`body-${size}-bold`}
          sx={{
            textTransform: "none",
            opacity: 0.8,
            flexWrap: "wrap",
          }}
        >
          {label}
        </Typography>
      )}
    </Button>
  );
};
