import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { GetAllCarerProfiles } from "@/services/careerServices/CareerServices";
import { useClientApi } from "../constans/useClientApi";

// Define el estado del hook
type UseCarerProfilesState = {
  isLoading: boolean;
  error: string | null;
};

export const useGetAllCareers = () => {
  const { getCareerData, setGetCareerData } = useClientApi();

  const [state, setState] = useState<UseCarerProfilesState>({
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      if (getCareerData) {
        // Si los datos ya están cargados en el contexto, no necesitamos volver a llamarlos.
        setState({ isLoading: false, error: null });
        return;
      }
      try {
        const data = await GetAllCarerProfiles();
        console.log(data);
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
          errorMessage =
            serverError.message || `Error ${serverError.statusCode}`;
        }
        setState({ isLoading: false, error: errorMessage });
      }
    };

    fetchProfiles();
  }, [getCareerData, setGetCareerData]); // Ejecuta la función una sola vez al montar el componente

  return { data: getCareerData, ...state }; // Devuelve el estado completo
};
