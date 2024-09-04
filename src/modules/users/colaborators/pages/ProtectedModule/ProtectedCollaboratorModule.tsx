import { useCollaboratorAuth } from "@/context/auth/AuthCollaboratorContext";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedCollaboratorModule = () => {
  const { isCollaboratorAuthenticated } = useCollaboratorAuth();
  return isCollaboratorAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/colaboradorLogin" />
  );
};
