import { Box, CircularProgress, Grid2 as Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { B4CProviderCard } from "../B4CProviderCard";
import {
  CarerReview,
  GetOneCarer,
} from "@/ts/types/api/carer/GetOneCarer.type";
import "./B4CHogarProviders.css";
import { MockGetAllCarerRequests } from "@/services/careerServices/CareerMockData";

export const B4CHogarProviders = () => {
  const [providers, setProviders] = useState<GetOneCarer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simula la obtención de datos
  const fetchProviders = async () => {
    const data = await MockGetAllCarerRequests();
    setProviders(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  // Función para calcular el promedio de estrellas de las reseñas
  const calculateAverageRating = (reviews: CarerReview[] = []) => {
    if (reviews.length === 0) return 0; // Si no hay reseñas, el rating es 0
    const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
    return totalStars / reviews.length;
  };

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 32 }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={16} sx={{ mt: 4 }}>
          {providers.map(
            ({ id, User, speciality, carerReviews, payment_range }) => (
              <Grid
                className="client-providers-container"
                size={{ xs: 12, desktop: 3 }}
                key={id}
              >
                <B4CProviderCard
                  careerId={id}
                  name={User.name}
                  specialty={speciality}
                  rating={calculateAverageRating(carerReviews)}
                  rate={payment_range}
                  availability="Todos los dias"
                />
              </Grid>
            ),
          )}
        </Grid>
      )}
    </>
  );
};
