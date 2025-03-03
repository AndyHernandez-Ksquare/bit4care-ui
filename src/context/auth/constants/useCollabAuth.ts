import { useContext } from "react";
import { AuthCollaboratorContext } from "../AuthCollaboratorContext";

export const useCollaboratorAuth = (): {
  isCollaboratorAuthenticated: boolean;
} => useContext(AuthCollaboratorContext);
