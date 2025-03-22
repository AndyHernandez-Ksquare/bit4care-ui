import { ProviderProps } from "@/ts/types/shared";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SessionContextProps {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined,
);

export const AdminSessionProvider = ({ children }: ProviderProps) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  return (
    <SessionContext.Provider value={{ token, setToken }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useAdminSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("use Session must be inside a SessionProvider");
  }
  return context;
};
