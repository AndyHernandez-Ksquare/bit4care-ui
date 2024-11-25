import { createContext, useEffect, useState } from "react";
import { B4CProviderProps } from "@/ts/types/components/B4CProvider.type";
import { useClientSession } from "./constants/useClientSession";

export const ClientAuthContext = createContext({
  isAuthenticated: false,
});

export const ClientAuthProvider = ({ children }: B4CProviderProps) => {
  const { token } = useClientSession();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    // Este efecto se ejecutará solo cuando token cambie
    setIsAuthenticated(!!token);
  }, [token]);

  return (
    <ClientAuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </ClientAuthContext.Provider>
  );
};
