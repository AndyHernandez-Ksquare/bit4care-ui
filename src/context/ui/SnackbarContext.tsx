import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface SnackbarContextProps {
  openSnackbar: boolean;
  message: string;
  severity: AlertColor;
  open: (message: string, severity?: AlertColor) => void;
  close: () => void;
}

const SnackbarContext = createContext<SnackbarContextProps>({
  openSnackbar: false,
  message: "",
  severity: "success",
  open: () => {},
  close: () => {},
});

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const open = (msg: string, sev: AlertColor = "success") => {
    setMessage(msg);
    setSeverity(sev);
    setOpenSnackbar(true);
  };

  const close = () => {
    setOpenSnackbar(false);
  };

  return (
    <SnackbarContext.Provider
      value={{ openSnackbar, message, severity, open, close }}
    >
      {children}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={close}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={close} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
