import { spacings } from "@/style/partials/spacings";
import { Box, Modal } from "@mui/material";
import React, { ReactNode } from "react";

interface IB4CModalProps {
  children: ReactNode;
  open: boolean;
  bgColor?: string;
  onClose?: () => void;
}

export const B4CModal = ({
  children,
  open,
  bgColor,
  onClose,
}: IB4CModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
          background: bgColor ? bgColor : "white",
          borderRadius: `8px`,
          paddingX: spacings.spacing3,
          paddingY: spacings.spacing4,
          boxShadow: 24,
          "@media (max-width: 600px)": {
            width: "95%",
          },
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
    </Modal>
  );
};
