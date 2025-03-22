import { ProviderProps } from "@/ts/types/shared/ProviderProps.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface SessionContextProps {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

export const CollaboratorSessionContext = createContext<
  SessionContextProps | undefined
>(undefined);

export const CollaboratorSessionProvider = ({ children }: ProviderProps) => {
  const [token, setToken] = useState(localStorage.getItem("userToken"));

  return (
    <CollaboratorSessionContext.Provider value={{ token, setToken }}>
      {children}
    </CollaboratorSessionContext.Provider>
  );
};
