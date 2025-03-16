import { Negotiation } from "../api/applicationRequest";

export type Status =
  | "pending"
  | "accepted"
  | "realizado"
  | "no realizado"
  | "active_negotiation";

export interface ColaboratorsServicesCardProps {
  id: string;
  name: string;
  address: string;
  fee: number;
  schedule: string;
  hours: number;
  service: string;
  status: Status;
  skills: string[];
  comments: string;
  b4cfee?: number;
  profile_picture_url?: string;
  isAssigned?: boolean;
  negotiation?: Negotiation[] | null;
  onClick?: () => void;
}
