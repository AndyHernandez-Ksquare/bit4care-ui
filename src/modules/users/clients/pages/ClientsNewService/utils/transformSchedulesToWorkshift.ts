import { WorkShift } from "@/ts/types/api/applicationRequest/CreateAppReq.type";
import { Schedule } from "../components/ScheduleForm";

export const transformSchedulesToWorkShift = (
  schedules: Record<string, Schedule>,
): WorkShift[] => {
  return Object.entries(schedules)
    .filter(([_, schedule]) => schedule.startTime && schedule.endTime) // Filtra las fechas sin horarios
    .map(([date, schedule]) => ({
      start_hour: schedule.startTime!.format("HH:mm"),
      end_hour: schedule.endTime!.format("HH:mm"),
    }));
};
