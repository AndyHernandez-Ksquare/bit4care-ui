import { createContext, useEffect, useState } from "react";
import { B4CProviderProps } from "@/ts/types/components/B4CProvider.type";
import { useClientSession } from "./constants/useClientSession";
import { ClientSelfService } from "@/services/clientServices/ClientServices";

export const ClientAuthContext = createContext({
  isAuthenticated: false,
});

export const ClientAuthProvider = ({ children }: B4CProviderProps) => {
  const { token } = useClientSession();

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const fetchUser = async () => {
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const data = await ClientSelfService(token);
      setIsAuthenticated(!!data?.id);
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <ClientAuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </ClientAuthContext.Provider>
  );
};
