import { Box, Card, Typography } from "@mui/material";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

export interface B4CBenefitsCardProps {
  title: string;
  color?: "red" | "yellow" | "green";
  subtitle: string;
}

export const B4CBenefitsCard = ({
  title,
  color = "green",
  subtitle,
}: B4CBenefitsCardProps) => {
  const colorPallette = {
    red: {
      backgroundColor: " #FF625033",
      icon: (
        <AutoFixHighOutlinedIcon
          sx={{
            color: "#FF6250",
            fontSize: 45,
          }}
        />
      ),
    },
    green: {
      backgroundColor: " #00937933",
      icon: (
        <AssistantOutlinedIcon
          sx={{
            color: "#009379",
            fontSize: 45,
          }}
        />
      ),
    },
    yellow: {
      backgroundColor: "#F8D57E33",

      icon: (
        <CelebrationOutlinedIcon
          sx={{
            color: "#F8D57E",
            fontSize: 45,
          }}
        />
      ),
    },
  };

  return (
    <Card
      sx={{
        maxWidth: 370,
        height: 385,
        borderRadius: 6,
        justifyContent: "flex-start",
        flexDirection: "column",
        display: "flex",
        mt: 10,
        p: 6,
        boxSizing: "border-box",
        textAlign: "center",
        gap: 10,
      }}
    >
      <Box
        width={90}
        height={90}
        sx={{
          backgroundColor: colorPallette[color].backgroundColor,
          display: "grid",
          placeItems: "center",
          margin: "20px auto",
          borderRadius: "25%",
        }}
      >
        {colorPallette[color].icon}
      </Box>

      <Box
        sx={{
          minHeight: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      </Box>

      <Typography
        variant="body-medium"
        gutterBottom
        sx={{
          padding: "0 16px",
        }}
      >
        {subtitle}
      </Typography>
    </Card>
  );
};
