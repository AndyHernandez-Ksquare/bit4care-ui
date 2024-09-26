import { Grid } from "@mui/material";
import React, { useState } from "react";
import { B4CProviderCard } from "../B4CProviderCard";
import "./B4CHogarProviders.css";

export const B4CHogarProviders = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    maria: true,
    juan: false,
    margarita: true,
  });
  const handleFavoriteToggle = (name: string) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [name]: !prevFavorites[name],
    }));
  };
  const providers = [
    {
      name: "María Pérez",
      specialty: "Enfermera Geriátrica",
      rating: 4.9,
      reviews: 100,
      availability: "Todos los días",
      rate: "$200 / h",
      skills: ["Licencia de conducir", "A 20 km de ti"],
      isFavorite: favorites.maria,
    },
    {
      name: "Juan Ramírez",
      specialty: "Enfermero Pediátrico",
      rating: 5.0,
      reviews: 60,
      availability: "Lunes a viernes",
      rate: "$180 / h",
      skills: ["Licencia de conducir", "A 20 km de ti"],
      isFavorite: favorites.juan,
    },
    {
      name: "Margarita Peláez",
      specialty: "Enfermera Cuidados Intensivos",
      rating: 2.0,
      reviews: 50,
      availability: "Lunes a viernes",
      rate: "$150 / h",
      skills: ["Licencia de conducir", "A 20 km de ti"],
      isFavorite: favorites.margarita,
    },
    {
      name: "Margarita Peláez",
      specialty: "Enfermera Cuidados Intensivos",
      rating: 3.0,
      reviews: 50,
      availability: "Lunes a viernes",
      rate: "$150 / h",
      skills: ["Licencia de conducir", "A 20 km de ti"],
      isFavorite: favorites.margarita,
    },
  ];
  return (
    <Grid container spacing={32} sx={{ mt: 4 }}>
      {providers.map((nurse) => (
        <Grid
          className="client-providers-container"
          item
          xs={12}
          desktop={3}
          key={nurse.name}
        >
          <B4CProviderCard
            key={nurse.name}
            {...nurse}
            onFavoriteToggle={() => handleFavoriteToggle(nurse.name)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
