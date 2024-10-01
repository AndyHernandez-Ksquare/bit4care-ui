import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { colorPalette } from "@/style/partials/colorPalette";

export interface SnackbarBlockProps {
  id: number;
  message: string;
  link: { text: string; href: string } | null;
  icon: JSX.Element;
}

export const SnackbarBlock = () => {
  const [snackbars, setSnackbars] = useState([
    {
      id: 1,
      message:
        "La confidencialidad de sus datos está resguardada por la ley federal de protección de datos personales en posesión de los particulares.",
      link: null,
      icon: <LockIcon style={{ color: colorPalette.primary }} />,
    },
    {
      id: 2,
      message:
        "Te pediremos registrar tus datos personales, profesionales y hacer un",
      link: { text: "Test de Habilidades", href: "#" },
      icon: <CheckCircleIcon style={{ color: colorPalette.primary }} />,
    },
    {
      id: 3,
      message: "Lee nuestros",
      link: { text: "Términos y condiciones", href: "#" },
      icon: <CheckCircleIcon style={{ color: colorPalette.primary }} />,
    },
  ]);

  const handleClose = (id: number) => {
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      gap={16}
    >
      {snackbars.map((snackbar) => (
        <Box
          key={snackbar.id}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="16px"
          bgcolor={colorPalette.backGroundGray}
          borderRadius="8px"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
          width="100%"
          maxWidth="100%"
          marginBottom="16px"
        >
          <Box display="flex" alignItems="center">
            {snackbar.icon}
            <Typography style={{ marginLeft: "8px" }}>
              {snackbar.message}{" "}
              {snackbar.link && (
                <a
                  href={snackbar.link.href}
                  style={{
                    color: colorPalette.primary,
                    textDecoration: "none",
                  }}
                >
                  {snackbar.link.text}
                </a>
              )}
            </Typography>
          </Box>
          <IconButton
            size="small"
            color="inherit"
            onClick={() => handleClose(snackbar.id)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default SnackbarBlock;
