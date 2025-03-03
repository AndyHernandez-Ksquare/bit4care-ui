import { createContext, useEffect, useState } from "react";
import { ProviderProps } from "@/ts/types/shared/ProviderProps.type";
import { GetSelfCollab } from "@/services/careerServices/CareerServices";
import { useCollaboratorSession } from "./constants/useCollabSession";

export const AuthCollaboratorContext = createContext({
  isCollaboratorAuthenticated: true,
});

export const AuthCollaboratorProvider = ({ children }: ProviderProps) => {
  const { token } = useCollaboratorSession();
  const [isCollaboratorAuthenticated, setIsCollaboratorAuthenticated] =
    useState(!!token);

  const fetchUser = async () => {
    if (!token) {
      setIsCollaboratorAuthenticated(false);
      return;
    }

    try {
      const data = await GetSelfCollab(token);
      setIsCollaboratorAuthenticated(!!data);
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
      setIsCollaboratorAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <AuthCollaboratorContext.Provider value={{ isCollaboratorAuthenticated }}>
      {children}
    </AuthCollaboratorContext.Provider>
  );
};
