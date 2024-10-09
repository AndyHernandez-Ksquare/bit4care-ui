import { ReactNode } from "react";

export interface B4CModalProps {
  children: ReactNode;
  open: boolean;
  bgColor?: string;
  className?: string;
  onClose?: () => void;
}