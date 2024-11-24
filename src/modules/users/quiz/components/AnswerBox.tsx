import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Typography } from "@mui/material";
import { indexToNumeral } from "../utils/indexToNumeral";

export interface AnswerBoxProps {
  selected: boolean;
  answer: string;
  index: number;
  onClick: () => void;
}

export const AnswerBox = ({
  selected = false,
  index,
  answer,
  onClick,
}: AnswerBoxProps) => {
  return (
    <Box
      width={"clamp(300px, 90%, 750px)"}
      height={"clamp(70px, 12%, 200px)"}
      display={"flex"}
      justifyContent={"left"}
      padding={16}
      borderRadius={4}
      alignItems={"center"}
      sx={{
        backgroundColor: selected
          ? colorPalette.success
          : colorPalette.backGroundGray,

        cursor: "pointer",

        "&:hover": {
          backgroundColor: selected
            ? colorPalette.success
            : colorPalette.green1,
        },
      }}
      onClick={onClick}
    >
      <Box
        borderRadius={"50%"}
        sx={{
          backgroundColor: colorPalette.white,
          width: "45px",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          ml: 9,
          mr: 16,
        }}
      >
        <Typography variant="body-medium-bold">
          {indexToNumeral(index)}
        </Typography>
      </Box>

      <Box display={"flex"} flexGrow={1} alignItems="center">
        <Typography variant="body-large" flexWrap={"wrap"}>
          {answer}
        </Typography>
      </Box>
    </Box>
  );
};
