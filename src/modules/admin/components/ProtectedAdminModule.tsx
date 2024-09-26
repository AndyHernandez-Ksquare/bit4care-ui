import { useAdminAuth } from "@/context/auth/AuthAdminContext";

import { Outlet, Navigate } from "react-router-dom";

export const ProtectedModule = () => {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
