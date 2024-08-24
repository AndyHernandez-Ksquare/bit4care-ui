import { PageLayout } from "@/components/B4CPageLayout";
import { B4CStepperTab } from "@/components/B4CStepperTab";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { B4CClientBigCalendar } from "../../components/B4CClientBigCalendar";
import { B4CAvailableColaborator } from "../../components/B4CAvailableColaborator";
import { B4CServiceSpecs } from "../../components/B4CServiceSpecs";

export const B4CClientsNewService = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    "Escoger Fechas de Servicio",
    "Escoger Cuidador/a Disponibles",
    "Llenar Especificaciones de Servicio",
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  return (
    <PageLayout title="Crear nueva solicitud">
      <Typography variant="body-normal" color={"#575F6E"}>
        Empieza seleccionando las fechas de inicio y final para tu próximo
        servicio.
      </Typography>
      <Box sx={{ marginTop: "32px" }}>
        <B4CStepperTab
          activeStep={activeStep}
          steps={steps}
          onStepClick={handleStepClick}
        />
        {activeStep === 0 && <B4CClientBigCalendar />}
        {activeStep === 1 && <B4CAvailableColaborator />}
        {activeStep === 2 && <B4CServiceSpecs />}
      </Box>
    </PageLayout>
  );
};
