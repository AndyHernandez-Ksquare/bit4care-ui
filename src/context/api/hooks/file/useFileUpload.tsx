import { useState, useCallback } from "react";
import { FileUploadMetadata, FileUploadResponse } from "@/ts/types/api/file";
import { PostPresignedUrl } from "@/services/fileServices/FileServices";

export function useFileUpload() {
  const [response, setResponse] = useState<FileUploadResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * 1) Solicita la URL pre-firmada al backend
   * 2) Realiza un PUT del archivo directamente a S3
   */
  const uploadFile = useCallback(
    async (meta: FileUploadMetadata, file: Blob | ArrayBuffer) => {
      setLoading(true);
      setError(null);

      try {
        // 1️⃣ Obtener URL pre-firmada
        const presigned = await PostPresignedUrl(meta);
        if (!presigned) {
          const msg = "No se obtuvo la URL pre-firmada";
          setError(msg);
          throw new Error(msg);
        }
        setResponse(presigned);

        // 2️⃣ Cargar el binario a S3
        await fetch(presigned.url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": meta.type,
          },
        });

        return presigned;
      } catch (err: any) {
        setError(err.message || "Error subiendo el archivo");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { response, loading, error, uploadFile };
}
