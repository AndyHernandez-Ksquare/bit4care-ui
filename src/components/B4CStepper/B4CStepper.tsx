import { Stack, Step, StepLabel, Stepper } from "@mui/material";
import { Fragment } from "react";
import { B4CStepperConnector } from "./B4CStepperConnector";
import { getStepType } from "./helper";
import { StepType } from "@/ts/enums";
import { B4CStepIcon } from "./B4CStepIcon";
import { B4CStepperProps } from "@/ts/types";

export const B4CStepper = ({ activeStep, steps }: B4CStepperProps) => {
  return (
    <Fragment>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<B4CStepperConnector />}
        >
          {steps.map((label, index) => {
            const stepType = getStepType(activeStep, index);
            // const typographyColor = getTypographyColor(stepType);
            return (
              <Step key={`${index}-${label}`}>
                <StepLabel
                  StepIconComponent={(props) => (
                    <B4CStepIcon
                      {...props}
                      completed={stepType === StepType.Completed}
                    />
                  )}
                ></StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Stack>
    </Fragment>
  );
};
