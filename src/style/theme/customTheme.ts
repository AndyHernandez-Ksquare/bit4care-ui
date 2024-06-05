"use client";
import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { spacingScale, spacings } from "../partials/spacings";
import { CSSProperties } from "react";
import { colorPalette } from "../partials/colorPalette";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "body-large": CSSProperties;
    "body-large-bold": CSSProperties;
    "body-medium": CSSProperties;
    "body-medium-bold": CSSProperties;
    "body-normal": CSSProperties;
    "body-normal-bold": CSSProperties;
    "body-small": CSSProperties;
    "body-small-bold": CSSProperties;
  } // allow configuration using `createTheme`

  interface TypographyVariantsOptions {
    "body-large"?: CSSProperties;
    "body-large-bold"?: CSSProperties;
    "body-medium"?: CSSProperties;
    "body-medium-bold"?: CSSProperties;
    "body-normal"?: CSSProperties;
    "body-normal-bold"?: CSSProperties;
    "body-small"?: CSSProperties;
    "body-small-bold"?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "body-large": true;
    "body-large-bold": true;
    "body-medium": true;
    "body-medium-bold": true;
    "body-normal": true;
    "body-normal-bold": true;
    "body-small": true;
    "body-small-bold": true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
    desktopHD: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
  }
}

const headingStyle = (fontSize: number) => ({
  fontFamily: inter.style.fontFamily,
  fontWeight: 700,
  fontSize: `${fontSize}px`,
  lineHeight: `${fontSize * 1.1}px`,
});

const bodyStyle = (fontSize: number, isBold?: boolean) => ({
  fontFamily: inter.style.fontFamily,
  fontWeight: isBold ? 700 : 400,
  fontSize: `${fontSize}px`,
  lineHeight: `${fontSize * 1.4}px`,
});

const customTheme = createTheme({
  palette: {
    primary: { main: colorPalette.primary },
    secondary: { main: colorPalette.secondary },
    warning: { main: colorPalette.warning },
    success: { main: colorPalette.success },
    info: { main: colorPalette.info },
    error: { main: colorPalette.error },
    action: { disabled: colorPalette.grey4 },
  },

  breakpoints: {
    values: {
      xs: 0,
      mobile: 320,
      tablet: 768,
      desktop: 1024,
      desktopHD: 1440,
    },
  },
  spacing: (factor: number) => `${spacingScale * factor}px`,
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      ...headingStyle(56),
    },
    h2: {
      ...headingStyle(48),
    },
    h3: {
      ...headingStyle(40),
    },
    h4: {
      ...headingStyle(32),
    },
    h5: {
      ...headingStyle(24),
    },
    h6: {
      ...headingStyle(20),
    },
    "body-large": {
      ...bodyStyle(20),
    },
    "body-large-bold": {
      ...bodyStyle(20, true),
    },
    "body-medium": {
      ...bodyStyle(18),
    },
    "body-medium-bold": {
      ...bodyStyle(18, true),
    },
    "body-normal": {
      ...bodyStyle(16),
    },
    "body-normal-bold": {
      ...bodyStyle(16, true),
    },
    "body-small": {
      ...bodyStyle(14),
    },
    "body-small-bold": {
      ...bodyStyle(14, true),
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {

          border: `1px solid ${colorPalette.grey4}`,
          boxShadow: "none",

          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&::before': {
            display: 'none',
          },

          '& .Mui-expanded': {
            backgroundColor: colorPalette.primary,
            color: colorPalette.white
          },

        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: colorPalette.primary,


          padding: 0,
          '& .MuiAccordionSummary-content': {
            margin: 0,
            paddingLeft: spacings.spacing2,
          },

        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {

        root: {
          padding: spacings.spacing2,
          backgroundColor: colorPalette.grey5,
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "10px",
          paddingInline: "8px",
          paddingBlock: "16px",
          backgroundColor: colorPalette.primary

        },
        arrow: {
          fontSize: "25px",
          color: colorPalette.primary
        },
      }

    },
    MuiBadge: {
      styleOverrides: {

        root: { "& .MuiBadge-badge": { borderRadius: "30px", height: "24px", border: `2px solid ${colorPalette.white}`, color: colorPalette.white } }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 44,
          height: 24,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: colorPalette.white,
              opacity: 0.8,
              "& + .MuiSwitch-track": {
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: "#33cf4d",
              border: "6px solid #fff",
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 20,
            height: 20,
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: colorPalette.grey5,
            opacity: 1,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '14px',
          color: colorPalette.white,
          borderRadius: "7px",
          paddingBlock: '8px'
        },
        colorWarning: {
          color: colorPalette.black1
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#061F35",
          },
          "&:active": {
            backgroundColor: "#526B81",
          },
          "&:disabled": {
            color: colorPalette.white,
            backgroundColor: colorPalette.grey5,
          },
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: colorPalette.primary,
            color: colorPalette.white,
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: colorPalette.secondary,
            color: colorPalette.white,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: `2px solid ${colorPalette.primary}`,
            backgroundColor: colorPalette.white,
            color: colorPalette.grey1,
            "&.MuiButton-root": {
              "&:hover": {
                backgroundColor: "#CED5DB",
                border: "2px solid #101D26",
              },
              "&.Mui-disabled": {
                border: `1px solid ${colorPalette.grey4}`,
                color: colorPalette.grey5,
                backgroundColor: colorPalette.white,
              },
              "&:active": {
                border: "2px solid #5C6972",
                backgroundColor: "#9DABB6",
              },
            },
          },
        },
      ],
    },
  },
});

export default customTheme;
