import { Status } from "@/ts/types/components";

export interface B4CClientServicesCardProps {
  id: number;
  carerName?: string;
  address: string;
  service: string;
  status: Status;
  isAssigned?: boolean;
}