import { color } from "@/ts/types/shared/colors";
import { Chip } from "@mui/material";

interface IB4CTagProps {
  label: string;
  color?: color;
}

export const B4CTag = ({ color = "primary", label }: IB4CTagProps) => {
  return <Chip label={label} color={color} />;
};
