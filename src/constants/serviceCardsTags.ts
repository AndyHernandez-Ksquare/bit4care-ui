export const statusTagInfo: {
  [key: string]: { color: string; label: string };
} = {
  pending: { color: "warning", label: "Solicitado" },
  realizado: { color: "success", label: "Realizado" },
  accepted: { color: "success", label: "Aceptado" },
  active_negotiation: { color: "info", label: "En negociación" },
  active: { color: "success", label: "Agendado" },
  completed: { color: "info", label: "Finalizado" },
};
