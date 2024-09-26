import { B4CNoFinishedServices } from "@/assets/images/B4CNoFinishedServices";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { ColaboratorsServicesCard } from "../../components/ColaboratorsServicesCard/ColaboratorsServicesCard";
import { Status } from "@/ts/types/components";

export const InactiveServices = () => {
  const colaboratorsServicesData = [
    {
      name: "Juan Lopez Perez",
      schedule: "Hoy, en 6 horas",
      fee: "$2500 ($150/h)",
      hours: 23,
      address: "Colonia Los Álamos, Benito Juárez CDMX. CP: 05040",
      service: "Cuidado de adulto mayor",
      status: "no realizado",
      skills: ["skill1", "skill2"],
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "2rem",
        gap: "2rem",
      }}
    >
      {colaboratorsServicesData.length > 0 ? (
        colaboratorsServicesData.map((colaborator, index) => (
          <ColaboratorsServicesCard
            key={index}
            name={colaborator.name}
            schedule={colaborator.schedule}
            fee={colaborator.fee}
            hours={colaborator.hours}
            address={colaborator.address}
            service={colaborator.service}
            status={colaborator.status as Status}
            skills={colaborator.skills}
          />
        ))
      ) : (
        <Fragment>
          <Typography variant="h4">
            Aun no tienes servicios finalizados
          </Typography>
          <Typography variant="body1">
            Completa tu primer Servicio para que pueda aparecer en tu archivo de
            Servicios. Estos se eliminarán después de un año.
          </Typography>
          <B4CNoFinishedServices />)
        </Fragment>
      )}
    </Box>
  );
};
