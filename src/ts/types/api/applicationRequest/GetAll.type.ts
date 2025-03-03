import { User } from "../shared";

export interface GetAllApplication {
  id: number;
  start_date: Date;
  end_date: Date;
  status: string;
  address: string;
  patient_name: string;
  patient_phone: string;
  clientId: number;
  description: string;
  comments?: string;
  amount: number;
  carerId: number;
  createdAt: string;
  updatedAt: string;
  carer_speciality: string | null;
  carer: {
    description: string;
    User: User;
  } | null;
}
