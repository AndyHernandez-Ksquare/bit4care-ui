import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { colorPalette } from "@/style/partials/colorPalette";

const gradientBackground = `linear-gradient(89.78deg, ${colorPalette.secondary} 14.37%, ${colorPalette.primary} 110.74%)`;
export const B4CStepperConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: gradientBackground,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: gradientBackground,
    },
  },
}));
