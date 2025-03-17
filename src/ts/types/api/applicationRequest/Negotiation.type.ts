export interface Negotiation {
  id: number;
  applicationRequestId: number;
  offer_by_client: number;
  caregiver_counter_offer: number;
  final_rate: number;
  status: "IN_PROGRESS" | "COMPLETED" | "REJECTED" | string; // Agrega otros posibles estados si existen
  last_modifier_role: "CARER" | "CLIENT";
  last_modifier_user_id: number;
  carerId: number;
  createdAt: string; // Puede cambiarse a `Date` si se parsea con `new Date()`
  updatedAt: string;
}

export interface NegotiationRequestBody {
  applicationRequestId: number;
  caregiver_counter_offer: number;
}

export interface MakeNegotiationRequestBody {
  offer_by_client: number;
  caregiver_counter_offer: number;
  status: "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
}
