import { Box } from "@mui/material";

import "./B4CCustomTabPanel.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const B4CCustomTabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="custom-tab-panel">{children}</Box>}
    </div>
  );
};
