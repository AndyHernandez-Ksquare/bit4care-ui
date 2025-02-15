import { B4CNoFinishedServices } from "@/assets/images/B4CNoFinishedServices";
import { Box, Typography } from "@mui/material";
import { ColaboratorsServicesCard } from "../../components/ColaboratorsServicesCard/ColaboratorsServicesCard";
import { Status } from "@/ts/types/components";
import { colaboratorsServicesData } from "../ActiveServices/mockData";

export const InactiveServices = () => {
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
            comments={colaborator.comments}
            fee={colaborator.fee}
            b4cfee={colaborator.b4cfee}
            hours={colaborator.hours}
            address={colaborator.address}
            service={colaborator.service}
            status={colaborator.status as Status}
            skills={colaborator.skills}
          />
        ))
      ) : (
        <>
          <Typography variant="h4">
            Aun no tienes servicios finalizados
          </Typography>
          <Typography variant="body1">
            Completa tu primer Servicio para que pueda aparecer en tu archivo de
            Servicios. Estos se eliminarán después de un año.
          </Typography>
          <B4CNoFinishedServices />
        </>
      )}
    </Box>
  );
};
