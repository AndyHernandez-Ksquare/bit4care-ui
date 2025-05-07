export interface FileUploadResponse {
  id: number;
  name: string;
  key: string;
  type: string;
  is_profile_pic: boolean;
  is_motivation_vid: boolean;
  userId: number | null;
  createdAt: Date;
  updatedAt: Date;
  url: string;
}
