import { ReactNode } from "react";
import { ButtonColor } from "../shared/ButtonColor";
import { Size } from "@/ts/enums";
import { SxProps, Theme } from "@mui/material";

export interface B4CButtonProps {
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: ButtonColor;
  startIcon?: ReactNode;
  isSubmit?: boolean;
  size?: Size;
  isLoading?: boolean;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  onSubmit?: () => void;
}