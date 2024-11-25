import { ClientSessionContext } from "@/context/session/ClientSessionProvider";
import { useContext } from "react";

export const useClientSession = () => {
  const context = useContext(ClientSessionContext);
  if (!context) {
    throw new Error("use Session must be inside a ClientSessionProvider");
  }
  return context;
};