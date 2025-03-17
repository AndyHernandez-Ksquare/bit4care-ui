import { colorPalette } from "@/style/partials/colorPalette";
import { TermsText } from "./termsText";
import { Box, Dialog, Typography } from "@mui/material";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums";
import { useState } from "react";

export interface TermsAndConditionsModalProps {
  open: boolean;
  handleClose: () => void;
}

export const TermsAndConditionsModal = ({
  open,
  handleClose,
}: TermsAndConditionsModalProps) => {
  const [boxChecked, setBoxChecked] = useState<boolean>(false);

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          maxWidth: 1100,
          maxHeight: 650,
          padding: 24,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        },
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: colorPalette.primary,
            padding: 12,
            mt: 12,
          }}
          gutterBottom
        >
          Términos y Condiciones
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          maxHeight: 500,
          overflow: "auto",
          padding: 12,
          gap: 12,
        }}
      >
        <TermsText />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{
          mobile: "column",

          desktop: "row",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: colorPalette.primary,
              padding: 12,
              mt: 12,
            }}
            gutterBottom
          >
            <B4CCheckbox
              label="Confirmo que he leído y acepto los términos y condiciones y la política de privacidad"
              labelColor={colorPalette.black1}
              checked={boxChecked}
              onChange={() => {
                setBoxChecked(!boxChecked);
              }}
            />
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={16}
          pr={12}
          flexDirection={{
            mobile: "column-reverse",
            desktop: "row",
          }}
        >
          <B4CButton
            label="Cancelar"
            size={Size.Small}
            onClick={handleClose}
            variant="outlined"
            labelColor={colorPalette.primary}
          />
          <B4CButton
            label="Aceptar"
            disabled={!boxChecked}
            size={Size.Small}
            onClick={handleClose}
          />
        </Box>
      </Box>
    </Dialog>
  );
};
