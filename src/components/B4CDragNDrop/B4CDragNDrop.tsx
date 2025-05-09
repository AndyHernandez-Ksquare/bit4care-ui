import { useDropzone } from "react-dropzone";
import { Box, Button, Chip, Typography } from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import VideoFileRoundedIcon from "@mui/icons-material/VideoFileRounded";
import { colorPalette } from "@/style/partials/colorPalette";
import { useCallback, useState } from "react";
export interface B4CDragNDropProps {
  type?: "document" | "video";
  onDrop: (files: File[]) => void;
}

export const B4CDragNDrop = ({
  type = "document",
  onDrop,
}: B4CDragNDropProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const hasFiles = files.length > 0;

  const handleDrop = useCallback(
    (accepted: File[]) => {
      setFiles(accepted);
      onDrop(accepted);
    },
    [onDrop],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple: false,
  });

  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        border: `1px solid ${colorPalette.grey4}`,
        borderRadius: "4px",
      }}
    >
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed",
          borderColor: hasFiles
            ? "success.main"
            : isDragActive
              ? "primary.main"
              : "grey.400",
          backgroundColor: hasFiles ? "rgba(76, 175, 80, 0.1)" : "transparent",
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
          minHeight="150px"
        >
          {hasFiles ? (
            <>
              {type === "document" ? (
                <UploadFileRoundedIcon fontSize="large" color="success" />
              ) : (
                <VideoFileRoundedIcon fontSize="large" color="success" />
              )}
              <Typography mt={1} mb={2}>
                Archivo cargado:
              </Typography>
              {files.map((f) => (
                <Chip
                  key={f.name}
                  label={f.name}
                  icon={
                    type === "video" ? (
                      <VideoFileRoundedIcon />
                    ) : (
                      <UploadFileRoundedIcon />
                    )
                  }
                  color="success"
                />
              ))}
            </>
          ) : isDragActive ? (
            <Typography>Suéltalo aquí…</Typography>
          ) : (
            <>
              {type === "document" ? (
                <UploadFileRoundedIcon fontSize="large" color="action" />
              ) : (
                <VideoFileRoundedIcon fontSize="large" color="action" />
              )}
              <Typography mt={1}>Arrastra y suelta aquí</Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
