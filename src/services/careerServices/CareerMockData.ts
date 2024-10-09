import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";

// Función de mock data que simula la llamada al endpoint
export const MockGetAllCarerRequests = async (): Promise<GetOneCarer[]> => {
  // Simula un retraso como el que tendría una solicitud HTTP real
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Devuelve un conjunto de datos de prueba
  return [
    {
      id: 1,
      payment_range: "$15 - $20",
      availability: { "Monday": true, "Tuesday": false, "Wednesday": true },
      qualifications: "Certified Caregiver",
      residency_status: "Permanent Resident",
      years_of_experience: 5,
      speciality: "Elderly Care",
      motivation_letter: "I am passionate about helping the elderly live fulfilling lives.",
      test_score: 85,
      is_active: true,
      worked_hours: 120,
      description: "Experienced in elderly care with strong communication skills.",
      completed_services: 30,
      birth_date: "1990-05-15",
      gender: "Female",
      postal_code: "12345",
      colony: "Main Colony",
      state: "Stateville",
      nationality: "American",
      marital_status: "Single",
      is_approved: true,
      CURP: "CURP123456789",
      RFC: "RFC987654321",
      NSS: "NSS123456789",
      has_driving_license: true,
      license_type: "B",
      reviewed: true,
      createdAt: "2024-10-07T00:06:54.126Z",
      updatedAt: "2024-09-30T05:06:54.126Z",
      carerReviews: [
        {
          id: 1,
          stars: 4,
          comment: "Great experience",
          carerId: 1,
          createdAt: "2024-09-08T05:06:54.126Z",
          updatedAt: "2023-10-08T05:06:54.126Z",
        },
        {
          id: 2,
          stars: 5,
          comment: "Excellent service, highly recommend.",
          carerId: 1,
          createdAt: "2024-01-07T00:06:54.126Z",
          updatedAt: "2024-02-30T05:06:54.126Z",
        },
        {
          id: 3,
          stars: 2,
          comment: "Excellent service, highly recommend. Great attention",
          carerId: 1,
          createdAt: "2024-09-07T00:06:54.126Z",
          updatedAt: "2024-05-30T05:06:54.126Z",
        },
        {
          id: 4,
          stars: 2,
          comment: "Excellent service, but there were some bad things",
          carerId: 1,
          createdAt: "2023-10-07T00:06:54.126Z",
          updatedAt: "2026-09-30T05:06:54.126Z",
        }
      ],
      User: {
        id: 101,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "555-1234",
        last_login: new Date().toISOString(),
      }
    },
    {
      id: 2,
      payment_range: "$10 - $15",
      availability: { "Monday": true, "Thursday": true },
      qualifications: "Home Care Specialist",
      residency_status: "Temporary Resident",
      years_of_experience: 3,
      speciality: "Child Care",
      motivation_letter: "I have a natural talent for connecting with children.",
      test_score: 90,
      is_active: true,
      worked_hours: 80,
      description: "Focused on creating a nurturing environment for children.",
      completed_services: 15,
      birth_date: "1992-08-20",
      gender: "Male",
      postal_code: "54321",
      colony: "Child Care Colony",
      state: "Statetown",
      nationality: "Mexican",
      marital_status: "Married",
      is_approved: true,
      CURP: "CURP234567891",
      RFC: "RFC876543210",
      NSS: "NSS234567891",
      has_driving_license: false,
      license_type: null, // No license
      reviewed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      carerReviews: [], // Sin reseñas
      User: {
        id: 102,
        name: "John Smith",
        email: "john.smith@example.com",
        phone: "555-5678",
        last_login: new Date().toISOString(),
      }
    }
  ];
};