import { ListItemButton, ListItemProps, ListItemText } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { spacings } from "@/style/partials/spacings";
import { colorPalette } from "@/style/partials/colorPalette";

export interface IListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  "/admin": "Servicios",
  "/admin/colaboradores": "Colaboradores",
  "/admin/servicios": "Servicios",
  "/admin/clientes": "Clientes",
  "/admin/ajustes": "Ajustes",
};

export const ListItemLink = ({ to, ...other }: IListItemLinkProps) => {
  const location = useLocation();
  const primary = breadcrumbNameMap[to];
  const isActive = location.pathname === to;

  return (
    <li>
      <ListItemButton
        component={RouterLink}
        to={to}
        {...other}
        sx={{
          width: "100%",
          paddingBlock: spacings.spacing2,
          borderRadius: "8px",
          textDecoration: "none",
          paddingLeft: spacings.spacing6,
          display: "flex",
          alignItems: "left",
          color: isActive ? colorPalette.primary : colorPalette.black1,
          backgroundColor: isActive ? colorPalette.white : "none",
        }}
      >
        <ListItemText
          primaryTypographyProps={{ variant: "body-normal-bold" }}
          primary={primary}
        />
      </ListItemButton>
    </li>
  );
};
