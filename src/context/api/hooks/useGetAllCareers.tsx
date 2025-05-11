import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { GetAllCarerProfiles } from "@/services/careerServices/CareerServices";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";

// Define el estado del hook
type UseCarerProfilesState = {
  isLoading: boolean;
  error: string | null;
};

export const useGetAllCareers = () => {
  const [getCareerData, setGetCareerData] = useState<GetOneCarer[] | null>(
    null,
  );

  const [state, setState] = useState<UseCarerProfilesState>({
    isLoading: true,
    error: null,
  });

  const fetchProfiles = async () => {
    try {
      const data = await GetAllCarerProfiles();

      if (!data) {
        throw new Error("No se encontraron datos de perfiles.");
      }
      setGetCareerData(data); // Guardamos los datos en el contexto
      setState({ isLoading: false, error: null });
    } catch (error: unknown) {
      let errorMessage = "Ocurrió un error desconocido.";
      // Verifica si el error es de Axios y extrae el mensaje
      if (error instanceof AxiosError && error.response) {
        const serverError = error.response.data as {
          message: string;
          statusCode: number;
        };
        errorMessage = serverError.message || `Error ${serverError.statusCode}`;
      }
      setState({ isLoading: false, error: errorMessage });
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []); // Ejecuta la función una sola vez al montar el componente

  return { data: getCareerData, ...state }; // Devuelve el estado completo
};
