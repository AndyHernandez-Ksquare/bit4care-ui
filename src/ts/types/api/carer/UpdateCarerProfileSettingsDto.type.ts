export interface UpdateCarerProfileSettingsDto {
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
  availability?: Record<string, any>;
}
