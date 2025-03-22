import { useAdminAuth } from "@/context/auth/constants/useAdminAuth";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedAdminModule = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  console.log(isAdminAuthenticated);
  return isAdminAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};
