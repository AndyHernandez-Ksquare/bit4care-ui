export interface StripeAccountLink {
  object: string; // Tipo de objeto, en este caso "account_link"
  created: number; // Fecha de creación como un timestamp (segundos desde 1970)
  expires_at: number; // Fecha de expiración como un timestamp (segundos desde 1970)
  url: string; // URL para el enlace de la cuenta
}
