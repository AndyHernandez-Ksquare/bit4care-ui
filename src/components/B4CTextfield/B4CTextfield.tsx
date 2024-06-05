import { NotViewPasswordIcon } from "@/assets/svgIcons/visibleIcons/NotViewPasswordIcon";
import { ViewPasswordIcon } from "@/assets/svgIcons/visibleIcons/ViewPasswordIcon";
import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import {
  Box,
  IconButton,
  InputLabel,
  SxProps,
  TextField,
  TextFieldVariants,
  Theme,
  Typography,
} from "@mui/material";
import React, { ChangeEventHandler, FocusEventHandler } from "react";

interface IB4CTextfieldProps {
  name?: string;
  className?: string;
  disabled?: boolean;
  variant?: TextFieldVariants | undefined;
  error?: boolean;
  helper?: string;
  id?: string;
  isPassword?: boolean;
  isMultiline?: boolean;
  isVisible?: boolean;
  label?: string;
  placeholder?: string;
  required?: boolean;
  touched?: boolean;
  sx?: SxProps<Theme> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: () => void;
}

export const B4CTextfield = ({
  name,
  className,
  disabled,
  error,
  helper,
  id,
  isPassword,
  label,
  isMultiline,
  isVisible,
  required,
  placeholder,
  touched,
  sx,
  variant,
  onChange,
  onClick,
}: IB4CTextfieldProps) => {
  return (
    <Box display="flex" flexDirection="column" sx={sx}>
      {label && (
        <InputLabel htmlFor={id} sx={{ marginBottom: spacings.spacing1 }}>
          <Typography variant="body-normal-bold" color={colorPalette.black1}>
            {label}
          </Typography>
        </InputLabel>
      )}
      <TextField
        required={required}
        name={name}
        onChange={onChange}
        variant={variant}
        type={isPassword && !isVisible ? "password" : "text"}
        InputProps={{
          endAdornment: isPassword && (
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              edge="end"
            >
              {isVisible ? <NotViewPasswordIcon /> : <ViewPasswordIcon />}
            </IconButton>
          ),
          className: className,
          sx: {
            paddingBlock: "4px",
            paddingLeft: `${4 * 2}px`,

            "&::placeholder": {
              color: colorPalette.black1, // Modifica el color del placeholder
              opacity: 1,
              fontSize: "16px", // Modifica el estilo del placeholder
              // Otros estilos que desees aplicar al placeholder
            },
          },
        }}
        className={className}
        id={id}
        disabled={disabled}
        multiline={isMultiline}
        placeholder={placeholder}
      />

      {helper && (
        <Box display="flex" justifyContent="space-between" paddingTop="8px">
          {helper && (
            <Typography
              variant="body-small"
              color={error && touched ? colorPalette.error : colorPalette.grey4}
            >
              {helper}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
