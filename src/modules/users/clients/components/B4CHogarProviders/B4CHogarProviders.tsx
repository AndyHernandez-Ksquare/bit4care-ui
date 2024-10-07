import { Grid2 as Grid } from "@mui/material";
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

  useEffect(() => {
    // Simula la obtención de datos
    const fetchProviders = async () => {
      const data = await MockGetAllCarerRequests();
      setProviders(data);
    };

    fetchProviders();
  }, []);

  // Función para calcular el promedio de estrellas de las reseñas
  const calculateAverageRating = (reviews: CarerReview[] = []) => {
    if (reviews.length === 0) return 0; // Si no hay reseñas, el rating es 0
    const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
    return totalStars / reviews.length;
  };

  return (
    <Grid container spacing={16} sx={{ mt: 4 }}>
      {providers.map((caretaker) => (
        <Grid
          className="client-providers-container"
          size={{ xs: 12, desktop: 3 }}
          key={caretaker.id}
        >
          <B4CProviderCard
            name={caretaker.User.name}
            specialty={caretaker.speciality}
            rating={calculateAverageRating(caretaker.carerReviews)}
            rate={caretaker.payment_range}
            availability="Todos los dias"
          />
        </Grid>
      ))}
    </Grid>
  );
};
