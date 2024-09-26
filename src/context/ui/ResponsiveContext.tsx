import { ProviderProps } from "@/ts/types/shared/ProviderProps.type";
import { createContext, useState, useEffect, useContext } from "react";

// Definir interfaces para las propiedades y el estado del contexto
interface ResponsiveContextProps {
  isMobile: boolean;
}
// Crear el contexto
const ResponsiveContext = createContext<ResponsiveContextProps | undefined>(
  undefined,
);

export const ResponsiveProvider = ({ children }: ProviderProps) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth / window.innerHeight <= 3 / 4,
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth / window.innerHeight <= 3 / 4);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

// Hook para acceder al contexto
export const useResponsive = (): ResponsiveContextProps => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error(
      "useResponsive debe ser utilizado dentro de un ResponsiveProvider :(",
    );
  }
  return context;
};
