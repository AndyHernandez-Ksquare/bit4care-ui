import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box } from "@mui/material";
import React from "react";

export const B4CServiceSpecs = () => {
  return (
    <Box
      sx={{
        marginTop: "32px",
        border: `1px solid ${colorPalette.grey4}`,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        paddingBlock: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          paddingInline: "32px",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <B4CTextfield label="Nombre del paciente a cuidar" />
          <B4CCheckbox label="Usar mi nombre registrado" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <B4CTextfield label="Número de teléfono" />
          <B4CCheckbox label="Usar mi número registrado" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "32px",
        }}
      >
        <B4CTextfield label="Domicilio del servicio" />
        <B4CCheckbox label="Usar dirección registrada" />
        <B4CTextfield label="Domicilio del servicio" isMultiline />
      </Box>
    </Box>
  );
};
