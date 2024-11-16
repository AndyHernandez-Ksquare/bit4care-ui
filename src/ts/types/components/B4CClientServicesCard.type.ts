import { Status } from "@/ts/types/components";

export interface B4CClientServicesCardProps {
  id: number;
  name: string;
  address: string;
  schedule: string;
  service: string;
  status: Status;
  isAssigned?: boolean;
}