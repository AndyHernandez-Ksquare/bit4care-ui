export type Status = "pending" | "accepted" | "realizado" | "no realizado";

export interface ColaboratorsServicesCardProps {
  name: string;
  address: string;
  fee: string;
  schedule: string;
  hours: number;
  service: string;
  status: Status;
  skills: string[];
  isAssigned?: boolean;
  onClick?: () => void;
}