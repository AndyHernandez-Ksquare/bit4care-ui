import { GetAllApplication } from "@/ts/types/api/applicationRequest";

// Función de mock data que simula la llamada al endpoint
export const MockGetAllApplicationRequests = async (): Promise<
  GetAllApplication[]
> => {
  // Simula un retraso como el que tendría una solicitud HTTP real
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Devuelve un conjunto de datos de prueba
  return [
    // {
    //   id: 1,
    //   time_range: "09:00 - 12:00",
    //   status: "solicitado",
    //   address: "123 Main St, City",
    //   patient_name: "John Doe",
    //   patient_phone: "555-1234",
    //   clientId: 101,
    //   description: "Morning checkup",
    //   comments: "Patient prefers mornings",
    //   amount: 150,
    //   carerId: 201,
    //   createdAt: new Date().toISOString(),
    //   updatedAt: new Date().toISOString(),
    // },
    // {
    //   id: 2,
    //   time_range: "14:00 - 16:00",
    //   status: "aceptado",
    //   address: "456 Elm St, City",
    //   patient_name: "Jane Smith",
    //   patient_phone: "555-5678",
    //   clientId: 102,
    //   description: "Afternoon care session",
    //   amount: 200,
    //   carerId: 202,
    //   createdAt: new Date().toISOString(),
    //   updatedAt: new Date().toISOString(),
    // },
    // {
    //   id: 3,
    //   time_range: "08:00 - 09:00",
    //   status: "realizado",
    //   address: "789 Oak St, City",
    //   patient_name: "Alice Johnson",
    //   patient_phone: "555-9876",
    //   clientId: 103,
    //   description: "Early morning follow-up",
    //   amount: 120,
    //   carerId: 203,
    //   createdAt: new Date().toISOString(),
    //   updatedAt: new Date().toISOString(),
    // }
  ];
};
