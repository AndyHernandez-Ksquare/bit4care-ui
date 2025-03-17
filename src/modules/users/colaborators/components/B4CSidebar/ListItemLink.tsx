import {
  Box,
  ListItemButton,
  ListItemProps,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { spacings } from "@/style/partials/spacings";
import { colorPalette } from "@/style/partials/colorPalette";

export interface IListItemLinkProps extends ListItemProps {
  to?: string | undefined;
  onClick?: () => void;
  label: string;
  icon?: ReactNode;
}

export const ListItemLink = ({
  to,
  icon,
  label,
  onClick,
}: IListItemLinkProps) => {
  const location = useLocation();

  const isActive = location.pathname === (to || "");

  return (
    <Box component={"li"}>
      <ListItemButton
        component={RouterLink}
        to={to || ""}
        onClick={onClick}
        sx={{
          width: "100%",
          paddingBlock: spacings.spacing2,
          borderRadius: "8px",
          textDecoration: "none",
          display: "flex",
          gap: spacings.spacing1,
          color: isActive ? colorPalette.primary : colorPalette.black1,
          backgroundColor: isActive ? colorPalette.white : "none",
        }}
      >
        {icon}
        <ListItemText
          primaryTypographyProps={{ variant: "body-normal-bold" }}
          primary={label}
        />
      </ListItemButton>
    </Box>
  );
};
