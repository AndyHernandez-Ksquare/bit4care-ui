import { useContext } from "react";
import { AdminAuthContext } from "../AuthAdminContext";

export const useAdminAuth = (): {
  isAdminAuthenticated: boolean;
} => useContext(AdminAuthContext);
