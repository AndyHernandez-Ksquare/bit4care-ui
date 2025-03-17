import { CloseIcon } from "@/assets/svgIcons/closeIcons/CloseIcon";
import { spacings } from "@/style/partials/spacings";
import { B4CModalProps } from "@/ts/types/components";
import { Dialog, DialogContent, IconButton } from "@mui/material";

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
      maxWidth="desktop"
      PaperProps={{
        sx: {
          borderRadius: "32px",
          overflow: "hidden",
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
      <DialogContent
        sx={{
          background: bgColor ? bgColor : "white",
          paddingX: spacings.spacing3,
          paddingY: spacings.spacing4,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
