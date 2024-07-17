import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "./CollaboratorSessionContext";
import { ProviderProps } from "@/ts/types/providerprops.type";

const AuthCollaboratorContext = createContext({
  isCollaboratorAuthenticated: true,
});

export const AuthCollaboratorProvider = ({ children }: ProviderProps) => {
  const { token } = useSession();
  const [isCollaboratorAuthenticated, setIsCollaboratorAuthenticated] =
    useState(!!token);

  useEffect(() => {
    // Este efecto se ejecutará solo cuando token cambie
    if (token) {
      setIsCollaboratorAuthenticated(true);
    } else {
      setIsCollaboratorAuthenticated(true);
    }
  }, [token]);

  return (
    <AuthCollaboratorContext.Provider value={{ isCollaboratorAuthenticated }}>
      {children}
    </AuthCollaboratorContext.Provider>
  );
};

export const useCollaboratorAuth = () => useContext(AuthCollaboratorContext);
