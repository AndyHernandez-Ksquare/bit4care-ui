export interface GetOneApplication {
  id: number;
  status: string;
  address: string;
  patient_name: string;
  patient_phone: string;
  clientId: number;
  description: string;
  comments: string;
  amount: number;
  carerId: number;
  start_date: string; // Puede convertirse a Date si lo prefieres
  end_date: string;
  job_interval: number;
  payment_rate: number;
  suggested_rate: number;
  commision: number;
  commision_percentage: string; // Si siempre es un número, podría ser `number`
  is_paid: boolean;
  is_carer_certified: boolean;
  completed_at: string | null; // Puede ser `null` si aún no está completado
  payment_due: string;
  carer_speciality: string | null;
  carer_years_of_experience: number | null;
  carer_gender: string | null;
  carer_has_driving_license: boolean | null;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
  Negotiation: Negotiation[] | null; // Si tiene una estructura específica, se debe tipar mejor
  Complaint: any[];
  WorkShift: {
    id: number;
    start_hour: string;
    end_hour: string;
    applicationRequestId: number;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface Negotiation {
  id: number;
  applicationRequestId: number;
  offer_by_client: number;
  caregiver_counter_offer: number;
  final_rate: number;
  status: "IN_PROGRESS" | "COMPLETED" | "REJECTED" | string; // Ajusta según los posibles estados
  last_modifier_user_id: number;
  carerId: number;
  createdAt: string; // Fecha en formato ISO
  updatedAt: string; // Fecha en formato ISO
}
