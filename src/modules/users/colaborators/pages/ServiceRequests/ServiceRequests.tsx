import { PageLayout } from "@/components/B4CPageLayout";
import { spacings } from "@/style/partials/spacings";
import {
  Box,
  Grid2 as Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { ColaboratorsServicesCard } from "../../components/ColaboratorsServicesCard/ColaboratorsServicesCard";
import { Status } from "@/ts/types/components";
import { useState } from "react";
import { B4CNoActiveServices } from "@/assets/images/B4CNoActiveServices";
import { Link } from "react-router-dom";
import { colorPalette } from "@/style/partials/colorPalette";
import { B4CDetailService } from "../../components/B4CDetailService/B4CDetailService";
import { useGetPendingRequests } from "@/context/api/hooks/application-requests/useGetPendingRequests"; // 🔹 Importamos el custom hook
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { getSkills } from "@/constants/getSkillsForCarerCard";
import { formatDateOnly } from "@/constants/formatDate";

dayjs.extend(localizedFormat);
dayjs.locale("es");

export const ServiceRequests = () => {
  const [openModal, setIsOpenModal] = useState<boolean>(false);
  const { pendingRequests, loading, error } = useGetPendingRequests(); // 🔹 Llamamos el custom hook

  return (
    <PageLayout title="Solicitudes de servicio">
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: spacings.spacing3,
            }}
          ></Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBlock: "2rem",
            gap: "2rem",
          }}
        >
          {loading ? ( // 🔹 Mostramos spinner mientras carga
            <CircularProgress />
          ) : error ? ( // 🔹 Mostramos mensaje de error si falla la API
            <Typography color="error">Error al obtener solicitudes</Typography>
          ) : pendingRequests.length > 0 ? ( // 🔹 Si hay solicitudes, las mostramos
            pendingRequests.map((request) => (
              <ColaboratorsServicesCard
                id={`${request.id}`}
                key={request.id}
                name={request.patient_name}
                schedule={`${formatDateOnly(request.start_date)} - ${formatDateOnly(request.end_date)}`}
                fee={request.amount}
                comments={request.description}
                b4cfee={request.commision}
                hours={request.job_interval}
                address={request.address}
                service={request.carer_speciality || "No especificado"}
                status={request.status.toLowerCase() as Status}
                skills={getSkills(request)} // No hay un campo explícito en GetOneApplication, ajustar según sea necesario
                profile_picture_url={""} // Ajustar si existe una imagen en la API
                onClick={() => setIsOpenModal(true)}
                data={request}
              />
            ))
          ) : (
            // 🔹 Si no hay solicitudes, mostramos mensaje
            <>
              <Typography variant="h4">
                Aún no tienes servicios activos
              </Typography>
              <Typography variant="body1">
                Espera a que algún cliente te escoja para un servicio. Ajusta tu
                perfil y disponibilidad.
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
                <Typography variant="body-normal">
                  Ir a perfil y ajustes
                </Typography>
              </Link>
            </>
          )}
          <B4CDetailService
            isOpen={openModal}
            onClose={() => setIsOpenModal(false)}
          />
        </Box>
      </Grid>
    </PageLayout>
  );
};
