export type FileType = "jpeg" | "png" | "gif" | "webp" | "pdf";

export type FileAction = "userProfilePic";

export interface FileUploadMetadata {
  userId: number;
  name: string;
  type: string;
  action?: FileAction;
  fileSize: number;
}
