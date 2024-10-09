import { CloseIcon } from "@/assets/svgIcons/closeIcons/CloseIcon";
import { spacings } from "@/style/partials/spacings";
import { B4CModalProps } from "@/ts/types/components";
import { Box, Dialog, IconButton } from "@mui/material";

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
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 16,
          top: 16,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
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
