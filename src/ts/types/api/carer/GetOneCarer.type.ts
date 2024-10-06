export interface Availability {
  [key: string]: boolean; // Permite que las propiedades de disponibilidad sean dinámicas
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  last_login: string;
}

export interface GetOneCarer {
  id: number;
  payment_range: string;
  availability: Availability;
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
  birth_date: string;
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
  license_type: string | null; // Puede ser nulo si no hay licencia
  reviewed: boolean;
  createdAt: string;
  updatedAt: string;
  User: User; // Información del usuario asociada al cuidador
}