import { ClientSelf } from "@/ts/types/api/client";
import { B4CProviderProps } from "@/ts/types/components/B4CProvider.type";
import { createContext, SetStateAction, useState } from "react";

interface ClientSessionContextProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ClientSessionContext = createContext<
  ClientSessionContextProps | undefined
>(undefined);

export const ClientSessionProvider = ({ children }: B4CProviderProps) => {
  const [token, setToken] = useState(localStorage.getItem("clientToken"));
  return (
    <ClientSessionContext.Provider value={{ token, setToken }}>
      {children}
    </ClientSessionContext.Provider>
  );
};
