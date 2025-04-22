import { Box, Typography } from "@mui/material";
import { B4CNoActiveServices } from "@/assets/images/B4CNoActiveServices";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colorPalette } from "@/style/partials/colorPalette";
import { ColaboratorsServicesCard } from "../../components/ColaboratorsServicesCard/ColaboratorsServicesCard";
import { Status } from "@/ts/types/components";
import { useGetCarerApplications } from "@/context/api/hooks/application-requests/useGetCarerApplications";
import { formatDateOnly } from "@/constants/formatDate";
import { getSkills } from "@/constants/getSkillsForCarerCard";

export const ActiveServices = () => {
  const [openModal, setIsOpenModal] = useState<boolean>(false);
  const { carerApplications } = useGetCarerApplications();

  useEffect(() => {
    console.log(carerApplications);
  }, []);
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
      {carerApplications.length > 0 ? (
        carerApplications.map((colaborator, index) => (
          <ColaboratorsServicesCard
            data={colaborator} // ✅ Pasar los datos al componente
            id={`${colaborator.id}`}
            key={index}
            name={colaborator.patient_name}
            schedule={`${formatDateOnly(colaborator.start_date)} - ${formatDateOnly(colaborator.end_date)}`}
            fee={colaborator.amount}
            comments={colaborator.description}
            b4cfee={colaborator.commision}
            negotiation={colaborator.carer?.Negotiation}
            hours={colaborator.job_interval}
            address={colaborator.address}
            service={colaborator.carer_speciality || "No especificado"}
            status={colaborator.status.toLowerCase() as Status}
            skills={getSkills(colaborator)} // No hay un campo explícito en GetOneApplication, ajustar según sea necesario
            profile_picture_url={""} // Ajustar si existe una imagen en la API
            onClick={() => setIsOpenModal(true)}
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
    </Box>
  );
};
