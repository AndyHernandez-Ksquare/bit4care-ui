import { Status } from "@/ts/types/components";

export interface B4CClientServicesCardProps {
  name: string;
  address: string;
  fee: string;
  schedule: string;
  hours: number;
  service: string;
  status: Status;
  isAssigned?: boolean;
}