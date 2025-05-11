import { FileUploadMetadata } from "@/ts/types/api/file";

export const extractFileMeta = (file: File): FileUploadMetadata => {
  const fullName = file.name;
  const lastDot = fullName.lastIndexOf(".");
  const name = lastDot > 0 ? fullName.substring(0, lastDot) : fullName;
  let ext = lastDot > 0 ? fullName.substring(lastDot + 1) : "";

  // 2️⃣ Normalizamos: si viene "jpg" lo convertimos a "jpeg"
  const normalizedType = ext === "jpg" ? "jpeg" : ext;

  return {
    name,
    type: normalizedType,
    fileSize: file.size,
  };
};
