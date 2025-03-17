import { User } from "../shared";

export interface ClientAllClients {
  id: number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  User: User;
}
