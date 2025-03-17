import { Box, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { FormikErrors } from "formik";
import { CreateAppReq } from "@/ts/types/api/applicationRequest";

export interface Schedule {
  startTime: Dayjs | null;
  endTime: Dayjs | null;
}

interface ScheduleProps {
  mode?: "create" | "edit";
  startDate: string | null;
  endDate: string | null;
  dates: string[];
  schedules: Record<string, Schedule>;
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<void> | Promise<FormikErrors<CreateAppReq>>;
  setDates: React.Dispatch<React.SetStateAction<string[]>>;
  setSchedules: React.Dispatch<React.SetStateAction<Record<string, Schedule>>>;
}

export const ScheduleForm = ({
  mode = "create",
  startDate,
  endDate,
  dates,
  schedules,
  onChange,
  setDates,
  setSchedules,
}: ScheduleProps) => {
  // Verifica que startDate y endDate sean instancias de Dayjs
  const startDateValue = startDate ? dayjs(startDate) : null;
  const endDateValue = endDate ? dayjs(endDate) : null;

  const handleDateChange = (field: string) => (value: Dayjs | null) => {
    onChange(field, value ? value.toISOString() : null);
  };

  // Function to update the schedule (start and end time) for a given date
  const handleScheduleChange = (
    date: string,
    key: keyof Schedule,
    value: Dayjs | null,
  ) => {
    setSchedules((prev) => ({
      ...prev,
      [date]: { ...prev[date], [key]: value },
    }));
  };

  // Effect to generate dates when startDate or endDate changes
  useEffect(() => {
    if (startDate && endDate) {
      const start = dayjs(startDate);
      const end = dayjs(endDate);
      const newDates: string[] = [];
      let current = start;

      // Generate all dates between start and end date
      while (current.isBefore(end) || current.isSame(end, "day")) {
        newDates.push(current.format("YYYY-MM-DD"));
        current = current.add(1, "day");
      }

      // Set the generated dates in state
      setDates(newDates);

      // Initialize the schedules for each date
      setSchedules(
        newDates.reduce((acc: Record<string, Schedule>, date: string) => {
          acc[date] = { startTime: null, endTime: null };
          return acc;
        }, {}),
      );
    } else {
      setDates([]);
      setSchedules({});
    }
  }, [startDate, endDate]);

  useEffect(() => {}, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
        }}
      >
        <DatePicker
          name="start_date"
          label="Fecha inicial"
          value={startDateValue}
          onChange={handleDateChange("start_date")}
          disablePast={mode === "create"}
          sx={{ width: "100%" }}
        />
        —
        <DatePicker
          name="end_date"
          label="Fecha final"
          value={endDateValue}
          onChange={handleDateChange("end_date")}
          minDate={startDateValue ?? undefined}
          sx={{ width: "100%" }}
        />
      </Box>
      {dates.length > 0 && (
        <Box>
          <Typography typography="body-normal-bold">
            Horarios de servicio
          </Typography>
          {dates.map((date) => (
            <Box key={date} sx={{ marginTop: "1rem" }}>
              <Typography typography="body-normal">
                {dayjs(date).format("dddd, D [de] MMMM [del] YYYY")}
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <TimePicker
                  label="Hora de inicio"
                  value={schedules[date]?.startTime || null}
                  onChange={(value) =>
                    handleScheduleChange(date, "startTime", value)
                  }
                  sx={{ width: "100%" }}
                />
                <TimePicker
                  label="Hora de término"
                  value={schedules[date]?.endTime || null}
                  onChange={(value) =>
                    handleScheduleChange(date, "endTime", value)
                  }
                  sx={{ width: "100%" }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};
