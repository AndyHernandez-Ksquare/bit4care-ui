import { useContext } from "react";
import { ClientAuthContext } from "../ClientAuthProvider";

export const useClientAuth = (): { isAuthenticated: boolean } =>
  useContext(ClientAuthContext);