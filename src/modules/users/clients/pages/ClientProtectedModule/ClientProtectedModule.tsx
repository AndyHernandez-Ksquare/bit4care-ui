import { useClientAuth } from "@/context/auth/constants/useClientAuth";
import { Outlet, Navigate } from "react-router-dom";

export const ClientProtectedModule = () => {
  const { isAuthenticated } = useClientAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/cliente/login" />;
};
