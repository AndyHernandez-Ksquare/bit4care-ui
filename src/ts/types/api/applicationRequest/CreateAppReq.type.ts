export interface CreateAppReq {
  time_range: string;
  address: string;
  patient_name: string;
  patient_phone: string;
  clientId: number;
  description: string;
  comments?: string;
  amount: number;
  carerId: number;
}
