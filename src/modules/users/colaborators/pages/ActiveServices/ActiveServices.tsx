import { Box, Typography } from "@mui/material";
import { B4CNoActiveServices } from "@/assets/images/B4CNoActiveServices";
import { useState } from "react";
import { Link } from "react-router-dom";
import { colorPalette } from "@/style/partials/colorPalette";
import { ColaboratorsServicesCard } from "../../components/ColaboratorsServicesCard/ColaboratorsServicesCard";
import { Status } from "@/ts/types/components";
import { B4CDetailService } from "../../components/B4CDetailService/B4CDetailService";
import { colaboratorsServicesData } from "./mockData";

export const ActiveServices = () => {
  const [openModal, setIsOpenModal] = useState<boolean>(false);

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
            comments={colaborator.comments}
            b4cfee={colaborator.b4cfee}
            hours={colaborator.hours}
            address={colaborator.address}
            service={colaborator.service}
            status={colaborator.status as Status}
            skills={colaborator.skills}
            isAssigned={colaborator.isAssigned}
            profile_picture_url={colaborator.profile_picture_url}
            onClick={() => {
              setIsOpenModal(!openModal);
            }}
          />
        ))
      ) : (
        <>
          <Typography variant="h4">Aun no tienes servicios activos</Typography>
          <Typography variant="body1">
            Espera a que algún cliente te escoja para un servicio. Ajusta tu
            perfil y disponibilidad
          </Typography>
          <B4CNoActiveServices />
          <Link
            to={"/colaborators/profile&settings"}
            style={{
              backgroundColor: colorPalette.primary,
              paddingBlock: "1rem",
              paddingInline: "5rem",
              borderRadius: "8px",
              color: colorPalette.white,
              textDecoration: "none",
            }}
          >
            <Typography variant="body-normal">Ir a perfil y ajustes</Typography>
          </Link>
        </>
      )}
      <B4CDetailService
        isOpen={openModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
      />
    </Box>
  );
};
