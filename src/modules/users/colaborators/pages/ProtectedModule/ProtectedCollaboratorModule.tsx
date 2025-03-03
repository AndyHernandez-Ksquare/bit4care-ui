import { useCollaboratorAuth } from "@/context/auth/constants/useCollabAuth";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedCollaboratorModule = () => {
  const { isCollaboratorAuthenticated } = useCollaboratorAuth();
  return isCollaboratorAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/colaborador/login" />
  );
};
