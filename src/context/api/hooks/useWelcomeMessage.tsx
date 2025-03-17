import { SendWelcomeMessage } from "@/services/metaServices/sendOtpService";
import { SendOtpBodyRequest } from "@/ts/types/api/metaRequest/SendOtp.type";
import { WelcomeMessageResponse } from "@/ts/types/api/metaRequest/WelcomeMessage.type";
import { useState } from "react";

export const useWelcomeMessage = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error
  const [response, setResponse] = useState<WelcomeMessageResponse | null>(null); // Estado para el código generado

  const sendMessage = async (requestBody: SendOtpBodyRequest) => {
    setIsLoading(true); // Activamos la carga
    setError(null); // Limpiamos cualquier error previo
    try {
      // Llamamos al servicio para enviar el mensaje de bienvenida
      const response = await SendWelcomeMessage(requestBody);

      if (response) {
        setResponse(response); // Guardamos el código OTP recibido
      } else {
        setError("No se pudo obtener el mensaje de validación.");
      }
    } catch (err) {
      setError("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false); // Finalizamos la carga
    }
  };

  return {
    sendMessage,
    isLoading,
    error,
    response,
  };
};
