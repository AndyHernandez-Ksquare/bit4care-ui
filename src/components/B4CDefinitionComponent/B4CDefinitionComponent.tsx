import { B4CDefinitionComponentProps } from "@/ts/types/components/B4CComponents.type";
import { Box, Typography } from "@mui/material";

export const B4CDefinitionComponent = ({
  label,
  children,
}: B4CDefinitionComponentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", desktop: "row" },
        gap: { xs: "0", desktop: "16px" },
      }}
    >
      <Typography variant="body-small">{label}</Typography>
      {children}
    </Box>
  );
};
