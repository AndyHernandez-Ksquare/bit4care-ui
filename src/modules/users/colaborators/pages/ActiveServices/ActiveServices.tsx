import { Box, Typography } from "@mui/material";
import { B4CNoActiveServices } from "@/assets/images/B4CNoActiveServices";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { colorPalette } from "@/style/partials/colorPalette";
import {
  ColaboratorsServicesCard,
  Status,
} from "../../components/ColaboratorsServicesCard/ColaboratorsServicesCard";
import { B4CDetailService } from "../../components/B4CDetailService/B4CDetailService";

export const ActiveServices = () => {
  const [openModal, setIsOpenModal] = useState<boolean>(false);
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
    {
      name: "Armando Rodriguez",
      schedule: "Hoy, en 6 horas",
      fee: "$2500 ($150/h)",
      hours: 15,
      address: "Colonia Los Álamos, Benito Juárez CDMX. CP: 05040",
      service: "Limpieza de domicilio",
      status: "solicitado",
      skills: ["skill3", "skill4"],
    },
    {
      name: "María Fernanda Ruiz",
      schedule: "Mañana, en 8 horas",
      fee: "$1800 ($120/h)",
      hours: 10,
      address: "Colonia Condesa, Cuauhtémoc CDMX. CP: 06140",
      service: "Cuidado de niños",
      status: "no realizado",
      skills: ["skill5", "skill6"],
    },
    {
      name: "Carlos Martinez",
      schedule: "Hoy, en 2 horas",
      fee: "$3000 ($200/h)",
      hours: 20,
      address: "Colonia Roma, Cuauhtémoc CDMX. CP: 06700",
      service: "Cuidado de mascotas",
      status: "no realizado",
      skills: ["skill7", "skill8"],
    },
    {
      name: "Ana Gomez",
      schedule: "Mañana, en 10 horas",
      fee: "$2200 ($110/h)",
      hours: 12,
      address: "Colonia Polanco, Miguel Hidalgo CDMX. CP: 11560",
      service: "Asistencia en cocina",
      status: "solicitado",
      skills: ["skill9", "skill10"],
      isAssigned: true,
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
            isAssigned={colaborator.isAssigned}
            onClick={() => {
              setIsOpenModal(!openModal);
            }}
          />
        ))
      ) : (
        <Fragment>
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
        </Fragment>
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
