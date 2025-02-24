import { CreateAppReq } from "@/ts/types/api/applicationRequest";

export const initialFormValues: CreateAppReq = {
  address: "",
  patient_name: "",
  patient_phone: "",
  description: "",
  comments: "",
  amount: 0,
  start_date: "",
  end_date: "",
  job_interval: 2,
  payment_rate: 0,
  is_carer_certified: false,
  carer_speciality: "",
  carer_years_of_experience: 0,
  carer_gender: "",
  carer_has_driving_license: false,
  WorkShift: [],
};
