import { colorPalette } from "@/style/partials/colorPalette";
import { Box, LinearProgress, Typography } from "@mui/material";

export interface B4CProgressBarProps {
  value: number;
  limit: number;
}

export const B4CProgressBar = ({ value, limit }: B4CProgressBarProps) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={6}
      width={"100%"}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            borderRadius: 1,
            height: 10,
            bgcolor: "background.paper",
            "& .MuiLinearProgress-bar": {
              borderRadius: 1,
              bgcolor: colorPalette.success,
            },
          }}
          value={(value / limit) * 100}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body-normal-bold"
          sx={{ color: "text.secondary" }}
        >{`${value}/${limit}`}</Typography>
      </Box>
    </Box>
  );
};
