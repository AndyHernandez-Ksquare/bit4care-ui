export const maritalStatus = [
  "Soltero(a)",
  "Casado(a)",
  "Divorciado(a)",
  "Viudo(a)",
];

export const maritalStatusOptions = maritalStatus.map((status) => ({
  label: status,
  value: status.toLowerCase(),
}));
