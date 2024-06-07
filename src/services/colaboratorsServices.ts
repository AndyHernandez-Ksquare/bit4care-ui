import { acceptedUsersMockData } from "@/constants/mockData/colaborators";
import { unacceptedUsersMockData } from "@/constants/mockData/colaborators";

// Definimos una interfaz para el tipo de dato de usuario
export interface User {
  id: number;
  name: string;
  email: string;
  registrationDate: string;
  profileImg: string | null;
  roleId: string;
  carrerProfile: {
    motivationLetter?: string;
    totalServices: number,
    reviews: number,
    stars: number,
    expYears: number,
    speciality: string,
    qualifications: { name: string }[]
  }
}

// Definimos una interfaz para el tipo de dato de respuesta de la API

// Función para simular la llamada a la API
// Función para simular la llamada al endpoint de usuarios aceptados
export const getAcceptedUsers = (): Promise<User[]> => {
  // Simulamos un tiempo de espera para simular la llamada a la API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(acceptedUsersMockData);
    }, 500); // Simulamos un tiempo de espera de 500ms
  });
};

// Función para simular la llamada al endpoint de usuarios no aceptados
export const getUnacceptedUsers = (): Promise<User[]> => {
  // Simulamos un tiempo de espera para simular la llamada a la API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(unacceptedUsersMockData);
    }, 500); // Simulamos un tiempo de espera de 500ms
  });
};
