import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { Box } from "@mui/material";
import React, { Fragment, useState } from "react";
import { B4CAvailableColaboratorCard } from "../B4CAvailableColaboratorCard";
import { B4CClientColaboratorCard } from "../B4CClientColaboratorCard";

export const B4CAvailableColaborator = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBlock: "32px",
        }}
      >
        <B4CCheckbox label="Fines de semana" />
        <B4CCheckbox label="Contrato abierto" />
        <B4CCheckbox label="Mis favoritos" />
      </Box>
      <B4CAvailableColaboratorCard
        name="María Pérez"
        rating={5.0}
        expertise="Experta en adultos mayores con demencia"
        fullTimeRate={200}
        weekendRate={350}
        fullTimeHours="2:00 pm - 06:00 pm"
        weekendHours="16 horas"
        hasLicense={true}
        location="Querétaro"
        distance="20km"
        avatarUrl="/path/to/avatar.jpg"
        onClick={() => setOpenModal(true)}
      />
      <B4CClientColaboratorCard
        user={{
          id: 1,
          name: "Aioria of Leo",
          email: "aioria@example.com",
          registrationDate: "2024-04-25",
          roleId: "Cuidador", // Collaborator role ID
          profileImg: "https://randomuser.me/api/portraits/med/men/75.jpg",
          carrerProfile: {
            totalServices: 234,
            reviews: 32,
            stars: 4,
            expYears: 3,
            speciality: "Experta en adultos mayores",
            qualifications: [
              { name: "Acompanamiento a citas medicas" },
              { name: "manejo de medicamentos" },
              { name: "Despensa/compras del hogar" },
            ],
          },
        }}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </Fragment>
  );
};
