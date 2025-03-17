import { CarerReview } from "@/ts/types/api/client";

// Función para calcular el promedio de estrellas de las reseñas
export const calculateAverageRating = (reviews: CarerReview[] = []) => {
  if (reviews.length === 0) return 0; // Si no hay reseñas, el rating es 0
  const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
  return totalStars / reviews.length;
};