import { GlobalStyles } from "@mui/material";
import { colorPalette } from "../partials/colorPalette";

export const GlobalScrollbarStyles = () => (
  <GlobalStyles
    styles={{
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: `${colorPalette.primary} transparent`,
      },
      "*::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        borderRadius: "8px",
      },
      "*::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: colorPalette.primary,
        borderRadius: "10px",
        border: "2px solid transparent",
      },
      "*::-webkit-scrollbar-thumb:hover": {
        backgroundColor: colorPalette.primary,
      },
    }}
  />
);
