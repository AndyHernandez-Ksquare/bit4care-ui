import { useFileUpload } from "@/context/api/hooks/file/useFileUpload";
import { FileUploadMetadata } from "@/ts/types/api/file";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Box, Typography } from "@mui/material";

import { useDropzone } from "react-dropzone";
import { B4CButton } from "../B4CButton";
import { useCallback, useState } from "react";
import { extractFileMeta } from "@/constants/extractFileMeta";
import { Size } from "@/ts/enums";

export const B4CDragPhotoItem = () => {
  const { uploadFile, response, loading, error } = useFileUpload();
  const [file, setFile] = useState<File | null>(null);

  // 1️⃣ Solo guardamos el archivo en estado al hacer drop
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  // 3️⃣ “Subir foto” dispara el hook con la metadata
  const handleUpload = async () => {
    if (!file) return;
    const finalMetaData = extractFileMeta(file);
    try {
      await uploadFile({ ...finalMetaData, action: "userProfilePic" }, file);
      // aquí `response` tendrá la URL pre-firmada
    } catch {
      // el error se muestra abajo
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <>
      <Box
        {...getRootProps()}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 130,
          height: 130,
          border: `2px dashed #4C535F`,
          borderRadius: "8px",
          backgroundColor: "#EDF2F6",
          cursor: "pointer",
          textAlign: "center",
          p: 1,
          "&:hover": {
            borderColor: "#90CAF9",
            backgroundColor: "#E1F5FE",
          },
        }}
      >
        <input {...getInputProps()} />
        <AddPhotoAlternateOutlinedIcon
          sx={{
            fontSize: 40,
            color: "#90A4AE",
          }}
        />
        <Typography variant="body2" sx={{ color: "#90A4AE", mt: 0.5 }}>
          {file ? file.name : "Arrastra o selecciona un archivo"}
        </Typography>
      </Box>
      <B4CButton
        label="Subir"
        onClick={handleUpload}
        disabled={!file || loading}
        size={Size.Small}
        sx={{
          marginTop: 8,
          width: 100,
        }}
      ></B4CButton>
    </>
  );
};
