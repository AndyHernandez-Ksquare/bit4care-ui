import { createContext, useContext, useEffect, useState } from "react";
import { ProviderProps } from "@/ts/types/shared";
import { useAdminSession } from "../session/AdminSessionContext";
import { UserSelfService } from "@/services/userServices/userServices";

export const AdminAuthContext = createContext({
  isAdminAuthenticated: false,
});

export const AdminAuthProvider = ({ children }: ProviderProps) => {
  const { token } = useAdminSession();
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(!!token);

  const fetchUser = async () => {
    if (!token) {
      setIsAdminAuthenticated(false);
      return;
    }

    try {
      const data = await UserSelfService(token);
      console.log(data);
      setIsAdminAuthenticated(!!data?.id);
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
      setIsAdminAuthenticated(false);
      localStorage.clear();
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <AdminAuthContext.Provider value={{ isAdminAuthenticated }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
