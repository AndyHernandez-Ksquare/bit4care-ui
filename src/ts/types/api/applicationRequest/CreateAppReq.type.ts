export interface CreateAppReq {
  time_range: string;
  address: string;
  patient_name: string;
  patient_phone: string;
  clientId: number;
  description: string;
  comments?: string;  // Opcional si no siempre está presente
  amount: number;
  carerId: number;
}