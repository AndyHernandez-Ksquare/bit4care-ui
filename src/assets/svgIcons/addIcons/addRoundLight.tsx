import React from "react";

interface IIconProps {
  sx?: React.CSSProperties;
}

export const addRoundLight = ({ sx }: IIconProps) => {
  const defaultStyles: React.CSSProperties = {
    // Define aquí los estilos por defecto que desees
    // Por ejemplo:
    stroke: "white",
    width: "24px",
    height: "24px",
  };

  // Combinar los estilos por defecto con los estilos proporcionados por el usuario
  const combinedStyles = { ...defaultStyles, ...sx };
  return (
    <svg
      style={combinedStyles}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={combinedStyles.stroke}
        d="M12 0L12 24"
        stroke-linecap="round"
      />
      <path
        stroke={combinedStyles.stroke}
        d="M24 12L0 12"
        stroke-linecap="round"
      />
    </svg>
  );
};
