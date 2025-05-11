import { FileUploadMetadata } from "@/ts/types/api/file";

export const extractFileMeta = (file: File): FileUploadMetadata => {
  const fullName = file.name;
  const lastDot = fullName.lastIndexOf(".");
  const name = lastDot > 0 ? fullName.substring(0, lastDot) : fullName;
  const type = lastDot > 0 ? fullName.substring(lastDot + 1) : "";
  return {
    name,
    type,
    fileSize: file.size,
  };
};
