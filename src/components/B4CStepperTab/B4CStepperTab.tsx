import { B4CStepperProps } from "@/ts/types/components/B4CStepperProps";
import {
  Box,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { getStepType } from "./helper";
import { StepType } from "@/ts/enums";
import { B4CStepTabIcon } from "./B4CStepTabIcon";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CStepperTabConnector } from "./B4CStepperTabConnector";

interface B4CStepperTabProps extends B4CStepperProps {
  onStepClick: (index: number) => void;
}

export const B4CStepperTab = ({
  activeStep,
  steps,
  onStepClick,
}: B4CStepperTabProps) => {
  return (
    <Fragment>
      <Stack sx={{ width: "100%" }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<B4CStepperTabConnector />}
        >
          {steps.map((label, index) => {
            const stepType = getStepType(activeStep, index);
            // const typographyColor = getTypographyColor(stepType);
            return (
              <Step
                key={`${index}-${label}`}
                sx={{ paddingInline: 0 }}
                onClick={() => onStepClick(index)}
              >
                <StepLabel
                  StepIconComponent={(props) => (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant={
                          StepType.Active === stepType
                            ? "body-normal-bold"
                            : "body-normal"
                        }
                        color={
                          StepType.Active === stepType
                            ? colorPalette.primary
                            : colorPalette.grey1
                        }
                        sx={{
                          marginInline: "70px",
                          marginBottom: "16px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {label}
                      </Typography>
                      <B4CStepTabIcon
                        {...props}
                        completed={stepType === StepType.Completed}
                      />
                    </Box>
                  )}
                />
              </Step>
            );
          })}
        </Stepper>
      </Stack>
    </Fragment>
  );
};
