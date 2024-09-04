import { createContext, useContext, useEffect, useState } from "react";
import { ProviderProps } from "@/ts/types/shared";
import { useAdminSession } from "../session/AdminSessionContext";

const AdminAuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const { token } = useAdminSession();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    // Este efecto se ejecutará solo cuando token cambie
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
