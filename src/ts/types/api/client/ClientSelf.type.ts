export interface Client {
  id: number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ClientSelf {
  id: number;
  email: string;
  stripeAccountId: string | null;
  address: string;
  role: string;
  file: unknown[]; // Puedes ajustar el tipo si tienes más detalles sobre los archivos
  client: Client;
}