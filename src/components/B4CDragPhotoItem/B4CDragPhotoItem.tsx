import { AddPhotoIcon } from "@/assets/svgIcons/addPhoto/AddPhotoIcon";
import { Box, Typography } from "@mui/material";

import { useDropzone } from "react-dropzone";

export const B4CDragPhotoItem = () => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });
  return (
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
      <AddPhotoIcon />
      <Typography variant="body2" sx={{ color: "#90A4AE", mt: 0.5 }}>
        Sube tu foto
      </Typography>
    </Box>
  );
};
