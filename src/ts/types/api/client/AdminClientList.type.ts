export interface AdminClientList {
  id: number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  User: {
    id: number;
    name: string;
    email: string;
    phone: string;
    last_login: string;
  };
}
