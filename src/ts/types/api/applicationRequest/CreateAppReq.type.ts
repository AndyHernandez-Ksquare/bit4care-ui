export interface CreateAppReq {
  address: string;
  patient_name: string;
  patient_phone: string;
  description: string;
  comments: string;
  amount: number;
  start_date: string;
  end_date: string;
  job_interval: number;
  payment_rate: number;
  is_carer_certified: boolean;
  carer_speciality: string;
  carer_years_of_experience: number;
  carer_gender: "Male" | "Female" | ""; // Restricción para que solo pueda ser "Male" o "Female"
  carer_has_driving_license: boolean;
}
