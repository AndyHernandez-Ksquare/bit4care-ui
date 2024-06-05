import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

interface IB4CAccordionProps {
  info: { title: string; details: string }[];
}

export const B4CAccordion = ({ info }: IB4CAccordionProps) => {
  return (
    <div>
      {info.map(({ title, details }, index) => {
        const isFirst = index === 0;
        const isLast = index === info.length - 1;
        return (
          <Accordion
            disableGutters
            square
            key={`${index}-${title}`}
            className={`${isFirst ? "isfirstelement" : ""}${
              isLast ? "islastelement" : ""
            }`}
            sx={{
              borderTopLeftRadius: isFirst ? "8px" : "0px",
              borderTopRightRadius: isFirst ? "8px" : "0px",
              borderBottomLeftRadius: isLast ? "8px" : "0px",
              borderBottomRightRadius: isLast ? "8px" : "0px",
              overflow: "hidden",
            }}
          >
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <Typography variant="body-normal-bold">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body-normal">{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
