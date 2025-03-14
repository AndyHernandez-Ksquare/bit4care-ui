import { Status } from "@/ts/types/components";

export interface B4CClientServicesCardProps {
  id: number;
  carerId: number | null;
  carerName?: string;
  address: string;
  service: string;
  status: Status;
  isAssigned?: boolean;
  startDate: Date;
  endDate: Date;
  carerSpecialty?: string | null;
  amount: number;
  carerDescription: string | undefined;
}
