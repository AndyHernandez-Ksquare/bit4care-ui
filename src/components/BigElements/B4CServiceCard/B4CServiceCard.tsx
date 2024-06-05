import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Typography } from "@mui/material";
import React from "react";

interface ISummaryCardProps {
  title: string;
  value: string;
  lastRecord: string;
  type?: string;
}

const typeColors: { [key: string]: string } = {
  servicios: "#FF9066",
  ventas: "#4AD991",
  cuidadores: "#8280FF",
  clientes: "#FEC53D",
  default: colorPalette.primary, // Color por defecto
};

const typeIcons: { [key: string]: React.JSX.Element } = {
  servicios: (
    <svg
      width="28"
      height="31"
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.78"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6312 9.80884C12.6512 9.54834 12.8684 9.34718 13.1297 9.34718H13.5475C13.8044 9.34718 14.0195 9.54183 14.045 9.79743L14.6667 16.0138L19.0814 18.5366C19.2372 18.6256 19.3333 18.7912 19.3333 18.9707V19.3592C19.3333 19.6889 19.0199 19.9284 18.7018 19.8416L12.3987 18.1226C12.1673 18.0595 12.0133 17.841 12.0317 17.6018L12.6312 9.80884Z"
        fill="#FF9066"
      />
      <path
        opacity="0.901274"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.72176 0.984388C6.45765 0.66964 5.94771 0.79011 5.85238 1.18977L4.21891 8.03791C4.14123 8.36356 4.39931 8.67206 4.73356 8.65312L11.7783 8.2539C12.1892 8.23062 12.3976 7.74859 12.133 7.43331L10.3316 5.28647C11.4965 4.88842 12.7317 4.68052 14 4.68052C20.2592 4.68052 25.3333 9.75462 25.3333 16.0139C25.3333 22.2731 20.2592 27.3472 14 27.3472C7.74077 27.3472 2.66667 22.2731 2.66667 16.0139C2.66667 14.9631 2.80896 13.9339 3.08641 12.9448L0.518845 12.2246C0.180793 13.4298 0 14.7007 0 16.0139C0 23.7458 6.26801 30.0139 14 30.0139C21.732 30.0139 28 23.7458 28 16.0139C28 8.28186 21.732 2.01385 14 2.01385C12.0551 2.01385 10.2029 2.41043 8.51973 3.12713L6.72176 0.984388Z"
        fill="#FF9066"
      />
    </svg>
  ),
  ventas: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.11111 24.8889H26.4444C27.3036 24.8889 28 25.5853 28 26.4444C28 27.3036 27.3036 28 26.4444 28H1.55556C0.696446 28 0 27.3036 0 26.4444V1.55556C0 0.696446 0.696446 0 1.55556 0C2.41467 0 3.11111 0.696446 3.11111 1.55556V24.8889Z"
        fill="#4AD991"
      />
      <path
        opacity="0.5"
        d="M8.91263 18.175C8.32504 18.8018 7.34063 18.8335 6.71388 18.2459C6.08713 17.6584 6.05537 16.674 6.64295 16.0472L12.4763 9.82498C13.0445 9.21884 13.9888 9.16627 14.6209 9.7056L19.2249 13.6344L25.2235 6.03611C25.7559 5.36181 26.734 5.24673 27.4083 5.77907C28.0826 6.31141 28.1977 7.28959 27.6654 7.96389L20.6654 16.8306C20.1186 17.5231 19.1059 17.6227 18.4347 17.05L13.7306 13.0358L8.91263 18.175Z"
        fill="#4AD991"
      />
    </svg>
  ),
  cuidadores: (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.587821"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66663 5.33333C6.66663 8.27885 9.05444 10.6667 12 10.6667C14.9455 10.6667 17.3333 8.27885 17.3333 5.33333C17.3333 2.38781 14.9455 0 12 0C9.05444 0 6.66663 2.38781 6.66663 5.33333ZM20 10.6667C20 12.8758 21.7908 14.6667 24 14.6667C26.2091 14.6667 28 12.8758 28 10.6667C28 8.45753 26.2091 6.66667 24 6.66667C21.7908 6.66667 20 8.45753 20 10.6667Z"
        fill="#8280FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9778 13.3333C5.68255 13.3333 0.517678 16.5687 0.000868912 22.9323C-0.0272823 23.2789 0.635616 24 0.970003 24H22.9956C23.9972 24 24.0128 23.194 23.9972 22.9333C23.6065 16.3909 18.3616 13.3333 11.9778 13.3333ZM31.2746 24L26.1333 24C26.1333 20.9988 25.1417 18.2291 23.4683 16.0008C28.0103 16.0505 31.7189 18.3469 31.998 23.2C32.0092 23.3955 31.998 24 31.2746 24Z"
        fill="#8280FF"
      />
    </svg>
  ),
  clientes: (
    <svg
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.3165L12.9005 18.7646C13.0394 18.8448 13.1851 18.9027 13.3333 18.9395V33.3847L0.920065 26.0385C0.349784 25.701 0 25.0876 0 24.4249V11.3165ZM30 11.1185V24.4249C30 25.0876 29.6502 25.701 29.0799 26.0385L16.6667 33.3847V18.8129C16.6969 18.7978 16.7269 18.7817 16.7566 18.7646L30 11.1185Z"
        fill="#FEC53D"
      />
      <path
        opacity="0.499209"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.405273 7.70142C0.562849 7.50244 0.761736 7.33426 0.993616 7.21076L14.1186 0.2201C14.6696 -0.0733665 15.3305 -0.0733665 15.8815 0.2201L29.0065 7.21076C29.1852 7.30596 29.3444 7.42771 29.4801 7.56966L15.0899 15.8778C14.9953 15.9325 14.9081 15.995 14.8286 16.064C14.7491 15.995 14.6618 15.9325 14.5672 15.8778L0.405273 7.70142Z"
        fill="#FEC53D"
      />
    </svg>
  ),
  default: <div></div>, // Color por defecto
};

export const B4CServiceCard = ({
  title,
  value,
  lastRecord,
  type,
}: ISummaryCardProps) => {
  const backgroundColor = type ? typeColors[type] : typeColors.default;
  const icon = type ? typeIcons[type] : typeIcons.default;
  return (
    <Box
      sx={{
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "6px 6px 54px 0px #0000000D",
        maxWidth: "262px",
        overflow: "hidden",
        backgroundColor: colorPalette.white,
        width: "100%",
      }}
    >
      <Box
        sx={{
          paddingInline: spacings.spacing2,
          paddingBlock: spacings.spacing2,
          display: "flex",
          flexDirection: "column",
          gap: spacings.spacing2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <Typography variant="body-normal" sx={{ marginBottom: "20px" }}>
              {title}
            </Typography>
            <Typography variant="body-large-bold" sx={{ fontSize: "28px" }}>
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "60px",
              height: "60px",
              position: "relative",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: backgroundColor,
                opacity: 0.2,
                borderRadius: "20px",
                zIndex: 1,
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
              }}
            >
              {icon}
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: spacings.spacing3 }}>
          <Typography variant="body-normal">{lastRecord}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
