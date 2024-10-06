export interface Availability {
  [key: string]: boolean;
}

export interface CarerReview {
  id: number;
  stars: number;
  comment: string;
  carerId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetCarersWithFavorites {
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
  license_type: string | null;
  reviewed: boolean;
  createdAt: string;
  updatedAt: string;
  favoriteCarers: unknown[];  // Dependiendo del tipo de datos, puedes ajustar esto
  carerReviews: CarerReview[];
}