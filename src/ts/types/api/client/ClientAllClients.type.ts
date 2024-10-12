export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  last_login: string;
}

export interface ClientAllClients {
  id: number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  User: User;
}