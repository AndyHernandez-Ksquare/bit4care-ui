export interface IAnswers {
  answer: string;
  points: number;
}
export interface IQuestion {
  question: string;
  answers: IAnswers[];
}

export const questions: IQuestion[] = [
  {
    question: "¿Qué harías si un cliente no está satisfecho con tu trabajo?",

    answers: [
      {
        answer: "Ofrecer soluciones y mejorar mis servicios",
        points: 10,
      },
      {
        answer: "Ignorar la queja",
        points: 0,
      },
      {
        answer: "Discutir con el cliente",
        points: 2,
      },
      {
        answer: "Pedir disculpas y ofrecer un reembolso o buscar ayuda",
        points: 5,
      },
    ],
  },
  {
    question: "¿Cómo manejas tu tiempo durante una tarea importante?",
    answers: [
      {
        answer: "Priorizo y planifico antes de empezar",
        points: 10,
      },
      {
        answer: "Trabajo conforme surjan las tareas",
        points: 5,
      },
      {
        answer: "Espero instrucciones adicionales",
        points: 3,
      },
      {
        answer: "Me distraigo con otras tareas",
        points: 0,
      },
    ],
  },
  {
    question:
      "¿Cómo reaccionas si surge un problema inesperado durante tu trabajo?",
    answers: [
      {
        answer: "Busco una solución inmediata",
        points: 10,
      },
      {
        answer: "Me detengo a esperar por instrucciones",
        points: 5,
      },
      {
        answer: "Me rindo",
        points: 0,
      },
      {
        answer: "Abandono la tarea",
        points: 2,
      },
    ],
  },
  {
    question: "¿Qué haces si no entiendes las instrucciones de un cliente?",
    answers: [
      {
        answer: "Pido aclaraciones para asegurarme de entender",
        points: 10,
      },
      {
        answer: "Sigo trabajando con dudas",
        points: 2,
      },
      {
        answer: "Ignoro las instrucciones",
        points: 0,
      },
      {
        answer: "Pido ayuda",
        points: 5,
      },
    ],
  },
  {
    question: "¿Qué tan importante es la puntualidad para ti?",
    answers: [
      {
        answer: "Muy importante",
        points: 10,
      },
      {
        answer: "Importante",
        points: 5,
      },
      {
        answer: "Es indiferente",
        points: 2,
      },
      {
        answer: "No me importa",
        points: 0,
      },
    ],
  },
  {
    question: "¿Cómo manejas un equipo o herramientas dañadas?",
    answers: [
      {
        answer: "Informo al supervisor y busco soluciones",
        points: 10,
      },
      {
        answer: "Sigo trabajando con las herramientas dañadas",
        points: 2,
      },
      {
        answer: "Detengo el trabajo y busco ayuda",
        points: 5,
      },
      {
        answer: "Ignoro el problema",
        points: 0,
      },
    ],
  },
  {
    question: "¿Cómo manejas el estrés en un entorno laboral?",
    answers: [
      {
        answer: "Me enfoco en el problema y trabajo en resolverlo",
        points: 10,
      },
      {
        answer: "Pierdo la calma y afecta mi desempeño",
        points: 2,
      },
      {
        answer: "Delego mi trabajo a otros",
        points: 3,
      },
      {
        answer: "Trato de mantener la calma",
        points: 6,
      },
    ],
  },
  {
    question: "¿Qué harías si notas que algo está mal en tu área de trabajo?",
    answers: [
      {
        answer: "Informo al cliente o supervisor y busco arreglarlo",
        points: 10,
      },
      {
        answer: "Ignoro el problema si no me afecta",
        points: 1,
      },
      {
        answer: "Trato de solucionarlo sin avisar",
        points: 7,
      },
      {
        answer: "Espero que alguien más lo resuelva",
        points: 3,
      },
    ],
  },
  {
    question: "¿Qué haces si necesitas aprender algo nuevo para tu trabajo?",
    answers: [
      {
        answer: "Busco información o entrenamiento por mi cuenta",
        points: 10,
      },
      {
        answer: "Evito las tareas que no entiendo",
        points: 2,
      },
      {
        answer: "Pido ayuda o capacitación adicional",
        points: 8,
      },
      {
        answer: "Intento improvisar",
        points: 4,
      },
    ],
  },
  {
    question: "¿Cómo manejas los conflictos con compañeros de trabajo?",
    answers: [
      {
        answer: "Busco resolverlos de manera calmada y profesional",
        points: 10,
      },
      {
        answer: "Los ignoro y trato de evitarlos",
        points: 3,
      },
      {
        answer: "Discuto hasta resolver",
        points: 5,
      },
      {
        answer: "Escalo el conflicto sin buscar soluciones",
        points: 0,
      },
    ],
  },
  {
    question: "¿Cómo organizas tu espacio de trabajo antes de comenzar?",
    answers: [
      {
        answer: "Limpio y organizo para evitar problemas",
        points: 10,
      },
      {
        answer: "Solo organizo lo básico",
        points: 5,
      },
      {
        answer: "No presto atención al orden",
        points: 2,
      },
      {
        answer: "Dejo que otros lo organicen por mí",
        points: 0,
      },
    ],
  },
  {
    question: "¿Qué haces si no tienes la herramienta adecuada para una tarea?",
    answers: [
      {
        answer: "Informo y busco soluciones alternativas",
        points: 10,
      },
      {
        answer: "Uso herramientas inadecuadas aunque no sea seguro",
        points: 2,
      },
      {
        answer: "Dejo la tarea sin terminar",
        points: 1,
      },
      {
        answer: "Pido ayuda",
        points: 8,
      },
    ],
  },
  {
    question: "¿Qué tan bien sigues un plan o proyecto detallado?",
    answers: [
      {
        answer: "Me apego al plan siempre que sea posible",
        points: 10,
      },
      {
        answer: "Sigo el plan pero hago ajustes por mi cuenta",
        points: 7,
      },
      {
        answer: "Prefiero improvisar",
        points: 4,
      },
      {
        answer: "No sigo planes",
        points: 0,
      },
    ],
  },
  {
    question: "¿Cómo verificas la calidad de tu trabajo antes de entregarlo?",
    answers: [
      {
        answer: "Reviso cada detalle y aseguro que cumpla con los estándares",
        points: 10,
      },
      {
        answer: "Hago una revisión rápida sin mucho detalle",
        points: 5,
      },
      {
        answer: "No reviso",
        points: 0,
      },
      {
        answer: "Dependo de que el cliente lo note",
        points: 2,
      },
    ],
  },
  {
    question:
      "¿Qué haces si un cliente cambia las instrucciones a mitad del trabajo?",
    answers: [
      {
        answer: "Escucho y adapto el trabajo según las nuevas instrucciones",
        points: 10,
      },
      {
        answer: "Termino según las instrucciones originales",
        points: 4,
      },
      {
        answer: "Ignoro los cambios",
        points: 0,
      },
      {
        answer: "Espero más aclaraciones",
        points: 6,
      },
    ],
  },
  {
    question: "¿Qué harías si tienes múltiples tareas al mismo tiempo?",
    answers: [
      {
        answer: "Priorizo según la urgencia y la importancia",
        points: 10,
      },
      {
        answer: "Intento hacer todo a la vez",
        points: 4,
      },
      {
        answer: "Trabajo en una sola tarea y dejo las otras para después",
        points: 6,
      },
      {
        answer: "Me siento abrumado",
        points: 2,
      },
    ],
  },
  {
    question:
      "¿Qué tan dispuesto estás a recibir críticas constructivas sobre tu trabajo?",
    answers: [
      {
        answer: "Las acepto y uso para mejorar",
        points: 10,
      },
      {
        answer: "Las acepto, pero no siempre hago cambios",
        points: 6,
      },
      {
        answer: "Me siento incómodo con las críticas",
        points: 3,
      },
      {
        answer: "Rechazo cualquier crítica",
        points: 0,
      },
    ],
  },
  {
    question: "¿Cómo manejas el uso de recursos o materiales del cliente?",
    answers: [
      {
        answer: "Los uso con cuidado y optimización",
        points: 10,
      },
      {
        answer: "Uso más de lo necesario para asegurar resultados",
        points: 5,
      },
      {
        answer: "No presto atención al desperdicio",
        points: 2,
      },
      {
        answer: "Uso sin consultar",
        points: 0,
      },
    ],
  },
  {
    question: "¿Qué haces si no estás seguro de cómo completar una tarea?",
    answers: [
      {
        answer: "Pido ayuda o asesoría",
        points: 10,
      },
      {
        answer: "Trato de resolverlo por mi cuenta aunque pueda equivocarme",
        points: 5,
      },
      {
        answer: "Dejo la tarea incompleta",
        points: 1,
      },
      {
        answer: "Ignoro la tarea",
        points: 0,
      },
    ],
  },
  {
    question: "¿Cómo te aseguras de comprender las expectativas del cliente?",
    answers: [
      {
        answer: "Escucho atentamente y hago preguntas claras",
        points: 10,
      },
      {
        answer: "Supongo que entiendo lo que necesita sin preguntar",
        points: 2,
      },
      {
        answer: "Espero instrucciones detalladas",
        points: 4,
      },
      {
        answer: "No me preocupo",
        points: 0,
      },
    ],
  },
  {
    question:
      "¿Qué harías si un cliente solicita un servicio en un área que no dominas?",
    answers: [
      {
        answer: "Informo que no tengo experiencia y busco alternativas",
        points: 10,
      },
      {
        answer: "Acepto el trabajo sin ser honesto sobre mis habilidades",
        points: 0,
      },
      {
        answer: "Rechazo la solicitud",
        points: 4,
      },
      {
        answer: "Intento hacerlo",
        points: 2,
      },
    ],
  },
  {
    question: "¿Qué haces si terminas una tarea antes de lo esperado?",
    answers: [
      {
        answer: "Ofrezco verificar si hay algo adicional que puedo hacer",
        points: 10,
      },
      {
        answer: "Me retiro sin verificar nada más",
        points: 5,
      },
      {
        answer: "Espero instrucciones adicionales",
        points: 6,
      },
      {
        answer: "No hago nada más",
        points: 2,
      },
    ],
  },
  {
    question:
      "¿Cómo manejas situaciones en las que necesitas trabajar bajo presión?",
    answers: [
      {
        answer: "Me mantengo enfocado y priorizo las tareas",
        points: 10,
      },
      {
        answer: "Me estreso pero trato de cumplir",
        points: 6,
      },
      {
        answer: "Trabajo lentamente y no cumplo con los tiempos",
        points: 2,
      },
      {
        answer: "Me bloqueo",
        points: 0,
      },
    ],
  },
  {
    question: "¿Qué harías si otro proveedor tiene una mejor oferta que tú?",
    answers: [
      {
        answer: "Evalúo mis fortalezas y busco mejorar mi oferta",
        points: 10,
      },
      {
        answer: "Me preocupo pero no hago nada al respecto",
        points: 4,
      },
      {
        answer: "Critico al otro proveedor",
        points: 1,
      },
      {
        answer: "No me importa la competencia",
        points: 2,
      },
    ],
  },
  {
    question: "¿Cómo reaccionas si un cliente solicita algo fuera de lo común?",
    answers: [
      {
        answer: "Analizo la solicitud y evalúo si puedo cumplirla",
        points: 10,
      },
      {
        answer: "Acepto cualquier solicitud sin considerar si puedo hacerla",
        points: 4,
      },
      {
        answer: "Niego la solicitud sin explicaciones",
        points: 2,
      },
      {
        answer: "Ignoro la solicitud",
        points: 0,
      },
    ],
  },
];
