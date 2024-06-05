import { User } from "@/services/colaboratorsServices";

export const acceptedUsersMockData: User[] = [
  {
    id: 1,
    name: "Aioria of Leo",
    email: "aioria@example.com",
    registrationDate: "2024-04-25",
    roleId: "Cuidador", // Collaborator role ID
    profileImg: "https://randomuser.me/api/portraits/med/men/75.jpg",
    carrerProfile: {
      totalServices: 234,
      reviews: 32,
      stars: 4,
      expYears: 3,
      speciality: 'Experta en adultos mayores',
      qualifications: [
        { name: 'Acompanamiento a citas medicas' },
        { name: 'manejo de medicamentos' },
        { name: 'Despensa/compras del hogar' }
      ]
    }
  },
  {
    id: 2,
    name: "Aldebaran of Taurus",
    email: "aldebaran@example.com",
    registrationDate: "2024-04-26",
    roleId: "Cuidador", // Client role ID
    profileImg: null,
    carrerProfile: {
      totalServices: 5,
      reviews: 1,
      stars: 5,
      expYears: 1,
      speciality: 'Cuidado de niños',
      qualifications: [
        { name: 'Primeros auxilios' },
        { name: 'Actividades educativas' }
      ]
    }
  },
  {
    id: 3,
    name: "Saga of Gemini",
    email: "saga@example.com",
    registrationDate: "2024-04-27",
    roleId: "Cuidador", // Collaborator role ID
    profileImg: "https://randomuser.me/api/portraits/med/men/23.jpg",
    carrerProfile: {
      totalServices: 120,
      reviews: 20,
      stars: 3,
      expYears: 5,
      speciality: 'Cuidado de mascotas',
      qualifications: [
        { name: 'Entrenamiento básico' },
        { name: 'Cuidado diario' }
      ]
    }
  },
  {
    id: 4,
    name: "Death Mask of Cancer",
    email: "death_mask@example.com",
    registrationDate: "2024-04-28",
    roleId: "Cuidador", // Client role ID
    profileImg: null,
    carrerProfile: {
      totalServices: 8,
      reviews: 2,
      stars: 4,
      expYears: 2,
      speciality: 'Cuidado postoperatorio',
      qualifications: [
        { name: 'Asistencia médica' },
        { name: 'Rehabilitación' }
      ]
    }
  },
  {
    id: 5,
    name: "Aiolos of Sagittarius",
    email: "aiolos@example.com",
    registrationDate: "2024-04-29",
    roleId: "Cuidador", // Collaborator role ID
    profileImg: "https://randomuser.me/api/portraits/med/women/65.jpg",
    carrerProfile: {
      totalServices: 150,
      reviews: 25,
      stars: 5,
      expYears: 4,
      speciality: 'Cuidado de personas con discapacidad',
      qualifications: [
        { name: 'Movilización' },
        { name: 'Asistencia en la vida diaria' }
      ]
    }
  },
  {
    id: 6,
    name: "Shura of Capricorn",
    email: "shura@example.com",
    registrationDate: "2024-04-30",
    roleId: "Cuidador", // Client role ID
    profileImg: null,
    carrerProfile: {
      totalServices: 2,
      reviews: 1,
      stars: 3,
      expYears: 1,
      speciality: 'Asistencia en tareas del hogar',
      qualifications: [
        { name: 'Limpieza' },
        { name: 'Cocina' }
      ]
    }
  },
  {
    id: 7,
    name: "Camus of Aquarius",
    email: "camus@example.com",
    registrationDate: "2024-05-01",
    roleId: "Cuidador", // Collaborator role ID
    profileImg: null,
    carrerProfile: {
      totalServices: 80,
      reviews: 15,
      stars: 4,
      expYears: 3,
      speciality: 'Cuidado infantil',
      qualifications: [
        { name: 'Cuidado de bebés' },
        { name: 'Actividades recreativas' }
      ]
    }
  },
  {
    id: 8,
    name: "Shaka of Virgo",
    email: "shaka@example.com",
    registrationDate: "2024-05-02",
    roleId: "Cuidador", // Client role ID
    profileImg: null,
    carrerProfile: {
      totalServices: 10,
      reviews: 3,
      stars: 2,
      expYears: 1,
      speciality: 'Cuidados paliativos',
      qualifications: [
        { name: 'Manejo del dolor' },
        { name: 'Apoyo emocional' }
      ]
    }
  },
  {
    id: 9,
    name: "Dohko of Libra",
    email: "dohko@example.com",
    registrationDate: "2024-05-03",
    roleId: "Cuidador", // Collaborator role ID
    profileImg: "https://randomuser.me/api/portraits/med/men/80.jpg",
    carrerProfile: {
      totalServices: 50,
      reviews: 10,
      stars: 4,
      expYears: 2,
      speciality: 'Rehabilitación física',
      qualifications: [
        { name: 'Ejercicios terapéuticos' },
        { name: 'Masajes' }
      ]
    }
  },
  {
    id: 10,
    name: "Milo of Scorpio",
    email: "milo@example.com",
    registrationDate: "2024-05-04",
    roleId: "Cuidador",
    profileImg: null,
    carrerProfile: {
      totalServices: 4,
      reviews: 1,
      stars: 3,
      expYears: 1,
      speciality: 'Apoyo en la movilidad',
      qualifications: [
        { name: 'Uso de sillas de ruedas' },
        { name: 'Ejercicios de movilidad' }
      ]
    }
  },
];

export const unacceptedUsersMockData: User[] = [
  {
    id: 11,
    name: "Shiryu of Dragon",
    email: "shiryu@example.com",
    registrationDate: "2024-05-05",
    roleId: 'cuidador', // Client role ID
    profileImg: null,
    carrerProfile: {
      motivationLetter: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam dolorum impedit maiores illum, ex, voluptatibus dolor numquam error dolorem corrupti aliquam totam architecto accusamus sit. Dolor saepe explicabo vel!',
      totalServices: 120,
      reviews: 20,
      stars: 4,
      expYears: 5,
      speciality: 'Cuidado de mascotas',
      qualifications: [
        { name: 'Entrenamiento básico' },
        { name: 'Cuidado diario' }
      ]
    }
  },
  {
    id: 12,
    name: "Hyoga of Cygnus",
    email: "hyoga@example.com",
    registrationDate: "2024-05-06",
    roleId: "Pepenador", // Collaborator role ID
    profileImg: null,
    carrerProfile: {
      totalServices: 100,
      reviews: 18,
      stars: 3,
      expYears: 4,
      speciality: 'Cuidado de mascotas',
      qualifications: [
        { name: 'Entrenamiento avanzado' },
        { name: 'Cuidado especializado' }
      ]
    }
  },
  {
    id: 13,
    name: "Ikki of Phoenix",
    email: "ikki@example.com",
    registrationDate: "2024-05-07",
    roleId: "Pepenador", // Collaborator role ID
    profileImg: null,
    carrerProfile: {
      motivationLetter: 'Antes de ponerte a diseñar el inicio de capítulo debes de elegir el tamaño de tu libro y definir los márgenes de la página, el espacio que te queda descontando los márgenes e lo que llamamos caja de texto o mancha de texto, ahí es donde vamos a escribir y diseñar el contenido de nuestro libro.',
      totalServices: 130,
      reviews: 25,
      stars: 5,
      expYears: 6,
      speciality: 'Adiestramiento de mascotas',
      qualifications: [
        { name: 'Adiestramiento avanzado' },
        { name: 'Cuidados especiales' }
      ]
    }
  },
  {
    id: 14,
    name: "Seiya of Pegasus",
    email: "seiya@example.com",
    registrationDate: "2024-05-08",
    roleId: "Pepenador", // Collaborator role ID
    profileImg: null,
    carrerProfile: {
      motivationLetter: 'El objetivo es conseguir un resultado armónico que facilite la lectura y compresión del texto sin saturar la vista al lector ni despistarlo con adornos superfluos. Puedes hacerlo tu mismo o contar con nuestra ayuda.',
      totalServices: 90,
      reviews: 15,
      stars: 4,
      expYears: 3,
      speciality: 'Cuidado de mascotas',
      qualifications: [
        { name: 'Entrenamiento básico' },
        { name: 'Cuidado diario' }
      ]
    }
  },
  {
    id: 15,
    name: "Shun of Andromeda",
    email: "shun@example.com",
    registrationDate: "2024-05-09",
    roleId: "Pepenador", // Collaborator role ID
    profileImg: null,
    carrerProfile: {
      motivationLetter: "El inicio de los capítulos de un libro siempre es en página derecha, eso lo sabemos todos, pero hay  más trucos que te ayudarán a que tu libros tenga un acabado profesional. Son reglas básicas fruto de la costumbre pero que han demostrado ser eficaces a lo largo de la historia.",
      totalServices: 110,
      reviews: 22,
      stars: 4,
      expYears: 5,
      speciality: 'Cuidado de mascotas',
      qualifications: [
        { name: 'Entrenamiento avanzado' },
        { name: 'Cuidado diario' }
      ]
    }
  },
];

