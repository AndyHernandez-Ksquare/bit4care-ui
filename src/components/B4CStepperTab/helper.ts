import { SxProps, Theme } from "@mui/material";
import { colorPalette } from "@/style/partials/colorPalette";
import { StepType } from "@/ts/enums";

export const getStepType = (activeStep: number, index: number): StepType => {
  const isStepActive = index === activeStep;
  const isStepCompleted = index < activeStep;
  if (isStepActive) {
    return StepType.Active;
  }
  if (isStepCompleted) {
    return StepType.Completed;
  }
  return StepType.Default;
};

export const getTypographyColor = (stepType: StepType): SxProps<Theme> => {
  const defaultStyle = {
    color: colorPalette.grey1,
  };
  const activeStyle = {
    color: colorPalette.primary,
  };
  const completedStyle = {
    color: colorPalette.primary,
  };
  if (stepType === StepType.Active) return activeStyle;
  if (stepType === StepType.Completed) return completedStyle;
  return defaultStyle;
};