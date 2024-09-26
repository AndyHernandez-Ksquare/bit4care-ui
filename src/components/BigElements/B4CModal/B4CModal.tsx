import { spacings } from "@/style/partials/spacings";
import { Box, Dialog } from "@mui/material";
import React, { ReactNode } from "react";

interface B4CModalProps {
  children: ReactNode;
  open: boolean;
  bgColor?: string;
  className?: string;
  onClose?: () => void;
}

export const B4CModal = ({
  children,
  open,
  bgColor,
  className,
  onClose,
}: B4CModalProps) => {
  return (
    <Dialog
      className={className}
      open={open}
      onClose={onClose}
      sx={{ borderRadius: "32px" }}
      PaperProps={{
        sx: {
          borderRadius: "32px", // Aquí se aplica el borderRadius directamente al Paper
        },
      }}
    >
      <Box
        sx={{
          background: bgColor ? bgColor : "white",
          paddingX: spacings.spacing3,
          paddingY: spacings.spacing4,
          boxShadow: 24,
          maxWidth: "1224px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Dialog>
  );
};
