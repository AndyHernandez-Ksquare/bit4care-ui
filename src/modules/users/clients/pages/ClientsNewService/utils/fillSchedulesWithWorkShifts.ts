import { WorkShift } from "@/ts/types/api/applicationRequest/CreateAppReq.type";
import { Schedule } from "../components/ScheduleForm";
import dayjs from "dayjs";

export const fillSchedulesWithWorkShift = (
  schedules: Record<string, Schedule>,
  workShifts: WorkShift[],
): Record<string, Schedule> => {
  const filledSchedules = { ...schedules };

  workShifts.forEach((shift, index) => {
    const dateKeys = Object.keys(schedules); // Obtener fechas ordenadas

    if (index < dateKeys.length) {
      const date = dateKeys[index]; // Fecha correspondiente en schedules

      // Si startTime o endTime son null, asignamos los valores de WorkShift
      if (!filledSchedules[date].startTime) {
        console.log("shift.start_hour", shift.start_hour);
        filledSchedules[date].startTime = dayjs(shift.start_hour, "HH:mm");
      }
      if (!filledSchedules[date].endTime) {
        filledSchedules[date].endTime = dayjs(shift.end_hour, "HH:mm");
      }
    }
  });

  return filledSchedules;
};
