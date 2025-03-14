import dayjs from "dayjs";

export const formatDateOnly = (isoDate: string) => {
  return dayjs(isoDate).format("D [de] MMMM [de] YYYY"); // Ejemplo: "9 de marzo de 2025"
};
