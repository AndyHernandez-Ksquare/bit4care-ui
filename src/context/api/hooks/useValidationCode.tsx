import { SendValidationCode } from "@/services/metaServices/sendOtpService";
import { SendOtpBodyRequest } from "@/ts/types/api/metaRequest/SendOtp.type";
import { useState } from "react";

export const useValidationCode = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error
  const [generatedCode, setGeneratedCode] = useState<string>(""); // Estado para el código generado

  const sendCode = async (requestBody: SendOtpBodyRequest) => {
    setIsLoading(true); // Activamos la carga
    setError(null); // Limpiamos cualquier error previo
    try {
      // Llamamos al servicio para enviar el código de validación
      const response = await SendValidationCode(requestBody);

      if (response.OTP) {
        setGeneratedCode(response.OTP); // Guardamos el código OTP recibido
      } else {
        setError("No se pudo obtener el código de validación.");
      }
    } catch (err) {
      setError("Hubo un problema al enviar el código. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false); // Finalizamos la carga
    }
  };

  return {
    sendCode,
    isLoading,
    error,
    generatedCode,
  };
};
