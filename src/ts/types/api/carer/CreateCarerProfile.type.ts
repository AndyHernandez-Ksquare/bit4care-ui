export interface NewCareProfileRequest {
  name: string;
  email: string;
  password: string;
  payment_range: string;
  availability: string;
  qualifications: string;
  address: string;
  works_on_weekend: boolean;
  residency_status: string;
  years_of_experience: number;
  birth_date: string; // Formato YYYY-MM-DD
  gender: string;
  postal_code: string;
  colony: string;
  state: string;
  nationality: string;
  marital_status: string;
  CURP: string;
  RFC: string;
  NSS: string;
  speciality: string;
  motivation_letter: string;
  test_score: number;
  has_driving_license: boolean;
  description: string;
  creation_step: number;
}

export interface NewCarerProfileResponse {
  id: number;
  name: string;
  email: string;
  address: string;
  role: string;
  carer: CarerDetails;
}

export interface CarerDetails {
  id: number;
  payment_range: string;
  availability: string;
  qualifications: string;
  residency_status: string;
  years_of_experience: number;
  speciality: string;
  motivation_letter: string;
  test_score: number;
  is_active: boolean;
  worked_hours: number;
  description: string;
  completed_services: number;
  birth_date: string; // Formato YYYY-MM-DD
  gender: string;
  postal_code: string;
  colony: string;
  state: string;
  nationality: string;
  marital_status: string;
  is_approved: boolean;
  CURP: string;
  RFC: string;
  NSS: string;
  has_driving_license: boolean;
  license_type: string | null;
  reviewed: boolean;
  creation_step: number;
  verified_profession: boolean;
  createdAt: string; // Formato ISO 8601
  updatedAt: string; // Formato ISO 8601
}
