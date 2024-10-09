export interface GetAllApplication {
  id: number;
  time_range: string;
  status: string;
  address: string;
  patient_name: string;
  patient_phone: string;
  clientId: number;
  description: string;
  comments?: string;  // Puede ser opcional si no siempre está presente
  amount: number;
  carerId: number;
  createdAt: string;
  updatedAt: string;
}