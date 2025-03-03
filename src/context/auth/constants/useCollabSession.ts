import { CollaboratorSessionContext } from "@/context/session/CollaboratorSessionContext";
import { useContext } from "react";

export const useCollaboratorSession = () => {
  const context = useContext(CollaboratorSessionContext);
  if (!context) {
    throw new Error(
      "useCollaboratorSession must be inside a CollaboratorSessionProvider",
    );
  }
  return context;
};
