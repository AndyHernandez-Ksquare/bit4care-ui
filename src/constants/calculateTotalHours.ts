export const calculateTotalHours = (timeRange: string) => {
  // Divide el string por " - " para obtener las horas de inicio y fin
  const [start, end] = timeRange.split(" - ");

  // Convierte las horas en minutos desde la medianoche
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  // Calcula la diferencia en horas y minutos
  const startInMinutes = startHour * 60 + startMinute;
  const endInMinutes = endHour * 60 + endMinute;

  // Si el rango de tiempo cruza la medianoche, ajusta la diferencia
  let totalMinutes = endInMinutes - startInMinutes;
  if (totalMinutes < 0) {
    totalMinutes += 24 * 60; // Añade 24 horas si cruza la medianoche
  }

  // Convierte los minutos totales a horas
  return totalMinutes / 60;
};