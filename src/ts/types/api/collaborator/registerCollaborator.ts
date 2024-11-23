// src/ts/types/api/collaborator.ts

export interface CollaboratorRequest {
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
  birth_date: string;
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
