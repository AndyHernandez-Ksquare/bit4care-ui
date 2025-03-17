import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { GetOneCarerRequest } from "@/services/careerServices/CareerServices";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
// Define el estado del hook
type UseCarerProfilesState = {
  isLoading: boolean;
  error: string | null;
};

export const useGetOneCareer = (careerId: number) => {
  const [getOneCareerData, setGetOneCareerData] = useState<GetOneCarer | null>(
    null,
  );
  const [state, setState] = useState<UseCarerProfilesState>({
    isLoading: true,
    error: null,
  });

  const fetchProfiles = async () => {
    if (getOneCareerData) {
      // Si los datos ya están cargados en el contexto, no necesitamos volver a llamarlos.
      setState({ isLoading: false, error: null });
      return;
    }
    try {
      const data = await GetOneCarerRequest(careerId);
      console.log(data);
      setGetOneCareerData(data); // Guardamos los datos en el contexto
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
    // Validar si careerId es válido antes de continuar

    fetchProfiles();
  }, [careerId]); // Ejecuta la función una sola vez al montar el componente

  return { data: getOneCareerData, ...state }; // Devuelve el estado completo
};
