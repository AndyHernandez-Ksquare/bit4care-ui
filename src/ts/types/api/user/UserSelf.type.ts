export interface UserSelf {
  id: number;
  name: string;
  email: string;
  role: string;
  stripeAccountId: number;
  carerId: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}