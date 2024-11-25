import { useContext } from "react";
import { ApiClientContext, apiClientContextProps } from "../apiClientContext";

export const useClientApi = (): apiClientContextProps => {
  const context = useContext(ApiClientContext);
  if (!context) {
    throw new Error("useApi debe ser utilizado dentro de un APIProvider :(");
  }
  return context;
};
