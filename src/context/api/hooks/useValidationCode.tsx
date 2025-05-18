import {
  SendValidationCode,
  VerifyValidationCode,
} from "@/services/metaServices/sendOtpService";
import { useCallback, useState } from "react";

interface UseValidationCodeHook {
  // Envío
  sendOtp: (recipient: string) => Promise<void>;
  sending: boolean;
  sendError: string | null;
  sent: boolean;
  // Verificación
  verifyOtp: (recipient: string, code: string) => Promise<void>;
  verifying: boolean;
  verifyError: string | null;
  verified: boolean;
}

export const useValidationCode = (): UseValidationCodeHook => {
  // Estados de envío
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  // Estados de verificación
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  const sendOtp = useCallback(async (recipient: string) => {
    setSending(true);
    setSendError(null);
    setSent(false);
    try {
      await SendValidationCode({ recipient });
      setSent(true);
    } catch (err: any) {
      // AxiosError? mostramos el mensaje del backend si existe
      setSendError(err.response?.data?.message ?? err.message);
    } finally {
      setSending(false);
    }
  }, []);

  const verifyOtp = useCallback(async (recipient: string, code: string) => {
    setVerifying(true);
    setVerifyError(null);
    setVerified(false);
    try {
      await VerifyValidationCode({ recipient, code });
      setVerified(true);
    } catch (err: any) {
      setVerifyError(err.response?.data?.message ?? err.message);
    } finally {
      setVerifying(false);
    }
  }, []);

  return {
    sendOtp,
    sending,
    sendError,
    sent,
    verifyOtp,
    verifying,
    verifyError,
    verified,
  };
};
