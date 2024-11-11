import { colorPalette } from "@/style/partials/colorPalette";
import Box from "@mui/material/Box/Box";
import { StepIconProps } from "@mui/material/StepIcon";

export const B4CStepTabIcon = ({ active, completed }: StepIconProps) => {
  return (
    <Box
      sx={{
        position: "static",
        zIndex: 99999,
        width: "22vw",
        height: "4px",
        backgroundColor:
          active || completed
            ? `${colorPalette.primary}`
            : `${colorPalette.grey5}`,
      }}
    />
  );
};
