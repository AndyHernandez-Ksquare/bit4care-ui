import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Typography } from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import VideoFileRoundedIcon from "@mui/icons-material/VideoFileRounded";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CButton } from "../B4CButton";
import { Size } from "@/ts/enums";

export interface B4CDragNDropProps {
  type?: "document" | "video";
  onDrop: (files: File[]) => void;
}

export const B4CDragNDrop = ({
  type = "document",
  onDrop,
}: B4CDragNDropProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      sx={{
        mt: 12,
        p: 12,
        border: `1px solid ${colorPalette.grey4}`,
        borderRadius: "4px",
      }}
    >
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed",
          borderColor: isDragActive ? "primary.main" : "grey.400",
          padding: "20px",
          borderRadius: "4px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="175px"
        >
          {type === "document" ? (
            <UploadFileRoundedIcon
              fontSize="large"
              color="action"
              sx={{ mb: 12 }}
            />
          ) : (
            <VideoFileRoundedIcon
              fontSize="large"
              color="action"
              sx={{ mb: 12 }}
            />
          )}
          {isDragActive ? (
            <Typography>Soltar los archivos aquí...</Typography>
          ) : (
            <>
              <Typography>Arrastrar y depositar aquí</Typography>
              <Typography>o</Typography>
              <Button
                variant="text"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                <Typography>
                  Buscar {type === "video" ? "video" : "archivo"}
                </Typography>
              </Button>
            </>
          )}
        </Box>
      </Box>
      <B4CButton
        label="Subir Ahora"
        fullWidth
        size={Size.Small}
        sx={{ mt: 12 }}
      />
    </Box>
  );
};
