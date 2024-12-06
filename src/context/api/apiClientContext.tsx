import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import { ClientSelf } from "@/ts/types/api/client";
import { B4CProviderProps } from "@/ts/types/components/B4CProvider.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";
/**  
 * Este contexto sirve para almacenar todos los datos provenientes en la API que necesitemos de manera persistente durante la aplicacion
como la informacion necesaria para hacer updates por ejemplo.
*/

export interface apiClientContextProps {
  getSelfClientData: ClientSelf | null;
  setGetSelfClientData: Dispatch<SetStateAction<ClientSelf | null>>;
  getCareerData: GetOneCarer[] | null;
  setGetCareerData: Dispatch<SetStateAction<GetOneCarer[] | null>>;
  getOneCareerData: GetOneCarer | null;
  setGetOneCareerData: Dispatch<SetStateAction<GetOneCarer | null>>;
}

export const ApiClientContext = createContext<
  apiClientContextProps | undefined
>(undefined);

export const ClientApiProvider = ({ children }: B4CProviderProps) => {
  const [getSelfClientData, setGetSelfClientData] = useState<ClientSelf | null>(
    null,
  );

  const [getCareerData, setGetCareerData] = useState<GetOneCarer[] | null>(
    null,
  );

  const [getOneCareerData, setGetOneCareerData] = useState<GetOneCarer | null>(
    null,
  );
  return (
    <ApiClientContext.Provider
      value={{
        getSelfClientData,
        setGetSelfClientData,
        getCareerData,
        setGetCareerData,
        getOneCareerData,
        setGetOneCareerData,
      }}
    >
      {children}
    </ApiClientContext.Provider>
  );
};

// Hook para acceder al contexto
