import { Box, Card, Typography } from "@mui/material";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ElderlyIcon from "@mui/icons-material/Elderly";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import HandymanIcon from "@mui/icons-material/Handyman";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export type BenefitsIcon =
  | "cleaning"
  | "elderly"
  | "carRepair"
  | "handyman"
  | "people"
  | "celebration";

export interface B4CBenefitsCardProps {
  title: string;
  color?: "red" | "yellow" | "green";
  icon: BenefitsIcon;
  subtitle: string;
}

export const B4CBenefitsCard = ({
  title,
  color = "green",
  icon,
  subtitle,
}: B4CBenefitsCardProps) => {
  const fontSize = 45;
  const colorHex =
    color === "red" ? "#FF6250" : color === "green" ? "#009379" : "#F8D57E";

  // Mapeo para seleccionar el ícono en base al prop `icon`
  const iconMapping = {
    cleaning: <CleaningServicesIcon sx={{ fontSize, color: colorHex }} />,
    elderly: <ElderlyIcon sx={{ fontSize, color: colorHex }} />,
    carRepair: <CarRepairIcon sx={{ fontSize, color: colorHex }} />,
    handyman: <HandymanIcon sx={{ fontSize, color: colorHex }} />,
    people: <EmojiPeopleIcon sx={{ fontSize, color: colorHex }} />,
    celebration: <CelebrationOutlinedIcon sx={{ fontSize, color: colorHex }} />,
  };

  const colorPallette = {
    red: {
      backgroundColor: " #FF625033",
    },
    green: {
      backgroundColor: " #00937933",
    },
    yellow: {
      backgroundColor: "#F8D57E33",
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
        {iconMapping[icon]}
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
        variant="body-normal"
        gutterBottom
        sx={{
          padding: "0 16px",
          textWrap: "balance",
        }}
      >
        {subtitle}
      </Typography>
    </Card>
  );
};
